const getCredentials = () => {
    const loginid = localStorage.getItem('login_id');
    const admpnlid = localStorage.getItem('admpnlId');
    const logintype = localStorage.getItem('logintype');
    return { loginid, admpnlid, logintype };
};
