import React from "react";
import logoImage from "../assets/dashboardr.png";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  let navigate = useNavigate();

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-black rounded-lg sm:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-yellow-400"
        aria-label="Sidebar"
      >
        <br />
        <div className="w-64 h-12  ">
          <div className="flex justify-center ">
            <img src={logoImage} alt="Logo" className="h-auto w-20" />
          </div>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-yellow-400">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                onClick={() =>
                  navigate("userAccount", {
                    state: { accessToken: localStorage.getItem("accessToken") },
                  })
                }
                className="flex items-center justify-center  text-white rounded-lg hover:bg-white hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center  w-40 h-10">
                  <svg
                    className="w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"></path>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"></path>
                  </svg>
                  <span className="ms-3 text-black justify-center">
                    Dashboard
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("viewCr")}
                className="flex items-center text-white rounded-lg hover:bg-white  hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center  w-40 h-10">
                  <svg
                    className=" w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"></path>
                  </svg>
                  <span className="ms-3 text-black justify-center ">
                    CR View
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("crProtoType")}
                className="flex items-center text-white rounded-lg hover:bg-white  hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center w-40 h-10">
                  <svg
                    className=" w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.5 0h13a2.5 2.5 0 0 1 2.5 2.5v19a2.5 2.5 0 0 1-2.5 2.5h-13a2.5 2.5 0 0 1-2.5-2.5v-19a2.5 2.5 0 0 1 2.5-2.5zm5.5 2h2v2h-2V2zm-2 3h12v13h-12V5zm2 2h2v2h-2V7zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2zm8-9h-4V5h4v2zm0 3h-4V8h4v3zm0 3h-4v-2h4v2z" />
                  </svg>
                  <span className="ms-3 text-black justify-center">
                    CR Proto Type{" "}
                  </span>
                </div>
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("createCr")}
                className="flex items-center text-white rounded-lg hover:bg-white hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center w-40 h-10">
                  <svg
                    className="w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 4v12m-4-4h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ms-3 text-black justify-center">
                    Create New CR
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("userAccount")}
                className="flex items-center text-white rounded-lg hover:bg-white hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center w-40 h-10">
                  <svg
                    className=" w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="ms-3 text-black justify-center">Users</span>
                </div>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("addUser")}
                className="flex items-center text-white rounded-lg hover:bg-white hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center w-40 h-10">
                  <svg
                    className="w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="ms-3 text-black justify-center">
                    Add User
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("log")}
                className="flex items-center text-white rounded-lg hover:bg-white hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center w-40 h-10">
                  <svg
                    className=" w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="ms-3 text-black justify-center">Log</span>
                </div>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("addUser")}
                className="flex items-center text-white rounded-lg hover:bg-white hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center w-40 h-10">
                  <svg
                    className="w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="ms-3 text-black justify-center">
                    Profile
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("accesstoken");

                  navigate("/userLogin");
                }}
                className="flex items-center text-white rounded-lg hover:bg-white hover:bg-opacity-40 hover:ring-1 hover-ring-white dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center w-40 h-10">
                  <svg
                    className="w-5 h-5 text-black justify-left transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="ms-3 text-black justify-center ">
                    Log Out
                  </span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="col p-0 m-0">
          <div className=" d-flex justify-content-center ">
            <Navbar />
          </div>
          <br />
          <br />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
