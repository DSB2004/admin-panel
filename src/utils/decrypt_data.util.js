export const decryptData = async (encryptedText, key) => {
    const decodedText = atob(encryptedText); // Decode Base64
    let result = '';
    for (let i = 0; i < decodedText.length; i++) {
        const charCode = decodedText.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
    }
    return result;
};