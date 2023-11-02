const router = require("express").Router();

const { sendOrderDetail } = require("../controllers/orderContoller");
const upload = require("../controllers/uploadController");

/** HTTP Reqeust */
router.get("", (req, res) => {
  res.send("Hello");
});
// ------Fileupload---------------
router.post("/uploadfile", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
});
// ------------

router.post("/sendorderdetail", sendOrderDetail);

module.exports = router;
