import '../App.css'
const Question = (props) =>{
return (
    <div className='section question'>
      <img src = {props.image}/>
      <div className = "question-content">
          <p>{props.name}</p>
<audio src= {props.audio} ></audio>
      </div>
    </div>

)
}

export default Question