import connectMongoDB from "../../../database/conDb";
import {
  deleteUsers,
  getUsers,
  postUsers,
  putUsers,
} from "../../../database/controller";

const handler = async (req, res) => {
  connectMongoDB().catch(() =>
    res.status(405).json({ error: "Connection Error" })
  );
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUsers(req, res);
      break;
    case "PUT":
      putUsers(req, res);
      break;
    case "DELETE":
      deleteUsers(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
};

export default handler;
