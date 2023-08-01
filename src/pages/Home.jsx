import { useEffect, useState } from "react";
import "../App.css";
import { MdOutlinePreview } from "react-icons/md";
import { Link } from "react-router-dom";

const tableHeading = [
  "Application Id",
  "Name",
  "Gender",
  "Applying as",
  "Date of Birth",
  "Mobile Number",
  "Aadhar Number",
  "Father's Name",
  "Mother's Name",
  "Email Address",
  "View",
];

function Home() {
  const [formDataArray, setFormDataArray] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState();
  const [searchList, setSearchList] = useState([]);

  const getCount = async () => {
    let res = await fetch(`http://localhost:8000/data`);
    let res2 = await res.json();
    setTotalCount(res2.length + 1);
  };

  // https://bssa-pdfnew.vercel.app/data
  //   http://localhost:8000/data

  const getData = async () => {
    let res = await fetch(
      ` http://localhost:8000/data?_page=${page}&_limit=10`
    );
    let res2 = await res.json();
    setFormDataArray(res2);
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    getCount();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = async () => {
    if (!search) {
      return;
    }

    try {
      let res = await fetch(`http://localhost:8000/data`);
      let res2 = await res.json();

      let newArray = res2.filter(function (el) {
        let v = el.name;

        //   let fs = v.toLowerCase();
        //   let ss = search.toLowerCase();
        //   let position = fs.search(ss);
        //   return !(position == -1);

        let fs = v.toLowerCase();
        let ss = search.toLowerCase();
        let position = fs.search(ss);
        console.log(search + typeof search);
        console.log("addhar " + typeof el.adharNo);
        let a = !(position == -1);
        // let num = Number(search);
        if (a) return true;
        let adharstring = String(el.adharNo);
        position = adharstring.search(ss);
        let b = !(position == -1);
        console.log(b);
        if (b) return true;
        let mobilestring = String(el.mobileNo);
        position = mobilestring.search(ss);
        let c = !(position == -1);
        if (c) return true;
        return false;
      });

      setFormDataArray(newArray);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalCount / 1);
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div style={{ width: "95%", margin: "20px auto" }}>
      <div className="searchBox">
        <input
          className="searchInput"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleSearch}
          placeholder="Search by name or mobile number or aadhar number..."
          value={search}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>SN.</th>
            {tableHeading?.map((index) => (
              <th key={index}>{index}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {formDataArray &&
            formDataArray.map((data, index) => (
              <tr tr key={index.Timestamp}>
                <td>{index + 1}</td>
                <td>
                  {data?.applyingAs == "Athlete / खिलाडी"
                    ? `A00${index + 1}`
                    : `C00${index + 1}`}
                </td>
                <td>{data?.name}</td>
                <td>{data?.gender}</td>
                <td>{data?.applyingAs}</td>
                <td>{data?.dob}</td>
                <td>{data?.mobileNo}</td>
                <td>{data?.adharNo}</td>
                <td>{data?.fatherName}</td>
                <td>{data?.motherName}</td>
                <td>{data?.email}</td>
                <td>
                  <Link to={`/candidate/${data?.adharNo}`}>
                    <MdOutlinePreview
                      style={{
                        fontSize: "20px",
                        color: "#043476",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div
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
      </div>
    </div>
  );
}

export default Home;
