import { Link } from 'react-router-dom'
import './btnBHome.module.css'

export function HomeButton(){
    
    return(
        <div className='btnHome'>
            <Link to='/'> 
                <button>Home</button>
            </Link>  
        </div>
    )
    
}