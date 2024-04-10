import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Learningpath() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold">Learning paths based on your answers</h1>
      <p className="text-center">Choose one to get started.You can switch anytime.</p>

      <div className="sm:flex justify-center">
        <a href="#" class="block text-center  max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl p-5 m-10 hover:border-yellow-200">
          <div >
            <span className='bg-yellow-400 rounded-lg text-sm px-3 py-0.5'>MOST POPULAR</span><br/>
            <div className='flex mt-2'>
              <div className='text-start'>
                <p className="text-sm   tracking-tight text-gray-900"><span className='font-bold'>Foundational math</span>  Build your foundational skills in algebra,geometry and probability.</p>
              </div>
              <div>
                <img src="https://media.istockphoto.com/id/1481885008/photo/plus-sign-icon.webp?b=1&s=170667a&w=0&k=20&c=wGmf0IakFBfInIHNGlDwfcQJxVAVuCLkfdXhp1m_I8Q="></img>
              </div>
            </div>
          </div>
          
        </a>
        <a href="#" class="block  max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl p-5 m-10 hover:border-yellow-200">
        <div >
            <span className='bg-yellow-400 rounded-lg text-sm px-3 py-0.5'>MOST POPULAR</span><br/>
            <div className='flex mt-2'>
              <div className='text-start'>
                <p className="text-sm   tracking-tight text-gray-900"><span className='font-bold'>mathematical Thinking</span>  Build your foundational skills in algebra,geometry and probability.</p>
              </div>
              <div>
                <img src="https://media.istockphoto.com/id/1481885008/photo/plus-sign-icon.webp?b=1&s=170667a&w=0&k=20&c=wGmf0IakFBfInIHNGlDwfcQJxVAVuCLkfdXhp1m_I8Q="></img>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Learningpath;
