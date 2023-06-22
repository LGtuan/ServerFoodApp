var userModel = require("../../models/user.model");
var bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  console.log(req.body);

  try {
    // Salt là một chuỗi ngẫu nhiên được sử dụng để bảo mật mật khẩu của người dùng
    const salt = await bcrypt.genSalt(10);

    const user = new userModel(req.body);

    // Sử dụng bcrypt để mã hóa mật khẩu của người dùng và lưu trữ
    user.password = await bcrypt.hash(req.body.password, salt);
    let newUser = await user.generateAuthToken();
    newUser.password = "";

    return res.status(201).send({ user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await userModel.findByCredentials(
      req.body.email,
      req.body.password
    );
    if (!user) {
      throw new Error("Sai thông tin đăng nhập");
    }

    let newUser = await user.generateAuthToken();
    delete newUser.password;
    console.log(newUser);

    return res.status(200).json({ user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

exports.edit = async (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  if (req.method == "POST") {
    let obj = new userModel();
    obj.name = req.body.name;
    obj.email = req.body.email;
    obj._id = id;
    try {
      await userModel.findByIdAndUpdate(id, obj);
      const data = await userModel.findOne({ _id: id });

      return res.status(200).json({ data: data, msg: "update thành công" });
    } catch (err) {
      if (err) {
        console.log(err.message);
        return res.status(400).json({ msg: "Không lấy được dữ liệu" });
      }
    }
  }
};
