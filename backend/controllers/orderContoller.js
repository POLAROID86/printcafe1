const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const path = require("path");

//Config
require("dotenv").config();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

// --------------------
const sendOrderDetail = (req, res) => {
  const {
    email,
    pages,
    copies,
    printedColor,
    printingSide,
    orderPrice,
    message,
    filename,
  } = req.body;
  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Printcafe",
      link: "https://mailgen.js/",
      // logo: "https://yourstore.com/logo.png",
    },
  });

  let response = {
    body: {
      name: "",
      intro: "Your Order Details",
      table: {
        data: [
          {
            pages: pages,
            copies: copies,
            printedColor: printedColor,
            printingSide: printingSide,
            price: `₹${orderPrice}`,
            filename: filename,
            message: message,
          },
        ],
      },
      outro: "Keep Visiting Us",
    },
  };

  let mail = MailGenerator.generate(response);

  let messages = {
    from: EMAIL,
    to: `${email}`,
    subject: "Your printcafe order details",
    html: mail,
    attachments: [
      {
        filename: `${filename}`,
        path: path.join(__dirname, `../public/Images/${filename}`),
      },
    ],
  };

  transporter
    .sendMail(messages)
    .then(() => {
      return res.status(201).json({
        msg: "you should receive an email",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  // res.status(201).json("getBill Successfully...!");
};

module.exports = {
  sendOrderDetail,
};
