import React, { useEffect, useState } from "react";
import axios from "axios";
import homeimg from "../../assets/home.jpg";

export default function Printpdf() {
  // -------SHOP1 DATA---------
  const data = {
    _id: {
      $oid: "6521ccad2da30a33280b175a",
    },
    location: "Unimall",
    paperType: [
      {
        name: "75 Gsm mormal paper",
        price: 2,
        _id: {
          $oid: "6521ccad2da30a33280b175b",
        },
      },
      {
        name: "75 Gsm Bond paper",
        price: 5,
        _id: {
          $oid: "6521ccad2da30a33280b175c",
        },
      },
      {
        name: "100 Gsm Bond paper",
        price: 7,
        _id: {
          $oid: "6521ccad2da30a33280b175d",
        },
      },
    ],

    paperSize: [
      {
        name: "A4",
        price: 5,
        _id: {
          $oid: "6521ccad2da30a33280b175e",
        },
      },
      {
        name: "B5",
        price: 10,
        _id: {
          $oid: "6521ccad2da30a33280b175f",
        },
      },
    ],

    printedColour: [
      {
        name: "Black & White",
        price: 0,
        id: 0,
        _id: {
          $oid: "6521ccad2da30a33280b1760",
        },
      },
      {
        name: "Full Colour",
        price: 10,
        id: 1,
        _id: {
          $oid: "6521ccad2da30a33280b1761",
        },
      },
      {
        name: "Full Colour1",
        price: 15,
        id: 2,
        _id: {
          $oid: "6521ccad2da30a33280b1761",
        },
      },
    ],

    printingSides: [
      {
        name: "Single Side Printing",
        price: 5,
        id: 0,
        _id: {
          $oid: "6521ccad2da30a33280b1762",
        },
      },
      {
        name: "Both Side Printing",
        price: 4,
        id: 1,
        _id: {
          $oid: "6521ccad2da30a33280b1763",
        },
      },
      {
        name: "Both Side Printing1",
        price: 1.5,
        id: 2,
        _id: {
          $oid: "6521ccad2da30a33280b1763",
        },
      },
    ],
    __v: 0,
  };

  // --------------------------------------------------

  const [pages, totalPages] = useState(1);
  const [copies, setCopies] = useState(1);
  const [printedColor, setPrintedColor] = useState(data.printedColour[0].name);
  const [printingSide, setPrintingSide] = useState(data.printingSides[0].name);
  const [printedColorPrice, setPrintedColorPrice] = useState(
    data.printedColour[0].price
  );
  const [printingSidePrice, setPrintingSidePrice] = useState(
    data.printingSides[0].price
  );
  // const [orderPrice, setOrderPrice] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ----------Set Price--------
  const [orderPrice, setOrderPrice] = useState(0);
  useEffect(() => {
    setOrderPrice(
      () =>
        parseInt(pages) *
        parseInt(copies) *
        (parseInt(printedColorPrice) + parseInt(printingSidePrice))
    );
  }, [pages, copies, printedColorPrice, printingSidePrice]);
  // ---------------FileUpload-----------
  const [file, setFile] = useState("");

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("/api/uploadfile", formData)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
    alert("Your File is Uploading");
  };

  // -----------sent Email-----------
  const sendEmail = async () => {
    let dataSend = {
      email: email,
      message: message,
      // location: {data.location},
      pages: pages,
      copies: copies,
      printedColor: printedColor,
      printingSide: printingSide,
      orderPrice: orderPrice,
      filename: file.name,
    };
    const res = axios.post("/api/sendorderdetail", dataSend);
    console.log((await res).data);
    if (window.confirm("Your Order has been placed Please Check Your Email")) {
      // If the user clicks "OK," redirect to the desired page
      window.location.href = "/"; // Replace '/other-page' with the actual URL you want to redirect to
    }
  };
  // ----------------------------------------------

  return (
    <>
      <div className="">
        <span className="flex text-black bg-blue-100 p-2 w-fit place-content-center justify-center mx-auto text-4xl max-[480px]:text-3xl ">
          Location :{data.location}
        </span>
        <div className=" flex flex-row m-10 p-5 bg-slate-200 font-medium text-sm w-min max-[480px]:w-full max-[480px]:flex max-[480px]:flex-col max-[480px]:m-1 max-[480px]:p-1">
          <h1>Upload File</h1>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button
            type="button"
            onClick={upload}
            className=" flex ml-8 max-[480px]:ml-0 max-[480px]:w-min text-white bg-blue-600 hover:bg-blue-400 font-medium rounded-lg text-sm px-4 py-2 mr-2">
            Upload
          </button>
        </div>
      </div>
      {/* ------------------------------------- */}
      <div className="flex flex-row max-[480px]:flex max-[480px]:flex-col m-10 max-[480px]:m-1 max-[480px]:p-1 p-5 max-[480px]:mr-0 bg-slate-200 ">
        <div className="flex flex-col w-[40%] bg-slate-400 text-black font-medium text-sm max-[480px]:w-full max-[480px]:pb-8 pb-8 p-5 max-[480px]:p-0 max-[480px]:px-4 order-0">
          {/* ------------PAGES------------------------ */}
          <div className="flex flex-col">
            <label htmlFor="">PAGES: </label>
            <input
              onChange={(e) => {
                totalPages(e.target.value);
              }}
              type="number"
              min={1}
              defaultValue={1}
            />
          </div>

          {/* --------------COPIES----------------------- */}
          <div className="flex flex-col text-black">
            <label htmlFor="">COPIES: </label>
            <input
              onChange={(e) => {
                setCopies(e.target.value);
              }}
              type="number"
              min={1}
              defaultValue={1}
            />
          </div>

          {/* ------------PRINTED COLOUR:----------- */}
          <div className="flex flex-col text-black">
            <label htmlFor="">PRINTED COLOUR: </label>
            <select
              key={data.printedColour.id}
              onChange={(e) => {
                setPrintedColor(data.printedColour[e.target.value].name);
                setPrintedColorPrice(data.printedColour[e.target.value].price);
              }}>
              {data.printedColour.map((option) => (
                <option value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>

          {/* ------------PRINTING SIDES:---------- */}
          <div className="flex flex-col text-black">
            <label htmlFor="">PRINTING SIDES: </label>
            <select
              key={data.printingSides.id}
              onChange={(e) => {
                setPrintingSide(data.printingSides[e.target.value].name);
                setPrintingSidePrice(data.printingSides[e.target.value].price);
              }}>
              {data.printingSides.map((option) => (
                <option value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          {/* -----------------EMAIL------------ */}
          <div className="flex flex-col text-black">
            <label htmlFor="">Email address</label>
            <input
              type="email"
              placeholder="Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className=" "
            />
          </div>
          {/* -----------------MESSAGE----------- */}
          <div className="flex flex-col text-black">
            <label htmlFor="">Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message here..."
            />
          </div>
        </div>
        {/* ---------------------ORDER DETAIL------------ */}
        <div className="mx-4 max-[480px]:mx-[0]">
          <div className="text-white bg-green-600 font-medium  p-4 pb-[60px] max-[480px]:pb-0 text-1xl max-[480px]:text-sm ">
            <h1 className="m-2 max-[480px]:m-0">Order Detail</h1>
            <p className="m-2 max-[480px]:m-0">No. of Pages :{pages}</p>
            <p className="m-2 max-[480px]:m-0">No. of Copies :{copies}</p>
            <p className="m-2 max-[480px]:m-0">
              Printed Colour :{printedColor}
            </p>
            <p className="m-2 max-[480px]:m-0">
              Printing Sides :{printingSide}{" "}
            </p>
            <span className="flex flex-row bg-green-700 m-2 max-[480px]:m-0">
              <p className="mr-1"> TOTAL COST : Rs</p>
              {/* <p >
                {parseInt(pages) *
                  parseInt(copies) *
                  (parseInt(printedColorPrice) + parseInt(printingSidePrice))}
              </p> */}
              <p>{orderPrice}</p>
            </span>
          </div>
          {/*-----------SUBMIT--------*/}
          <button
            onClick={() => sendEmail()}
            className="flex place-content-end text-white bg-blue-600 hover:bg-blue-400 font-medium rounded-lg text-sm px-4 py-2">
            Place Order
          </button>
        </div>
        {/* -------Images------- */}
        <div className="max-[480px]:hidden h-full w-[30%] ">
          <img className="w-96" src={homeimg} alt="homeimg" />
        </div>
      </div>
    </>
  );
}
