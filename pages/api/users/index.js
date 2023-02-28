import connectMongo from "@/database/connect";
import { getUser, postUser, putUser, deleteUser } from "@/database/controler";

export default async function handler(req, res) {
    connectMongo().catch(() =>
        res.status(405).json({ error: "Error in the connection" })
    );

    // type of request
    const { method } = req;

    switch (method) {
        case "GET":
            getUser(req, res);
            break;
        case "POST":
            postUser(req, res);
            break;
        case "PUT":
            putUser(req, res);
            break;
        case "DELETE":
            // res.status(200).json({ method, name: "DELETE Request" });
            deleteUser(req, res);

            break;
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
    //
    // res.status(200).json({ name: "John Doe" });
}
