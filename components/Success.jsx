import React from "react";

const Success = ({ message }) => {
    return (
        <div className="success">
            <div className="flex justify-center mx-auto border-yellow-200 bg-yellow-400 w-1/2 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
                {message}
            </div>
        </div>
    );
};

export default Success;
