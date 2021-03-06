/** @ignore */
/** @module core */

/**
 * Copyright (c) 2019 Burst Apps Team
 */
import { BurstService } from '../../../burstService';
import { TransactionId } from '../../../typings/transactionId';
import { TransactionResponse } from '../../../typings/transactionResponse';
import { generateSignature, decryptAES, Keys } from '@burstjs/crypto';
import { verifySignature } from '@burstjs/crypto';
import { generateSignedTransactionBytes } from '@burstjs/crypto';
import { convertNumberToNQTString } from '@burstjs/util';
import { broadcastTransaction } from '../transaction/broadcastTransaction';

export const setAccountInfo = (service: BurstService): (
        name: string,
        description: string,
        feeNQT: string,
        senderPublicKey: string,
        senderPrivateKey: string,
        deadline: number,
    ) => Promise<TransactionId> =>
    async (
        name: string,
        description: string,
        feeNQT: string,
        senderPublicKey: string,
        senderPrivateKey: string,
        deadline: number,
    ): Promise<TransactionId> => {

        let parameters = {
            name,
            description,
            deadline: 1440,
            feeNQT: convertNumberToNQTString(parseFloat(feeNQT)),
            publicKey: senderPublicKey
        }; 
        const {unsignedTransactionBytes: unsignedHexMessage} = await service.send<TransactionResponse>('setAccountInfo', parameters);
        const signature = generateSignature(unsignedHexMessage, senderPrivateKey);
        if (!verifySignature(signature, unsignedHexMessage, senderPublicKey)) {
            throw new Error('The signed message could not be verified! Transaction not broadcasted!');
        }

        const signedMessage = generateSignedTransactionBytes(unsignedHexMessage, signature);
        return broadcastTransaction(service)(signedMessage);

    };
