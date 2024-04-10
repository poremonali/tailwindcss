import {Link} from 'react-router-dom';
function Index()
{
    return(
        <>
            <ul className='flex flex-wrap bg-blue-500 text-center mb-3 p-2'>
                <li className='px-2'>
                    <Link to="/">Describe</Link>
                </li>
                <li>
                    <Link to="/interest">Interest</Link>
                </li>
                <li className='px-2'>
                    <Link to="/learningpath">LearningPath</Link>
                </li>
                <li>
                    <Link to="/mathcomfort">Mathcomfort</Link>
                </li>
                <li className='px-2'>
                    <Link to="/ownway">Ownway</Link>
                </li>
                <li>
                    <Link to="/path">Path</Link>
                </li>
                <li className='px-2'>
                    <Link to="/rightplace">RightPlace</Link>
                </li>
            </ul>
            
        </>
    )
}
export default Index;