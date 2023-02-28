// controller

import Users from "@/Model/users";

// get: http://localhost:3000/api/users
export async function getUser(req, res) {
    try {
        const users = await Users.find({});
        if (!users) {
            return res.status(404).json({ error: "Data not Found" });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data" });
    }
}

// post: http://localhost:3000/api/users
export async function postUser(req, res) {
    try {
        const formData = req.body;
        if (!formData) {
            return res.status(404).json({ error: "form data not provided" });
        }
        Users.create(formData, function (err, data) {
            return res.status(200).json(data);
        });
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data" });
    }
}
// put: http://localhost:3000/api/users/1
export async function putUser(req, res) {
    try {
        const { userId } = req.query;
        const formData = req.body;

        if (userId && formData) {
            await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(formData);
        }
        res.status(404).json({ error: "User not selected" });
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data" });
    }
}
// delete: http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
    try {
        const { userId } = req.query;

        if (userId) {
            await Users.findByIdAndDelete(userId);
            return res.status(200).json({ deleted: userId });
        }
        res.status(404).json({ error: "User not selected" });
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data" });
    }
}
