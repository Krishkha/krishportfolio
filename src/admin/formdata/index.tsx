import { get, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../../firebase";

const Formdata = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const datalist = ref(database, "hireRequests");

    try {
      const snapshot = await get(datalist);
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        setData({});
        console.log("No data available");
      }
    } catch (error) {
      console.error("Firebase error:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await remove(ref(database, `hireRequests/${id}`));
      setData((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center mt-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-200">Hire Requests</h2>
      <div className="overflow-x-auto w-full max-w-5xl shadow-lg rounded-lg border border-gray-700">
        <table className="w-full border-collapse bg-gray-900 text-white">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-6 py-3 text-left">Name</th>
              <th className="border border-gray-700 px-6 py-3 text-left">Email</th>
              <th className="border border-gray-700 px-6 py-3 text-left">Message</th>
              <th className="border border-gray-700 px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([id, details]) => (
                
              <tr
                key={id}
                className="hover:bg-gray-800 transition-colors duration-200"
              >
                <td className="border border-gray-700 px-6 py-3">{details.name}</td>
                <td className="border border-gray-700 px-6 py-3">{details.email}</td>
                <td className="border border-gray-700 px-6 py-3">{details.message}</td>
                <td className="border border-gray-700 px-6 py-3 text-center">
                  <button
                    onClick={() => deleteData(id)}
                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-lg transition-all duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {Object.keys(data).length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-400"
                >
                  No hire requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Formdata;
