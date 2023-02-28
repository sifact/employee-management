import React from "react";
import data from "../database/data.json";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Table = () => {
    return (
        <table className="w-full">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Email</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Salary</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Birthday</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {data.map((obj, I) => (
                    <Tr key={I} {...obj} />
                ))}
            </tbody>
        </table>
    );
};

function Tr({ id, name, avatar, email, salary, date, status }) {
    return (
        <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
                <img src={avatar || "#"} alt="" />
                <span className="text-center ml-2 font-semibold">
                    {name || "unknown"}
                </span>
            </td>
            <td className="px-16 py-2">
                <span>{email || "unknown"}</span>
            </td>
            <td className="px-16 py-2">
                <span>{salary || "unknown"}</span>
            </td>
            <td className="px-16 py-2">
                <span>{date || "unknown"}</span>
            </td>
            <td className="px-16 py-2">
                <button className="bg-green-500 text-white px-6 py-2 rounded-sm">
                    {status || "unknown"}
                </button>
            </td>
            <td className="px-16 py-2 ">
                <button>
                    <BiEditAlt className="text-green-500  text-2xl font-medium " />
                </button>
                <button>
                    <AiFillDelete className="text-red-500  text-2xl font-medium " />
                </button>
            </td>
        </tr>
    );
}
export default Table;
