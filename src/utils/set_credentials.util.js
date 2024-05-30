const SetCredentials = (data) => {
    console.log(data)
    localStorage.setItem('token', data.Email);
    localStorage.setItem('login_id', data.EmpID);
    localStorage.setItem("admpnlId", data.CompId);
    localStorage.setItem("name", data.Name);
}

export default SetCredentials;