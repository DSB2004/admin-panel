import EncryptData from "./encrypt_data.util";
const SetCredentials = async (data) => {
    const ENCRYPTED_CREDENTIALS = await EncryptData(data)
    localStorage.setItem('email', ENCRYPTED_CREDENTIALS.Email);
    localStorage.setItem('login_id', ENCRYPTED_CREDENTIALS.EmpID);
    localStorage.setItem("admpnlId", ENCRYPTED_CREDENTIALS.CompId);
    localStorage.setItem("name", ENCRYPTED_CREDENTIALS.Name);
    localStorage.setItem("deptId", ENCRYPTED_CREDENTIALS.DeptID);
    localStorage.setItem("desigId", ENCRYPTED_CREDENTIALS.DesigID);
}

export default SetCredentials;
