
const fakeCreate = (lastName, firstName, age) => {
    const user = true;
    (lastName != " " && firstName != " " && age != " ") ? user = true : user = false;
    if (user) {
        return { success: true, message: "Create successful", user };
    } else {
        return { success: false, message: "Invalid parameters" };
    }
}

export { fakeCreate }  