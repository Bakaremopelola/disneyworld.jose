import '../css/NavBar.css'
import { Menu } from './Movies'

const NavBar = ()=>{

    return(
        <div className='NavBar'>

                    <a href="#" className='logo'>
                        <img src="../../src/assets/disney.png" alt="" />
                    </a>  
        
                <div className='left'>    

                    <span className='other'>
                        {
                            Menu.map((val,index)=>{

                                return <div className='All' key={index}>

                                    <a href="">{val.head}
                                    
                                        <div className='subMenu'>

                                            <ul>

                                                <li><a href="">{val.find}</a></li>
                                                <li><a href="">{val.introduce}</a></li>
                                                <li><a href="">{val.watch}</a></li>
                                                <li><a href="">{val.marvel}</a></li>
                                                <li><a href="">{val.national}</a></li>

                                            </ul>
                                        </div>
                                    </a>
                                </div>
                            })
                        }
                    </span>  

                        <a href="">Shop</a>
                </div>
                

           
        </div>
    )
}
export default NavBar
