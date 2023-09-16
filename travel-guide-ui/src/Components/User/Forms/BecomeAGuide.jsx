import React from "react";

export default function BecomeAGuide({ visible, onClose }) {
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose()

    }
    if (!visible) return null;
    
    return (
        <div id="container"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded">
                <nav className="bg-yellow-500 p-4">
                    <div className="flex items-center justify-between">
                        <div className="text-white text-xl font-semibold mr-10">
                            Wander Mate
                        </div>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="text-white hover:text-gray-300 ml-10">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Travel Partner
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Find a Guide
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="bg-black text-white p-8">
                    <h1 className="text-yellow-500 text-3xl font-semibold mb-4">
                        How can I become a Guide?
                    </h1>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel magna nec ante blandit ultrices.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                    </p>
                    {/* Add more description content as needed */}
                    <section
                        className="bg-black text-white p-8 relative mt-5"
                        style={{
                            backgroundImage: 'url("/Images/p14.jpg")',
                            backgroundSize: 'cover',
                        }}
                    >
                        <h1 className="text-yellow-500 text-3xl font-semibold mb-4">
                            How can I become a Guide?
                        </h1>

                        {/* Form */}
                        <form className="bg-opacity-70 p-6 rounded-lg">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="text-white">Upload Profile</label>
                                    <input
                                        type="file"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Username</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Country</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Date of Birth</label>
                                    <input
                                        type="date"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Language Known</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Bio</label>
                                    <textarea
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Gender</label>
                                    <select
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Description</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Travel Experience</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Expertise</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Certifications and Training</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-white">Upload Files</label>
                                    <input
                                        type="file"
                                        className="w-full bg-transparent text-white border border-white rounded p-2"
                                    />
                                </div>
                            </div>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>

                    </section>
                </section>


            </div>
        </div>
    )
}



