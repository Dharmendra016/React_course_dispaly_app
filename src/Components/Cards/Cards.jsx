import { useState } from "react";
import Card from "../Card/Card";
import "./Cards.css"


const Cards = ({courses , courseId}) => {

  const [likedCourses , setLikedCourses] = useState([]);


  const coursesArray = Object.values(courses);
  const allCourses = [] ;
  coursesArray.forEach((data) => {
    data.forEach((d)=>{
      allCourses.push(d) ;
    })
  })
  console.log(coursesArray)
  console.log("courses" , allCourses)

 
  if( allCourses.length === 0){
    return (
      <div className="anotherUI">
        There is no Data.
      </div>
    )
  }


  return (
    <div className="Cards">
      {
        courseId === "All" ? allCourses.map((data) => {
          return <Card courseData = {data}  likedCourses = {likedCourses} setLikedCourses= {setLikedCourses} /> 
        })
        :
         courses[courseId].map((data) => {
          return <Card courseData = {data} likedCourses = {likedCourses} setLikedCourses= {setLikedCourses} />
        })
       
      }
     

    </div>
  )
}

export default Cards;