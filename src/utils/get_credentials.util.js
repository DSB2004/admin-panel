import decryptData from "./decrypt_data.util"
const GetCredentials = async () => {
    const local_loginid = localStorage.getItem('login_id');
    const local_admpnlId = localStorage.getItem('admpnlId');
    if (local_loginid && local_admpnlId) {
        const loginid = await decryptData(local_loginid);
        const admpnlid = await decryptData(local_admpnlId);
        return { loginid, admpnlid };
    }
    else {
        return { local_loginid, local_admpnlId };
    }
};


export default GetCredentials;