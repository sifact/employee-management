import React from "react";
import AddUserForm from "./AddUserForm";
import UpdateUserForm from "./UpdateUserForm";

const Form = () => {
    const flag = false;
    return <>{flag ? <AddUserForm /> : <UpdateUserForm />}</>;
};

export default Form;
