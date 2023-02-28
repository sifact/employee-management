import React from "react";
import { useReducer } from "react";
import Success from "./success";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value,
    };
};
const UpdateUserForm = () => {
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formData).length === 0) {
            return console.log("Don't have form data");
        }
        console.log(formData);
    };

    if (Object.keys(formData).length > 0) {
        return <Success message={"Data added"} />;
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="my-8 grid lg:grid-cols-2 gap-4 w-4/6"
        >
            <div className="">
                <input
                    type="text"
                    className="border w-full  px-5 py-3 focus:outline-none rounded-sm"
                    name="name"
                    onChange={setFormData}
                    placeholder="Name"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={setFormData}
                    className="border w-full px-5 py-3 focus:outline-none rounded-sm"
                />
            </div>

            <div className="">
                <input
                    onChange={setFormData}
                    type="text"
                    className="border w-full  px-5 py-3 focus:outline-none rounded-sm"
                    name="salary"
                    placeholder="Salary"
                />
            </div>
            <div>
                <input
                    onChange={setFormData}
                    type="text"
                    className="border w-full px-5 py-3 focus:outline-none rounded-sm"
                    name="birthday"
                    placeholder="Birthday"
                />
            </div>
            <div className="">
                <input
                    onChange={setFormData}
                    type="date"
                    className="border  px-5 py-3 focus:outline-none rounded-sm mb-4"
                    name="date"
                />
            </div>
            <div className="flex gap-6 mb-4 ">
                <div className="form-check ">
                    <input
                        onChange={setFormData}
                        type="radio"
                        name="status"
                        value="Inactive"
                        id="radioDefault2"
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    />
                    <label
                        htmlFor="radioDefault2"
                        className="inline-block text-gray-600"
                    >
                        Inactive
                    </label>
                </div>
                <div className="form-check">
                    <input
                        onChange={setFormData}
                        type="radio"
                        name="status"
                        value="Active"
                        id="radioDefault1"
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    />
                    <label
                        htmlFor="radioDefault1"
                        className="inline-block text-gray-600"
                    >
                        Active
                    </label>
                </div>
            </div>

            <button className="px-6 py-2 rounded-sm bg-yellow-500 text-white border hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500 transition duration-500 w-1/3">
                Update
            </button>
        </form>
    );
};

export default UpdateUserForm;
