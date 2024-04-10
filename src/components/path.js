import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
function Path()
{
    return(
        <>
        <div className='text-center mt-30'>
        <FontAwesomeIcon icon={faSpinner} className='text-yellow-300 w-10 h-10 mt-60' />
        <p className='mt-5 font-bold text-lg flex-col flex-wrap'>Finding learning path recommendations for you based on your responses</p>
        </div>
        </>
    )
}
export default Path;