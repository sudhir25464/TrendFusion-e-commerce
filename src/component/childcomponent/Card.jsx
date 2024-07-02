import React from 'react'

const Card = () => {
  return (
    <div class=" relative rounded-xl h-[200px] sm:h-[350px] w-[150px] sm:w-[180px]  ">
      
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-r-3xl rounded-b-full object-cover"
    />
    <div class=" absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="bottom-4 left-4 text-left">
      
    
    </div>
  </div>
  
  )
}

export default Card
