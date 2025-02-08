import LoadingToTick from "../Loader/LoadingToTick"

function Main() {
    return (
        <div className="absolute top-[100px] w-full h-[600px] grid grid-cols-2 z-20">
            <div className="flex justify-center min-h-screen">
                <div className="bg-[#eee] p-6 rounded-2xl shadow-lg w-[450px] h-[450px]">
                    <h2 className="text-xl font-semibold mb-6 text-center">Shorten a long URL</h2>
                    <input
                        type="text"
                        placeholder="Enter long link here"
                        className="w-full p-4 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mb-8">
                        <label className="block text-sm font-medium mb-2">Customize your link</label>
                        <div className="flex items-center space-x-2">
                            <select
                                className="p-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>tinyurl.com</option>
                                <option>bit.ly</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Enter alias"
                                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-10">
                        <div>
                            <LoadingToTick />
                        </div>
                        <div>

                        </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                        Shorten URL
                    </button>
                </div>
            </div>
            <div className="bg-black h-full flex justify-center items-center">
                <div className="w-[80%] h-[80%] bg-yellow-900 ">

                </div>
            </div>
        </div>

    )
}

export default Main