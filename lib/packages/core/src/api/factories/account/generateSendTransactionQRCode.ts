/** @ignore */
/** @module core */

/**
 * Original work Copyright (c) 2019 Burst Apps Team
 */
import {BurstService} from '../../../burstService';

export const generateSendTransactionQRCode = (service: BurstService):
    (
        receiverId: string,
        amountNQT?: number,
        feeSuggestionType?: string
    ) => Promise<ArrayBufferLike> =>
    (
        receiverId: string,
        amountNQT: number = 0,
        feeSuggestionType: string = 'standard'
    ): Promise<ArrayBufferLike> =>
        service.query('generateSendTransactionQRCode', {
            receiverId,
            amountNQT,
            feeSuggestionType
        });
