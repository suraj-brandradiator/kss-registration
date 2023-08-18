import React, { useState } from "react";

import img from "../assets/img.png";
import Footer from "./Footer";
import CameraCapture from "./CameraCapture";

const FormComponent = ({ formData }) => {
  const page = 1;
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   gender: "",
  //   dob: "",
  //   adharNo: "",
  //   mobileNo: "",
  //   sportsDiscipline: "",
  //   address: "",
  //   applyingAs: "",
  //   district: "",
  //   eventCategory: "",
  //   age: "",
  //   levelOfParticipation: "",
  //   highestParticipation: "",
  //   event: "",
  //   fatherName: "",
  //   motherName: "",
  //   certificate: "",
  //   bankName: "",
  //   accountNumber: "",
  //   ifsc: "",
  //   profile: "",
  //   kss: "",
  //   kss11: "",

  //   // Add more fields here
  // });

  const [checkAttendance, setCheckAttendance] = useState(false);

  const handleChange = (event) => {
    // const { name, value } = event.target;
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form data:", formData);
  };

  let imgUrl;

  let imgArray = formData?.profile?.split(",");
  if (imgArray?.length > 0) {
    imgUrl = formData?.profile?.split(",")[0] + "/preview";
  } else {
    imgUrl = formData?.profile + "/preview";
  }

  let certificateUrl;

  let certificateUrlArray = formData?.certificate?.split(",");
  if (certificateUrlArray?.length > 0) {
    certificateUrl = formData?.certificate?.split(",")[0] + "/preview";
  } else {
    certificateUrl = formData?.certificate + "/preview";
  }

  // console.log(imgArray, "asasaaas");

  // if (formData?.profile.length > 0) {
  // }

  // console.log(imgUrl, "SADADADA");

  let dataArray = formData?.certificate?.split(",");

  let coachdataArray = formData?.coachCertificate?.split(",");

  {
    // console.log(dataArray, "zdadadad");
    // dataArray.map((i) => {
    //   console.log(i, "mappppp");
    // });
    // ?.map((index) => {
    //   console.log(formData?.certificate?.split(",")[index], "DUSSUSUSU");
    // return (
    //   <div key={index}>
    //     <iframe
    //       src={formData?.certificate?.split(",")[index] + "/preview"}
    //       width="100%"
    //       height="500px"
    //       allow="autoplay"
    //     ></iframe>
    //   </div>
    // );
    // });
  }

  return (
    <>
      {/* <div style={{ margin: "auto", width: "100%" }}>
        <img
          src={img}
          alt="img"
          width="92%"
          style={{ marginLeft: "4%", marginTop: "2%", marginBottom: "2%" }}
        />
      </div> */}
      <span
        style={{
          margin: "0 60px 0 0",
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "8px",
        }}
      >
        BrandRadiator_For_BSSA
      </span>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "90%",
          margin: "auto",
          // border: "1px solid black",
          padding: "15px",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Application Number</th>
              <th style={{ width: "50%" }}>
                {`${
                  formData.applyingAs == "Athlete / खिलाडी" ? "A00" : "C00"
                }` + page}{" "}
                {/* <span style={{ margin: "0 10px" }}>
                  BRAND RADIATOR_FOR BSSA
                </span> */}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <label htmlFor="name">Full Name / पूरा नाम </label>
              </td>
              <td>
                <span style={{ fontWeight: "bold" }}>{formData?.name}</span>

                {/* <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                /> */}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="profile">
                  Applicant Photograph / आवेदक फ़ोटो{" "}
                </label>
              </td>
              <td>
                {/* https://drive.google.com/file/d/1g0LkXn6cyKaexNEORgdkwXsMbPwivTAM/preview */}

                {/* https://drive.google.com/open?id=1QzWhN5bULn0tQ77YNkoE2vcpidVQmglz */}
                {/* https://drive.google.com/file/d/1QzWhN5bULn0tQ77YNkoE2vcpidVQmglz/view */}
                {/* https://drive.google.com/file/d/1QzWhN5bULn0tQ77YNkoE2vcpidVQmglz/preview */}

                <div style={{ display: "flex", gap: "10px" }}>
                  <div>
                    <iframe
                      src={imgUrl}
                      width="150"
                      height="150"
                      // allow="autoplay"
                      // allowfullscreen
                    ></iframe>
                  </div>
                  <div>
                    <CameraCapture setCheckAttendance={setCheckAttendance} />
                    {/* <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s"
                      alt="real-time-img"
                      width="200"
                      height="200"
                    /> */}
                  </div>
                </div>
              </td>
            </tr>

            {/* Attendance for candidate */}

            <tr>
              <td>
                <label htmlFor="attendance">Attendance / उपस्थिति</label>
              </td>
              <td>
                {checkAttendance ? "Present" : "Absent"}
                {/* <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                /> */}
              </td>
            </tr>

            {/* <tr>
              <td>
                <label htmlFor="email">Email Address</label>
              </td>
              <td>
                {formData?.email}
                 <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                /> 
              </td>
            </tr> */}

            <tr>
              <td>
                {" "}
                <label htmlFor="gender">Gender / लिंग </label>
              </td>
              <td>
                <input
                  id="gender"
                  name="gender"
                  value={formData?.gender}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dob">Date of Birth / जन्मतिथि</label>
              </td>
              <td>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  value={formData?.dob}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="adharNo">
                  Applicant's Aadhaar number / आवेदक का आधार संख्या
                </label>
              </td>
              <td>
                <input
                  id="adharNo"
                  name="adharNo"
                  value={formData?.adharNo}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobileNo">Mobile number / मोबाइल नंबर</label>
              </td>
              <td>
                {formData?.mobileNo}
                {/* <input
                  id="mobileNo"
                  name="mobileNo"
                  value={formData?.mobileNo}
                  onChange={handleChange}
                /> */}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="sportsDiscipline">
                  Sports Discipline / खेल विधा
                </label>
              </td>
              <td>
                {formData?.sportsDiscipline}
                {/* <input
                  id="sportsDiscipline"
                  name="sportsDiscipline"
                  value={formData?.sportsDiscipline}
                  onChange={handleChange}
                /> */}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address">Address / पता </label>
              </td>
              <td>
                {/* <textarea
                  id="address"
                  name="address"
                  value={formData?.address}
                  onChange={handleChange}
                  cols="100"
                  rows="3"
                /> */}
                {formData?.address}
              </td>
            </tr>
            {/* <tr>
              <td>
                {" "}
                <label htmlFor="applyingAs">
                  I am applying as / आवेदन का रूप
                </label>
              </td>
              <td>
                {" "}
                {formData?.applyingAs}
                <input
                  id="applyingAs"
                  name="applyingAs"
                  value={formData?.applyingAs}
                  onChange={handleChange}
                />
              </td>
            </tr> */}

            {formData.applyingAs == "Coach / प्रशिक्षक" ? (
              <>
                {/* <tr>
                  <td>
                    {" "}
                    <label htmlFor="organizationName">
                      Organization Name / आप कहाँ कार्यरत हैं?
                    </label>
                  </td>
                  <td>
                    {" "}
                    {formData?.organizationName}
                    <input
                      id="applyingAs"
                      name="applyingAs"
                      value={formData?.applyingAs}
                      onChange={handleChange}
                    />
                  </td>
                </tr> */}

                {/* <tr>
                  <td>
                    {" "}
                    <label htmlFor="medalWon">
                      How many medals won in your sport? / आपके खेल प्रशिक्षण से
                      कितने पदक जीते गए?
                    </label>
                  </td>
                  <td>
                    {" "}
                    {formData?.medalWon}
                    <input
                  id="applyingAs"
                  name="applyingAs"
                  value={formData?.applyingAs}
                  onChange={handleChange}
                />
                  </td>
                </tr> */}

                {/* Do you have NIS Diploma/Certificate? /  क्या आपके पास एन.आई.एस डिप्लोमा/सर्टिफिकेट है? */}

                {/* <tr>
                  <td>
                    {" "}
                    <label htmlFor="nicDiploma">
                      Do you have NIS Diploma/Certificate? / क्या आपके पास
                      एन.आई.एस डिप्लोमा/सर्टिफिकेट है?
                    </label>
                  </td>
                  <td>
                    {" "}
                    {formData?.nicDiploma}
                    <input
                      id="applyingAs"
                      name="applyingAs"
                      value={formData?.applyingAs}
                      onChange={handleChange}
                    />
                  </td>
                </tr> */}

                {/* How many athletes from your sport won medals at national/international level or participated at International level? / आपके खेल प्रशिक्षण से कितने खिलाडियों ने राष्ट्रीय/अंतर्राष्ट्रीय स्तर पर पदक जीते या अंतर्राष्ट्रीय स्तर पर भाग लिया? */}

                {/* <tr>
                  <td>
                    {" "}
                    <label htmlFor="participatedLevel">
                      How many athletes from your sport won medals at
                      national/international level or participated at
                      International level? / आपके खेल प्रशिक्षण से कितने
                      खिलाडियों ने राष्ट्रीय/अंतर्राष्ट्रीय स्तर पर पदक जीते या
                      अंतर्राष्ट्रीय स्तर पर भाग लिया?
                    </label>
                  </td>
                  <td>
                    {" "}
                    {formData?.participatedLevel}
                    <input
                      id="applyingAs"
                      name="applyingAs"
                      value={formData?.applyingAs}
                      onChange={handleChange}
                    />
                  </td>
                </tr> */}
              </>
            ) : (
              ""
            )}

            {formData.applyingAs == "Athlete / खिलाडी" ? (
              <tr>
                <td>
                  <label htmlFor="district">District / ज़िला </label>
                </td>
                <td>
                  <input
                    id="district"
                    name="district"
                    value={formData?.district}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            ) : (
              ""
            )}

            {/* {formData.applyingAs == "Athlete / खिलाडी" ? (
              <tr>
                <td>
                  <label htmlFor="eventCategory">Event/Category </label>
                </td>
                <td>
                  {formData?.eventCategory}
                  <input
                  id="eventCategory"
                  name="eventCategory"
                  value={formData?.eventCategory}
                  onChange={handleChange}
                />
                </td>
              </tr>
            ) : (
              ""
            )} */}
            {/* 
            {formData.applyingAs == "Athlete / खिलाडी" ? (
              <tr>
                <td>
                  <label htmlFor="age">Age Category</label>
                </td>
                <td>
                  <input
                    id="age"
                    name="age"
                    value={formData?.age}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            ) : (
              ""
            )} */}

            {formData.applyingAs == "Athlete / खिलाडी" ? (
              <>
                {/* <tr>
                  <td>
                    <label htmlFor="levelOfParticipation">
                      Level of Participation (from April 2022 to March 2023) /
                      भागीदारी का स्तर ( अप्रैल 2022 से मार्च 2023 के बीच ){" "}
                    </label>
                  </td>
                  <td>
                    {formData?.levelOfParticipation}
                    <input
                      id="levelOfParticipation"
                      name="levelOfParticipation"
                      value={formData?.levelOfParticipation}
                      onChange={handleChange}
                    />
                  </td>
                </tr> */}

                {/* <tr>
                  <td>
                    <label htmlFor="highestParticipation">
                      Merit of Highest Participation / भागीदारी की उच्चतम
                      उपलब्धि
                    </label>
                  </td>
                  <td>
                    {formData?.highestParticipation}
                    <input
                  id="highestParticipation"
                  name="highestParticipation"
                  value={formData?.highestParticipation}
                  onChange={handleChange}
                />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                    {" "}
                    <label htmlFor="event">
                      Event / खेल प्रतियोगिता का नाम{" "}
                    </label>
                  </td>
                  <td>
                    {" "}
                    {formData?.event}
                    <input
                  type="text"
                  id="event"
                  name="event"
                  value={formData?.event}
                  onChange={handleChange}
                />
                  </td>
                </tr> */}
                <tr>
                  <td>
                    <label htmlFor="fatherName">
                      Father's Name/ पिता का नाम{" "}
                    </label>
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      value={formData?.fatherName}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="motherName">
                      Mother's Name / माता का नाम
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      value={formData?.motherName}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </>
            ) : (
              ""
            )}

            {}

            <tr>
              <td>
                {" "}
                <label htmlFor="bankName">Bank Name / बैंक का नाम </label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={formData?.bankName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label htmlFor="accountNumber">
                  Applicant Bank Account Number / आवेदक का बैंक खाता नंबर{" "}
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData?.accountNumber}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <label htmlFor="ifsc">IFSC Code </label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="ifsc"
                  name="ifsc"
                  value={formData?.ifsc}
                  onChange={handleChange}
                />
              </td>
            </tr>
            {/* <tr>
              <td>
                <label htmlFor="kss">
                  {" "}
                  Have you been felicitated through Khel Sammaan Samaroh
                  earlier? / क्या आप पहले खेल सम्मान समारोह के माध्यम से
                  सम्मानित किये गए हैं?
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="kss"
                  value={formData?.kss}
                  id="kss"
                  onChange={handleChange}
                />
              </td>
            </tr> */}
            {/* <tr>
              <td>
                <label htmlFor="kss11">
                  {" "}
                  If yes, please mention year of award, sports discipline and
                  cash reward amount / यदि हां, तो कृपया पुरस्कार के वर्ष, खेल
                  विधा और नकद पुरस्कार राशि का उल्लेख करें": "वर्ष- 2020-21
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="kss11"
                  value={formData?.kss11}
                  id="kss11"
                  onChange={handleChange}
                />
                {formData?.kss11}
              </td>
            </tr> */}

            <tr>
              <td>
                <label htmlFor="kss11"> नकद पुरस्कार राशि</label>
              </td>
              <td>
                {/* <input
                  type="text"
                  name="kss11"
                  value={formData?.kss11}
                  id="kss11"
                  onChange={handleChange}
                /> */}
                {formData?.kss11}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="kss11">
                  {" "}
                  Travelling Allowance / यात्रा भत्ता
                </label>
              </td>
              <td>
                {/* <input
                  type="text"
                  name="kss11"
                  value={formData?.kss11}
                  id="kss11"
                  onChange={handleChange}
                /> */}
                500 /- (Five hundred) only
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="kss11">
                  {" "}
                  Applicant signature / आवेदक का हस्ताक्षर
                </label>
              </td>
              <td style={{ padding: "35px" }}>
                {/* <input
                  type="text"
                  name="kss11"
                  value={formData?.kss11}
                  id="kss11"
                  onChange={handleChange}
                /> */}
              </td>
            </tr>

            {/* certificate */}

            {/* <tr>
              <td>
                <label htmlFor="certificate">
                  Upload Certificate(s) / खेल प्रमाणपत्र अपलोड करें{" "}
                </label>
              </td>
              <td>
                {" "}
                <iframe
                  src={certificateUrl}
                  width="350"
                  height="350"
                  allow="autoplay"
                ></iframe>
                {/* <input
                  type="text"
                  id="certificate"
                  name="certificate"
                  // value={formData?.certificate}
                  onChange={handleChange}
                /> 
              </td>
            </tr> */}
          </tbody>
        </table>
        {/* <div className="spacer"></div> */}

        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
        {/* <Footer /> */}

        {/* {formData.applyingAs == "Athlete / खिलाडी" ? (
          <div>
            <h3>Upload Certificate(s) / खेल प्रमाणपत्र अपलोड करें </h3>

            {dataArray?.map((i, index) => {
              return (
                <div key={i}>
                  <h4>Annexure {index + 1}</h4>
                  <iframe
                    src={i + "/preview"}
                    width="100%"
                    height="500px"
                    allow="autoplay"
                    allowfullscreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )} */}

        {/* <div>
          <h3>
            Upload Certificates of Athletes Coached by you / प्रशिक्षित
            खिलाडियों का खेल प्रमाणपत्र अपलोड करें{" "}
          </h3>

          {coachdataArray?.map((i, index) => {
            return (
              <div key={i}>
                <h4>Annexure {index + 1}</h4>
                <iframe
                  src={i + "/preview"}
                  width="100%"
                  height="500px"
                  allow="autoplay"
                ></iframe>
              </div>
            );
          })}
        </div> */}

        {/* Upload Certificates of Athletes Coached by you /  प्रशिक्षित खिलाडियों का खेल प्रमाणपत्र अपलोड करें */}

        {/* <Footer page={page} /> */}

        {/* <div className="footer">
          <div className="item"></div>
          <div className="item">{page}</div>
          <div className="item">BrandRadiator_ForBSSA </div>
        </div> */}
      </form>
    </>
  );
};

export default FormComponent;
