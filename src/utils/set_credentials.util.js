import { encryptData } from "./encrypt_data.util";
const SetCredentials = async (data) => {

    const encrypt_login_id = await encryptData(data.EmpID)
    const encrypt_company_id = await encryptData(data.CompId);
    localStorage.setItem('token', data.Email);
    localStorage.setItem('login_id', encrypt_login_id);
    localStorage.setItem("admpnlId", encrypt_company_id);
    localStorage.setItem("name", data.Name);

}

export default SetCredentials;