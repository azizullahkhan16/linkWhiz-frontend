import LoadingToTick from "../Loader/LoadingToTick"

function Main() {
    return (
        <div className="absolute top-[100px]  w-full grid grid-cols-2 z-20">
            <div className="flex justify-center ">
                <div className="bg-[#F8F8F8] flex flex-col p-6 rounded-2xl shadow-lg w-[500px] h-[450px]">
                    <div className="flex justify-start items-center mb-6 w-[100%]">
                        <img className="h-8 w-8 mx-3  object-cover" src="/images/favicon-128.png" alt="" />
                        <h2 className="text-base antialiased font-bold text-xl font-montserrat">Shorten a long URL</h2>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter long link here"
                        className="w-full font-medium p-4 border font-montserrat rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mb-8">
                        <label className="block text-lg font-montserrat font-medium mb-2">Customize your link</label>
                        <div className="flex items-center space-x-2">
                            <select
                                className="p-2 border h-14 font-montserrat font-medium rounded-lg w-full  focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>tinyurl.com</option>
                                <option>bit.ly</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Enter alias"
                                className="flex-1 h-14 p-2 border font-montserrat rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="ml-9 flex w-[80%] h-[220px] left-20 border-2 items-center justify-between mb-10">
                        <div className="ml-5">
                            <LoadingToTick />
                        </div>
                        <div>

                        </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-3 font-montserrat rounded-lg hover:bg-green-700">
                        Shorten URL
                    </button>
                </div>
            </div>
            <div className=" h-full flex justify-center items-center">
                <div className="w-[80%] h-[80%]  ">

                </div>
            </div>
        </div>

    )
}

export default Main