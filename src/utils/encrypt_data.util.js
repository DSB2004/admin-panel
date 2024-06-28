
import { ENCRYPT_KEY } from "../env";

export const encrypt = (text) => {
    if (text !== undefined) {
        text = String(text)
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i) ^ ENCRYPT_KEY.charCodeAt(i % ENCRYPT_KEY.length);
            result += String.fromCharCode(charCode);
        }
        return btoa(result);
    }
    else {
        throw new Error("Value is undefined")
    }

};

function EncryptData(data) {

    return new Promise((resolve, reject) => {
        try {
            let encryptedData = {};
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    encryptedData[key] = encrypt(data[key]);
                }
            }
            resolve(encryptedData);
        } catch (error) {
            reject(error);
        }
    });
}


export default EncryptData;