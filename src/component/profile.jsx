/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../api";
import { getLoginInfo } from "../utils/LoginInfo";
import { useTable, usePagination } from 'react-table'; // Import useTable hook
import { FaEye } from "react-icons/fa";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCrPrototypes, setFilteredCrPrototypes] = useState([]);
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(1);

  const fetchCrprototype = async () => {
    try {
      const userId1 = localStorage.getItem("userId");
      setLoggedInUserId(userId1);
      console.log(userId1);

      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${api.defaults.baseURL}/crs`, {
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
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredData = crprototype.filter((item) => {
      const crId = item.crId && item.crId.toString().toLowerCase(); // Ensure crId is a string
      const topic = item.topic && item.topic.toLowerCase(); // Ensure topic is a string
      const status = item.status && item.status.toLowerCase(); // Ensure status is a string

      return (
        crId.includes(value) ||
        topic.includes(value) ||
        status.includes(value)
      );
    });
    setFilteredCrPrototypes(filteredData);
  };


  useEffect(() => {
    fetchCrprototype();
  }, []);

  const handleActionClick = (crId) => {
    console.log('cr Id:', crId);
    navigate(`/dashboard/showCrDetails/${crId}/`);
  };

  const orderedCrPrototypes = crprototype.sort((a, b) => {
    const statusOrder = {
      'Need CR Approvel': 1,
      'Pending to get development': 2,
      'Taken For Development': 3,
      'Need Approvel For Prototype': 4,
      'Development Completed': 5,
      'CR Rejected': 6,
    };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orderedCrPrototypes.slice(indexOfFirstItem, indexOfLastItem);



  // Define columns and data for the React data table
  const columns = React.useMemo(
    () => [
      { Header: 'CR ID', accessor: 'crId' },
      { Header: 'Topic', accessor: 'topic' },
      { Header: 'Status', accessor: 'status' },
      {
        Header: 'Action',
        accessor: 'prId',
        Cell: ({ row }) => (
          <button
            onClick={() => handleActionClick(row.original.crId)}
            className="btn-secondary justify-center"
          >
            <FaEye className="icon" />
          </button>
        ),
      },
    ],
    [] // Dependency array
  );

  const dataToDisplay = searchTerm ? filteredCrPrototypes : orderedCrPrototypes;

  // Initialize the React data table using useTable hook
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,

  } = useTable({
    columns,
    data: dataToDisplay,
    initialState: { pageSize: itemsPerPage },
  }, usePagination);

  const handleNextPage = () => {
    if (canNextPage) {
      nextPage();
      setPageIndex(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (canPreviousPage) {
      previousPage();
      setPageIndex((prevIndex) => Math.max(prevIndex - 1, 1));
    }
  };
  return (
    <div className={`container mx-auto bg-white-100 shadow-md min-h-96 rounded-lg `}>
      <div className="max-w-4xl mx-auto">

        <Profile userInfo={getLoginInfo()} />


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
        <div className="overflow-x-auto">
          <table className="w-full border-collapse " {...getTableProps()}>
            <thead className="bg-yellow-400">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} className="px-2 py-2 border ">
                      <div className="flex justify-between text-left">{column.render('Header')}</div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} >
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.id}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="px-2 py-2 text-left  border">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>

        <div className="flex justify-end mb-4 mt-4">
          <div>
            <button onClick={handlePreviousPage} disabled={!canPreviousPage} className="mr-6 border border-white-700 font-medium shadow-xl w-20 bg-yellow-400">
              Previous
            </button>
            <span>
              Page {pageIndex } of {Math.ceil(dataToDisplay.length / itemsPerPage)}
            </span>
            <button onClick={handleNextPage} disabled={!canNextPage} className="w-20 ml-6 border-white-700 border font-medium shadow-xl w-20 bg-yellow-400">
              Next
            </button>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Approveprototype;
