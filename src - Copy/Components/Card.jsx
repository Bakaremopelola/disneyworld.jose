import {Movies} from './Movies'
import "../css/Card.css"



const Cards= ()=>{
    
    return(
        <div className='card'>
            {
                Movies.map((val,index)=>{
                   return <div  key={index}>
                     <img className='image' src={val.img} alt="" />
                     <h2>{val.text}</h2>
                     <p>{val.parag}</p>
                     <h2>{val.text2}</h2>
                   </div>
                    

                })
            }
        </div>
    

    )
}



export default Cards;













