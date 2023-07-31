
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from "./pages/Home";
import Registration from "./pages/Registration";


function App() {
  // const [formDataArray, setFormDataArray] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalCount, setTotalCount] = useState(0);


  // const getCount = async () => {
  //   let res = await fetch(`http://localhost:8000/data`);
  //   let res2 = await res.json();
  //   setTotalCount(res2.length + 1)

  // };


  // const getCount = async () => {
  //   let res = await fetch(`https://bssa-pdfnew.vercel.app/data`);
  //   let res2 = await res.json();
  //   setTotalCount(res2.length + 1)

  // };




  // https://bssa-pdfnew.vercel.app/data

  // const getData = async () => {
  //   let res = await fetch(`http://localhost:8000/data?_page=${page}&_limit=1`);
  //   let res2 = await res.json();
  //   setFormDataArray(res2);
  // };

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




  // useEffect(() => {
  //   getData();
  // }, [page]);

  // useEffect(() => {
  //   getCount();
  // }, []);
  // // console.log(formDataArray);


  // const handlePreviousPage = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // };

  // const handleNextPage = () => {


  //   const totalPages = Math.ceil(totalCount / 1);
  //   if (page < totalPages) {
  //     setPage(page + 1);
  //   }



  // };

  return (
    <div>





      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/candidate/:id' element={<Registration />} />
        </Routes>
      </Router>



      {/* {formDataArray?.map((formData, index) => {
        return (
          <>

            <div key={formData.Timestamp}>
              <FormComponent formData={formData} index={index + 1} page={page} />
            </div>

          </>
        );
      })}
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}>
        <button disabled={page == 1 ? true : ''} onClick={handlePreviousPage}>Prev</button>
        <spam>{page}</spam>
        <button disabled={page == totalCount ? true : ''} onClick={handleNextPage} >Next</button>
      </div> */}
    </div>
  );
}

export default App;
