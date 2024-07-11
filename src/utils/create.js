
const fakeCreate = (lastName, firstName, age) => {
    console.log(lastName + firstName + age);
    if ((lastName !== " " && firstName !== " " && age !== " ")) {
        return true;
    } else {
        return false;
    }
}

export { fakeCreate }  