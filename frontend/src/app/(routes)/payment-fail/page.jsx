import Link from "next/link"

const page = () => {

    return <>
    <>
  {/* component */}
  <div className="bg-gray-100 h-screen">
    <div className="bg-white p-6  md:mx-auto">
    
        <img       className="text-green-600 w-16 h-16 mx-auto my-6"
   src="/failed.svg"/>
      <div className="text-center">
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
          Payment Failed!
        </h3>
        <p className="text-gray-600 my-2">
          Thank you for booking car with us
        </p>
        <p> Have a great day!</p>
        <div className="py-10 text-center">
          <Link
            href="/"
            className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
          >
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  </div>
</>

    
    
    
    </>


}



export default page