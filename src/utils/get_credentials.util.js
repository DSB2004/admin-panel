import decryptData from "./decrypt_data.util"
const GetCredentials = async () => {
    const loginid = await decryptData(localStorage.getItem('login_id'));
    const admpnlid = await decryptData(localStorage.getItem('admpnlId'));
    return { loginid, admpnlid };
};


export default GetCredentials;