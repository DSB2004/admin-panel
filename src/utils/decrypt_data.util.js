
import { ENCRYPT_KEY } from "../config/index.config";
const decryptData = async (encryptedText) => {
    const decodedText = atob(encryptedText); // Decode Base64
    let result = '';
    for (let i = 0; i < decodedText.length; i++) {
        const charCode = decodedText.charCodeAt(i) ^ ENCRYPT_KEY.charCodeAt(i % ENCRYPT_KEY.length);
        result += String.fromCharCode(charCode);
    }
    return result;
};
export default decryptData;