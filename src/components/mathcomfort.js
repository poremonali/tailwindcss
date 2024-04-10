import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquareRootAlt } from '@fortawesome/free-solid-svg-icons';

function Mathcomfort() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold">What is your math comfort level</h1>
      <p className="text-center">Choose the highest level you feel confident in - you can always adjust later.</p>

      <div className="sm:flex justify-center">
        <a href="#" class="block  text-center  max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl p-5 m-10 hover:border-yellow-200">
          <div className='sm:flex'>
            <div>
              <table>
                <tr>
                  <td>
                    5<FontAwesomeIcon icon={faXmark} />
                  </td>
                  <td>
                    1/2
                  </td>
                  <td>=?</td>
                </tr>

              </table>

            </div>
            
          </div>
          <div className='mt-12'>
          <p class="font-bold text-smlkm text-gray-700 dark:text-gray-400">Arithmetic</p>

          <p>Introductory</p>
          </div>
        </a>
        <a href="#" class="block  max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl p-5 m-10 hover:border-yellow-200">
          <p class="font-normal text-gray-700 dark:text-gray-400">3x+5=4</p>
          <p class="mt-12 font-bold tracking-tight text-gray-900 dark:text-white">Basic algebra</p>
          <p>Foundational</p>
        </a>

        <a href="#" class="block  max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl p-5 m-10 hover:border-yellow-200">

          <p class="font-normal text-gray-700 dark:text-gray-400 ">
            <table>
              <tr>
                <td></td>
                <td></td>
                <td >-b+<FontAwesomeIcon icon={faSquareRootAlt} className='font-thin text-2xl ' /></td>
              </tr>
              <tr>
                <td>x</td>
                <td>=</td>
                <td><hr className=' text-black bg-black' /></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td >&nbsp;&nbsp;2a </td>
              </tr>
            </table>
            <p class=" text-gray-900 font-bold">Intermediate Algebra</p>
            <p>Intermediate</p>

          </p>
        </a>

      </div>
    </>
  );
}

export default Mathcomfort;
