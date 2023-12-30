import "./Filter.css"

export default function Filterbar({filterData ,courseId , setCourseId}) {

  return (

    <>
        <ul className = {`${courseId === filterData.title ? "marked" : "notmarked"}`}s>
            <li onClick={() => setCourseId(filterData.title)} className="filterItem"  >{filterData.title}</li>
        </ul>
    </>
  )
}
