import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Ownway()
{
    return(
        <>
        <div className="sm:flex sm:justify-center 
          ">
            <div>
                <img className="m-auto  h-99 w-96  "    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52Qjqa7-RUr4dAE0crkUOpJjI_GBL25veBw&s" />
            </div>
            <div className="text-center md:mt-20 ">
                <h1 className="text-3xl font-bold  ">You're on your way</h1>
                <div className='text-start pl-5 mt-5'>
                <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-3xl'/><FontAwesomeIcon icon={faStar} className='text-yellow-400 text-3xl'/><FontAwesomeIcon icon={faStar} className='text-yellow-400 text-3xl'/><FontAwesomeIcon icon={faStar} className='text-yellow-400 text-3xl'/><FontAwesomeIcon icon={faStar} className='text-yellow-400 text-3xl'/>
                </div>
                <p className=" text-start  p-5 text-lg w-50 sm:w-80">  "Through its engaging and well structured courses ,brilliant has taught me mathematical concepts that i previously stuggled to understand.I now feel
                confident approaching both technical job interviews and real world problem solving situations."</p>
                <p className="text-start text-lg  p-3">-Jacob S.</p>
                     </div>
            
        </div>
        <div className="text-center ">
    <button className= "bg-black text-white my-2 px-8 py-3 rounded-md hover:bg-gray-200 ">Continue</button>
    </div>
        </>
    )
}
export default Ownway;