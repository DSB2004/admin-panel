const GetCredentials = () => {
    const loginid = localStorage.getItem('login_id');
    const admpnlid = localStorage.getItem('admpnlId');
    return { loginid, admpnlid };
};


export default GetCredentials;