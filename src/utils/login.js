
const fakeLogin = (username, email , password) => {
    console.log("a")
    let user = true;
    (username !== "" && email !== "" && password !== "") ? user = true : user = false;
    if (user) {
        return { success: true, message: "Login successful", user };
    } else {
        return { success: false, message: "Invalid username or password" };
    }
}

export { fakeLogin }  