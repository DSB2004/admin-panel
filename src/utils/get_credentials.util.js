
const GetCredentials = () => {
    const loginid = localStorage.getItem('login_id');
    const admpnlId = localStorage.getItem('admpnlId');
    return { loginid, admpnlId };

};


export default GetCredentials;