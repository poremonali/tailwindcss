
function Interest() {
  return (
    <>
    <div className="text-center">
    <p className="font-bold text-2xl mb-3 sm:text-3xl">Which are you most interested in?</p>
    <p className="text-gray-500 text-sm ">Choose just one.This will help us get you started(but wont limit your experience)</p>
    </div>
    <div className="flex justify-center pt-5 ">
      <div >
    <ul>
      <li className="border-solid  w-96 border-2 p-3  border-gray-300 rounded-md overflow-hidden  ">
        <div  className="flex  hover:shadow-sm" >
        <img className="w-7 h-7 mr-5 " src="https://images.unsplash.com/photo-1599081786478-0b4922ea39ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYXJuaW5nJTIwZ3JhcGhzfGVufDB8fDB8fHww" />
        <span>Learning specific skills to advance my carrer</span>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96 my-2  min-w-50 border-gray-300 rounded-md overflow-hidden ">
        <div className="flex">
          <img className="h-8 w-8 mr-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52Qjqa7-RUr4dAE0crkUOpJjI_GBL25veBw&s"/>
        <p>Exploring new topics I'm interested in</p>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96  min-w-50 border-gray-300 rounded-md overflow-hidden shadow-md">
      <div className="flex">
          <img className="h-8 w-8 mr-5" src="https://plus.unsplash.com/premium_photo-1661726815097-05a55740c10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxlYXJuaW5nJTIwZ3JhcGhzfGVufDB8fDB8fHww"/>
        <p>Refreshing my math foundations</p>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96 my-2  min-w-50 border-gray-300 rounded-md overflow-hidden shadow-sm">
      <div className="flex">
          <img className="h-8 w-8 mr-5" src="https://images.unsplash.com/photo-1594643781026-abcb610d394f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXJuaW5nJTIwZ3JhcGhzfGVufDB8fDB8fHww"/>
        <p>Exercising my brain to stay sharp</p>
        </div>
      </li>
      <li className="border-solid border-2 p-3 w-96  min-w-50 border-gray-300 rounded-md overflow-hidden shadow-sm">
      <div className="flex">
          <img className="h-8 w-8 mr-5 " src="https://images.unsplash.com/photo-1599081593734-5e65dd7abfba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlYXJuaW5nJTIwZ3JhcGhzfGVufDB8fDB8fHww"/>
        <p>Something else</p>
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

export default Interest;
