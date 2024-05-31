
import { ENCRYPT_KEY } from "../config/index.config";

export const encryptData = async (text) => {
console.log(text)
if(text){
    text = String(text)
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) ^ ENCRYPT_KEY.charCodeAt(i % ENCRYPT_KEY.length);
        result += String.fromCharCode(charCode);
    }
    return btoa(result);
}

};

