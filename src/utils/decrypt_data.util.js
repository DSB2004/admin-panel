
import { ENCRYPT_KEY } from "../config/index.config";

export const decrypt = (encryptedText) => {
    const decodedText = atob(encryptedText);
    let result = '';
    for (let i = 0; i < decodedText.length; i++) {
        const charCode = decodedText.charCodeAt(i) ^ ENCRYPT_KEY.charCodeAt(i % ENCRYPT_KEY.length);
        result += String.fromCharCode(charCode);
    }
    return result;
};

const DecryptData = (encryptedObj) => {
    let decryptedData = {};
    for (let key in encryptedObj) {
        if (encryptedObj.hasOwnProperty(key)) {
            decryptedData[key] = decrypt(encryptedObj[key]);
        }
    }
    return decryptedData;
}

export default DecryptData;
