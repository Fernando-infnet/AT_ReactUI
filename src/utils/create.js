
const fakeCreate = (lastName, firstName, age) => {
    if ((lastName !== "" && firstName !== "" && age !== "")) {
        return true;
    } else {
        return false;
    }
}

export { fakeCreate }  