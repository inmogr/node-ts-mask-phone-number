# Introduction

this is a utility package to help masking the phone number for security purposes

## Installation

    yarn add mask-phone-number

or

    npm i mask-phone-number
    
## Usage in TypeScript

### Import Line

    import {maskPhoneNumber} from "mask-phone-number"
    
### Mask

    maskPhoneNumber("+1 (960) 447-2728") // *******2728
    maskPhoneNumber("001 (977) 567-2466") // *******2466
    maskPhoneNumber("+19604472728") // *******2728
    maskPhoneNumber("0019775672466") // *******2466

### Error Handling

    "maskPhoneNumber" will throw an error if the phone number provided is invalid or not properly formated

