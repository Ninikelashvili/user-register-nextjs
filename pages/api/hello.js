import connectMongoDB from "../../database/conDb";

const handler = (req, res) => {
  connectMongoDB();
  res.status(200).json({ name: "John Doe" });
};

export default handler;
