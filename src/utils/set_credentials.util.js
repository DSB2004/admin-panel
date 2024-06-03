import EncryptData from "./encrypt_data.util";
const SetCredentials = async (data) => {
    if (data.EmpID && data.CompId) {
        const ENCRYPTED_CREDENTIALS = await EncryptData(data)
        localStorage.setItem('token', ENCRYPTED_CREDENTIALS.Email);
        localStorage.setItem('login_id', ENCRYPTED_CREDENTIALS.EmpID);
        localStorage.setItem("admpnlId", ENCRYPTED_CREDENTIALS.CompId);
        localStorage.setItem("name", ENCRYPTED_CREDENTIALS.Name);
    }

}

export default SetCredentials;