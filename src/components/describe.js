

function Describe() {
  return (
    <>
    <div className="text-center">
    <p className="font-bold text-2xl mb-3 sm:text-3xl">Which describes you best?</p>
    <p className="text-gray-500 text-sm ">This will help us personalize your experience</p>
    </div>
    <div className="flex justify-center pt-5 ">
      <div >
    <ul >
      <li className="border-solid  w-96 border-2 p-3  border-gray-300 shadow-sm rounded-md overflow-hidden hover:shadow-xl ">
        <div  className="flex border-solid border-violet-950" >
        <img className="w-8 h-8 mr-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52Qjqa7-RUr4dAE0crkUOpJjI_GBL25veBw&s" />
        <span>Student or soon to be enrolled</span>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96 my-2  min-w-50 border-gray-300 rounded-md overflow-hidden shadow-sm">
        <div className="flex">
          <img className="h-8 w-8 mr-5" src="https://media.istockphoto.com/id/171335797/photo/teamwork.webp?b=1&s=170667a&w=0&k=20&c=Z4bw8tUfuBzD__qcsq-OmG2e9O6zWD2t6w5VT-cXi0c="/>
        <p>Professional persuing a career</p>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96  min-w-50 border-gray-300 rounded-md overflow-hidden shadow-sm">
      <div className="flex">
          <img className="h-8 w-8 mr-5" src="https://media.istockphoto.com/id/898329720/photo/rhymes.webp?b=1&s=170667a&w=0&k=20&c=i0Rdpe3vlKF_OAEzM2Vjpcp2j_cBBKw1k8Sap36y2OY="/>
        <p>Parent of school-age child</p>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96 my-2  min-w-50 border-gray-300 rounded-md overflow-hidden shadow-sm">
      <div className="flex">
          <img className="h-8 w-8 mr-5" src="https://plus.unsplash.com/premium_photo-1661609005613-2cebc95ac583?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlmZWxvbmclMjBsZWFybmVyfGVufDB8fDB8fHww"/>
        <p>Lifelong learner</p>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96  min-w-50 border-gray-300 rounded-md overflow-hidden shadow-sm">
      <div className="flex">
          <img className="h-8 w-8 mr-5" src="https://media.istockphoto.com/id/1068618334/photo/thinking-asian-woman.webp?b=1&s=170667a&w=0&k=20&c=vSZn3Ca8fdZmr9L-iikxF30IwpnwhJggQOeYodRktlE="/>
        <p>Teacher</p>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96 mt-2  min-w-50 border-gray-300 rounded-md overflow-hidden shadow-sm">
      <div className="flex">
          <img className="h-8 w-8 mr-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52Qjqa7-RUr4dAE0crkUOpJjI_GBL25veBw&s"/>
        <p>Other</p>
        </div>
      </li>
    </ul>
    </div>
  
    </div>
    <div className="text-center">
    <button className= "bg-black text-white my-2 px-8 py-3 rounded-md hover:bg-gray-200 ">Continue</button>
    </div>
    </>
  );
}

export default Describe;
