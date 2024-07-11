
const fakeLogin = (username, email , password) => {
    if ((username !== "" && email !== "" && password !== "")) {
        return true;
    } else {
        return false;
    }
}

export { fakeLogin }  