import React, { useState } from "react";
import { Link } from 'react-router-dom';


import "./Home.css";
import BecomeAGuide from "../Forms/BecomeAGuide";




function UserHome() {

    const [showMyModal, setShowMyModal] = useState(false)

    const handleOnClose = () => setShowMyModal(false)

    const tourPackages = [
        {
            image: "/Images/1.jpg",
            place: "Tour Destination 1",
            
        },
        {
            image: "/Images/2.jpg",
            place: "Tour Destination 2",
            
        },
        {
            image: "/Images/1.jpg",
            place: "Tour Destination 1",
            
        },
        {
            image: "/Images/2.jpg",
            place: "Tour Destination 2",
            
        },
        // Add more tour package data as needed
    ];

    return (
        <div>
            <div className="bg-cover bg-center bg-no-repeat h-screen relative" style={{ backgroundImage: "url('/Images/3.jpg')" }}>
                <nav className="p-4 bg-black bg-opacity-70 text-white flex  items-center">
                    <h1 className="text-yellow-500 text-2xl font-bold mr-10">Wander Mate</h1>
                    <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pl-10">

                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/community" className="hover:underline">Community</Link>
                        </li>

                        <li>
                            <a href="#" className="hover:underline">Travel Partner</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Find a Guide</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </nav>


                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 class="text-white font-bold text-3xl mb-4">Find A Guide And Travel Buddy</h1>
                    <h2 class="text-white mb-4">Share Costs and Experiences</h2>
                    <form className="bg-black bg-opacity-70 h-150 p-4 rounded-lg text-white flex flex-row items-center">
                        <div className="mr-4 flex-grow">
                            <label htmlFor="from" className="sr-only">From</label>
                            <input
                                type="Date"
                                id="from"
                                placeholder="Enter From"
                                className="w-full px-3 py-2 border rounded-md bg-white text-black"
                            />
                        </div>
                        <div className="mr-4 flex-grow">
                            <label htmlFor="to" className="sr-only">To</label>
                            <input
                                type="Date"
                                id="to"
                                placeholder="Enter To"
                                className="w-full px-3 py-2 border rounded-md bg-white text-black"
                            />
                        </div>
                        <div className="mr-4 flex-grow">
                            <label htmlFor="destination" className="sr-only">Destination</label>
                            <input
                                type="text"
                                id="destination"
                                placeholder="Enter Destination"
                                className="w-full px-3 py-2 border rounded-md bg-white text-black"
                            />
                        </div>
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
                            Schedule a Trip
                        </button>
                    </form>
                </div>







            </div>
            <div className="bg-black text-white p-8">
                <h2 className="text-yellow-500 text-3xl font-bold mb-4">How Wander Mate works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Box 1 */}
                    <div className="border-yellow-500 border-2 p-4">
                        <p className="text-yellow-500 text-2xl font-bold">01</p>
                        <h3 className="text-white text-xl font-semibold">Step 1</h3>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* Box 2 */}
                    <div className="border-yellow-500 border-2 p-4">
                        <p className="text-yellow-500 text-2xl font-bold">02</p>
                        <h3 className="text-white text-xl font-semibold">Step 2</h3>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* Box 3 */}
                    <div className="border-yellow-500 border-2 p-4">
                        <p className="text-yellow-500 text-2xl font-bold">03</p>
                        <h3 className="text-white text-xl font-semibold">Step 3</h3>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* Box 4 */}
                    <div className="border-yellow-500 border-2 p-4">
                        <p className="text-yellow-500 text-2xl font-bold">04</p>
                        <h3 className="text-white text-xl font-semibold">Step 4</h3>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white flex justify-between p-8">
                <div className="w-1/2 pr-8"> {/* Increase pr-8 to move the content to the right */}
                    <h2 className="text-yellow-500 text-3xl font-bold mb-4">Become a Guide</h2>
                    <p className="text-white mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.
                    </p>
                    <button onClick={() => setShowMyModal(true)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"

                    >
                        Become a Guide
                    </button>

                </div>
                
                <div className="w-1/2">
                    <div className="flex items-center justify-end h-[385px] w-[500px]"> {/* Set the height and width */}
                        <img src="/Images/image1.jpg" alt="Guide" className="h-96 w-96" /> {/* Set the image height and width */}
                    </div>
                </div>
            </div>
            <div className="bg-black text-white flex justify-between p-8">
                <div className="w-1/2">
                    <div className="flex items-center justify-end h-[385px] w-[500px]"> {/* Set the height and width */}
                        <img src="/Images/p7.jpg" alt="Guide" className="h-96 w-96 " /> {/* Set the image height and width */}
                    </div>
                </div>
                <div className="w-1/2 pr-8"> {/* Increase pr-8 to move the content to the right */}
                    <h2 className="text-yellow-500 text-3xl font-bold mb-4">Become a Guide</h2>
                    <p className="text-white mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                        ac tempus ligula vestibulum ac.
                    </p>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
                        Become a Guide
                    </button>
                </div>

            </div>
            <div className="bg-black text-white p-8">
                <div className="flex justify-between">
                    <div className="w-[500px] h-[385px] pr-4 ml-auto"> {/* Move the left image more to the right */}
                        <img src="/Images/p8.png" alt="About Us Left" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center mt-8">
                        <h2 className="text-yellow-500 text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-white mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque magna,
                            ac tempus ligula vestibulum ac.
                        </p>
                    </div>
                    <div className="w-[500px] h-[385px] pl-4 mr-auto"> {/* Move the right image more to the left */}
                        <img src="/Images/p8.png" alt="About Us Right" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-black text-white p-8">
                <h2 className="text-yellow-500 text-3xl font-bold mb-4 text-center">Tour Packages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tourPackages.map((packageItem, index) => (
                        <a key={index} href={`/tour/${index}`} className="block relative">
                            <img src={packageItem.image} alt={packageItem.place} className="w-full h-96 object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2">
                                <h3 className="text-lg font-semibold">{packageItem.place}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
            <BecomeAGuide onClose={handleOnClose} visible={showMyModal} />

        </div>

    )
}
export default UserHome;