import User from "../model/user";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) return res.status(404).json({ error: "There is no user" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Data fetching Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await User.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not Found" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User" });
  }
};

export const postUsers = async (req, res) => {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "There is no form data" });
    User.create(formData, (err, data) => {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const putUsers = async (req, res) => {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      await User.findByIdAndUpdate(userId, formData);
      res.status(200).json(formData);
    }
    res.status(404).json({ error: "There is no user" });
  } catch (error) {
    res.status(404).json({ error: "Updating Error" });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await User.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: userId });
    }
    res.status(404).json({ error: "There is no user" });
  } catch (error) {
    res.status(404).json({ error: "Deleting Error" });
  }
};
