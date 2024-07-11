
const fakeCreate = (lastName, firstName, age) => {
    let user = true;
    (lastName !== " " && firstName !== " " && age !== " ") ? user = true : user = false;
    if (user) {
        return true;
    } else {
        return false;
    }
}

export { fakeCreate }  