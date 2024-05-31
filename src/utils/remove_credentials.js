
const RemoveCredentials = async () => {
    localStorage.removeItem('login_id');
    localStorage.removeItem('admpnlId');
    window.location.reload();

};


export default RemoveCredentials;