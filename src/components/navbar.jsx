import React from 'react'

const navbar = () => {
    return (
        <div className='border-2 border-gray-300 shadow-lg rounded-lg w-full mx-auto'>
            <header>
                <nav className="bg-gray-800 p-4">
                    <div className="flex justify-between items-center">
                        <div className="text-white text-lg font-bold">
                            Techzoid
                        </div>
                        <ul className="flex gap-4">
                            <li><a href="#" className="text-white  hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Our Game</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Loding</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Rate</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300   ">Book your Hunt</a></li>
                        </ul>
                        <ul className="flex justify-between border border-white rounded-full p-2 w-[150px] space-x-4 text-2xl">
                            <li><a href="#" className="text-gray-300 hover:text-white"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white"><i class="fas fa-envelope"></i></a></li>
                        </ul>
                        <ul className="flex justify-center border border-white rounded-full p-2 w-2/12  space-x-4">
                            <li><a href="#" className="text-gray-300 hover:text-white">Call Us (035463445645)</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default navbar
