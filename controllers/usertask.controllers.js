const { usertaskService } = require("../services");

const getusertask = async (req, res) => {
  const usertask = await usertaskService.getusertask();

  console.log(usertask, "get");

  res.status(200).json({
    message: "product get success",
    data: usertask,
  });
};

const addusertask = async (req, res) => {
  try {
    const body = req.body;

    console.log(body);

    const usertask = await usertaskService.addusertask(body);

    req.status(201).json({
      message: "usertask created success",
      data: usertask,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleteusertask = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const usertask = await usertaskService.deleteusertask(id);
    if (!usertask) {
      throw new Error("Something want wrong");
    }
    res.status(200).json({
      message: "usertask delete success",
      data: usertask,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateusertask = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    const usertask = await usertaskService.updateusertask(id, body);

    res.status(200).json({
      message: "usertask updated success",
      data: usertask,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { getusertask, addusertask, deleteusertask, updateusertask };