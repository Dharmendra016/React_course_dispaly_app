import { useState } from "react";
import "./Card.css"
import { FcLikePlaceholder } from 'react-icons/fc';
import {FcLike} from 'react-icons/fc';
import { toast } from "react-toastify";

const Card = ({courseData , likedCourses , setLikedCourses}) => {

   
  function likeHandeler() {
    if(likedCourses.includes(courseData.id)){
      toast.error("removed like successfully");
      
      setLikedCourses( (curr) => curr.filter( (ele) => {
        return ele !== courseData.id
      }) 
      );

    }else{
      toast.success("liked successfully");
      setLikedCourses((prev) => [...prev , courseData.id]);
    }
    console.log("likedCourses" , likedCourses);
  }

  return (
    <div className="Card">
        <div className="cardImg">
          <img src={courseData.image.url} alt="" />
        </div>
        <div className="circle" onClick={likeHandeler}>
          {likedCourses.includes(courseData.id) ? <FcLike size={"30px"} /> :
          <FcLikePlaceholder size={"30px"} />}

        </div>
        
        <div className="cardTitleNDescription">
          <h1>{courseData.title}</h1>
          <p>{courseData.description.length <= 100 ? courseData.description 
          : courseData.description.substring(0,100) }... </p>
        </div>
    </div>
  )
}

export default Card