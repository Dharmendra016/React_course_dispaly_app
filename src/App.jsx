import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Filter from "./Components/Filter/Filter";
import { filterData, apiUrl } from "./data";
import Cards from "./Components/Cards/Cards";
import { toast } from "react-toastify";
import { ThreeCircles } from "react-loader-spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const fetchData = async () => {
    setSpinner(true);
    try {
      const res = await fetch(apiUrl, { method: "GET" });
      const data = await res.json();
      setCourses(data.data);
      // console.log(courses);
    } catch (err) {
      console.log(err);
      toast.error("Can't fetch data from api ");
    }
    setSpinner(false);
  };

  const [courseId, setCourseId] = useState(filterData[0].title);

  console.log(courseId) ; 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App-comp">
      <Navbar />
      <Filter filterData={filterData} courseId={courseId} setCourseId = {setCourseId} />
      {spinner ? (
        <div className="animate">
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : (
        <Cards courses={courses} courseId={courseId} />
      )}
    </div>
  );
};
export default App;
