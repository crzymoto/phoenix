# Change Log
All notable changes to this project will be documented in this file.

##Unreleased

- Export of Api Interface Types
- Entirely removed BigNumber

## 0.1.0-rc.3
### General
- BRS exceptions thrown as `HttpError` now

### Account
- Modified `Account` type to better reflect what is returned from BRS API. This is a breaking change, please see the `Account` for the new property names.  
- Added `setAccountInfo` for setting account name and description

### Block
- Added `getBlocks`


## 0.1.0-rc1
### Network
- Added `suggestFees` for getting suggested fees.
- Added `sendMoney` for generating the unsigned transaction, signing it, and broadcasting it.

### Account
- Added `getAliases` to retrieve aliases for an account
- Added `generateSendTransactionQRCode` and `generateSendTransactionQRCodeAddress` methods for generating a QR code image or URL, respectively.
