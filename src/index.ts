import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

const PhoneUtil = PhoneNumberUtil.getInstance();

const format = (phoneNumber: string) => {
    const cleaned = phoneNumber.startsWith("00") ? phoneNumber.replace("00", "+") : phoneNumber;
    const formatted = PhoneUtil.parseAndKeepRawInput(cleaned);
    return PhoneUtil.format(formatted, PhoneNumberFormat.E164);
}

/**
 * would throw an error if the provided number is invalid
 * @param phoneNumber a valid mobile number
 */
export const maskPhoneNumber = (phoneNumber: string) => {
    const formatted = format(phoneNumber);
    const masked = formatted.replace(/[\w\W]/g, "*");
    return `${masked.substr(0, formatted.length - 4)}${formatted.substr(formatted.length - 4)}`;
};
