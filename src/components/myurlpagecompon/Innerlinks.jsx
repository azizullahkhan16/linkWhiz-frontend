import { useState } from "react";

export default function Innerlinks() {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "YouTube",
      shortLink: "bit.ly/3WTFFzL",
      originalLink: "https://www.youtube.com/watch?v=Gz38Yj09k3A&list=RDGz38Yj09k3A&start_radio=1",
      date: "Feb 11, 2025",
    },
  ]);

  return (
    <div className="absolute h-full left-[238px] top-[63px] overflow-x-hidden w-5/6 bg-[#f5f5f5] px-6 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold font-montserrat">Bitly Links</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Create link</button>
      </div>

      {/* Search & Filters */}
      <div className="flex space-x-2 mb-6">
        <input
          type="text"
          placeholder="Search links..."
          className="flex-grow px-4 py-2 bg-white border rounded-lg outline-none"
        />
        <button className="px-4 py-2 border rounded-lg">Filter by created date</button>
        <button className="px-4 py-2 border rounded-lg">Add filters</button>
      </div>
      <hr className="w-full absolute top-[135px] border-gray-300" />
      <select className="px-4 mt-10 py-2 border rounded-lg">
          <option>Show: Active</option>
          <option>Hidden</option>
        </select>
      {/* Links List */}
      {links.map((link) => (
        <div key={link.id} className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <img src="https://www.youtube.com/s/desktop/5f622bbd/img/favicon_144x144.png" alt="YouTube" className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold">{link.title}</h3>
              <a href={`https://${link.shortLink}`} className="text-blue-500">{link.shortLink}</a>
              <p className="text-gray-500 text-sm">{link.originalLink}</p>
              <p className="text-gray-500 text-xs mt-1">{link.date} | No tags</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="text-gray-600 px-3 py-1 border rounded-lg">Copy</button>
            <button className="text-gray-600 px-3 py-1 border rounded-lg">Share</button>
            <button className="text-gray-600 px-3 py-1 border rounded-lg">✏️</button>
            <button className="text-gray-600 px-3 py-1 border rounded-lg">⋮</button>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className=" absolute bottom-4 w-full text-center text-gray-500 text-sm mb-6">
        <p>🔹 Change a link's destination, even after you've shared it. Get redirects with every plan. <a href="#" className="text-blue-500">View plans</a></p>
        <hr className="my-4 border-gray-300" />
        <p>You've reached the end of your links</p>
      </div>
    </div>
  );
}
