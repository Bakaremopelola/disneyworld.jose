// import  "../css/button.css"
import NavBar from './NavBar'
import '../css/display.css'
// import '../css/display.css'

const Display= ()=>{

    
    return(
        <>
       
            <div className="upper"> 
                <span className="display">
                    <h1>TAYLOR SWIFT</h1>
                    <h2>THE ERAS TOUR</h2>
                    <h2>TAYLOR&apos;S EDITION</h2>

                    {<p>includes &quot;cardigan&quot; and four accoustic songs.</p>}
                     <p>now streaming on disney+.</p> 

                    <button className='btn1'>Subscribe now</button>
                </span>
            </div>
        
            
        </> 
    )   
}

export default Display