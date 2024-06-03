
const GetCredentials = () => {
    const loginid = localStorage.getItem('login_id');
    const panelid = localStorage.getItem('admpnlId');
    return { loginid, panelid };

};

export default GetCredentials;