
const RemoveCredentials = async () => {
    localStorage.removeItem('email');
    localStorage.removeItem('login_id');
    localStorage.removeItem("admpnlId");
    localStorage.removeItem("name");
    localStorage.removeItem("deptId");
    localStorage.removeItem("desigId");
    window.location.reload();

};


export default RemoveCredentials;