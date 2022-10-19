export const maskPhoneNumber = (phoneNumber: string) => {
    const masked = `${phoneNumber}`.replace(/[\w\W]/g, "*");
    return `${masked.substring(0, masked.length - 4)}${phoneNumber.substring(phoneNumber.length - 4)}`;
};
