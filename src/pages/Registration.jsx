import React from "react";

import "../App.css";
import FormComponent from ".././comp/FormData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Registration = () => {
  const [formDataArray, setFormDataArray] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const { id } = useParams();
  const [formData, setformData] = useState({});
  //   const []

  //   const getCount = async () => {
  //     let res = await fetch(`http://localhost:8000/data`);
  //     let res2 = await res.json();
  //     setTotalCount(res2.length + 1);
  //   };

  // const getCount = async () => {
  //   let res = await fetch(`https://bssa-pdfnew.vercel.app/data`);
  //   let res2 = await res.json();
  //   setTotalCount(res2.length + 1)

  // };

  // https://bssa-pdfnew.vercel.app/data

  //   const getData = async () => {
  //     let res = await fetch(`http://localhost:8000/data?_page=${page}&_limit=1`);
  //     let res2 = await res.json();
  //     setFormDataArray(res2);
  //   };

  // const getData = async () => {
  //   let res = await fetch(`https://bssa-pdfnew.vercel.app/data?_page=${page}&_limit=1`);
  //   let res2 = await res.json();
  //   setFormDataArray(res2);
  // };

  // const getData = async () => {
  //   let res = await fetch(`http://localhost:8000/data`);
  //   let res2 = await res.json();
  //   setFormDataArray(res2);
  // };

  const getData = async () => {
    let res = await fetch(`http://localhost:8000/data`);
    let res2 = await res.json();

    const obj = res2.find((x) => x.adharNo == id);
    console.log(obj);
    setformData(obj);
    console.log(id);
  };

  useEffect(() => {
    getData();
  }, []);

  //   useEffect(() => {
  //     getCount();
  //   }, []);
  // console.log(formDataArray);

  //   const handlePreviousPage = () => {
  //     if (page > 1) {
  //       setPage(page - 1);
  //     }
  //   };

  //   const handleNextPage = () => {
  //     const totalPages = Math.ceil(totalCount / 1);
  //     if (page < totalPages) {
  //       setPage(page + 1);
  //     }
  //   };

  return (
    <div>
      {/* <Home /> */}
      <div key={formData.Timestamp}>
        <FormComponent formData={formData} />
      </div>

      {/* {formDataArray?.map((formData, index) => {
        return (
          <>
         
          </>
        );
      })} */}
      {/* <div
        style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}
      >
        <button disabled={page == 1 ? true : ""} onClick={handlePreviousPage}>
          Prev
        </button>
        <spam>{page}</spam>
        <button
          disabled={page == totalCount ? true : ""}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Registration;
