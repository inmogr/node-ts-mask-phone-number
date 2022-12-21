import { PhoneNumberUtil } from "google-libphonenumber";

const PhoneUtil = PhoneNumberUtil.getInstance();

/**
 * would throw an error if the provided number is invalid
 * @param phoneNumber a valid mobile number
 */
export const extractCountryCodeFromPhoneNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.startsWith("00") ? phoneNumber.replace("00", "+") : phoneNumber;
    const formatted = PhoneUtil.parseAndKeepRawInput(cleaned);
    const countryCode = formatted.getCountryCode();
    return `${countryCode}`;
};
