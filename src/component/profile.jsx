import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../api";
import { getLoginInfo } from "../utils/LoginInfo";

function Profile({ userInfo }) {
  return (
    <div className="mb-8">
      {userInfo ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Name: {userInfo.firstname} {userInfo.lastname}
          </h2>
          <p className="mb-1">Email: {userInfo.username}</p>
          <p className="mb-1">User Type: {userInfo.userType}</p>
          <p className="mb-1">Department: {userInfo.department}</p>
        </div>
      ) : (
        <div>User information not available</div>
      )}
    </div>
  );
}

function Approveprototype() {
  const [crprototype, setCrprototype] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const navigate = useNavigate();

  const fetchCrprototype = async () => {
    try {
      const userId1 = localStorage.getItem("userId");
      setLoggedInUserId(userId1);
      console.log(userId1);

      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${api.defaults.baseURL}/crprototype`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCrprototype(response.data);
    } catch (error) {
      console.error("Error fetching CR prototypes:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCrPrototypes = crprototype.filter((pr) => {
    return (
      pr &&
      pr.cr &&
      pr.cr.userId &&
      pr.cr.userId.userId === getLoginInfo()?.sub 
    );
  });

  useEffect(() => {
    fetchCrprototype();
  }, []);

  const handleActionClick = (prId) => {
    console.log("cr Id:", prId);
    navigate(`/dashboard/showprotoDetails/${prId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Component */}
        <Profile userInfo={getLoginInfo()} />

        {/* Search Input */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-4 py-2 border border-gray-500 rounded"
          />
        </div>

        {/* Table */}
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">CR ID</th>
              <th className="px-4 py-2">Topic</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCrPrototypes.map((pr) => (
              <tr key={pr.prId}>
                <td className="px-4 py-2">{pr.crId}</td>
                  {/* <td>{pr.cr.userId.userId}</td> */}
                <td className="px-4 py-2">{pr.topic}</td>
                <td className="px-4 py-2">{pr.cr.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleActionClick(pr.prId)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Approveprototype;