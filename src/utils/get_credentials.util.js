
const GetCredentials = () => {
    const loginid = localStorage.getItem('login_id');
    const panelid = localStorage.getItem('admpnlId');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem("name");
    const deptId = localStorage.getItem("deptId");
    const desigId = localStorage.getItem("desigId");
    return { loginid, panelid, email, name, deptId, desigId };

};

export default GetCredentials;