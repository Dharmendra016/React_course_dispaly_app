import Filterbar from "./Filterbar"
import "./Filter.css"

function Filter({filterData ,courseId , setCourseId }) {

  return ( 
    <div className={`filter-bar ` }>
        {
        filterData.map((data) => {
          console.log('cid ' , courseId  , 'did' , data.title);
            return <Filterbar filterData = {data} id = {data.id} courseId = { courseId} setCourseId = {setCourseId}/>
        })
        }
    </div>
  )
}

export default Filter
