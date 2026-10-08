import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || [],
  );
  const [updatedData, setUpdatedData] = useState(null);

  const deleteUser = (id) => {
    let filterUser = users.filter((_, index) => index !== id);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="min-h-screen flex flex-col  bg-[#1B1D1E]">
      <Navbar setToggle={setToggle} />

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
        {toggle ? (
          <Form
            setUsers={setUsers}
            users={users}
            setToggle={setToggle}
            updatedData={updatedData}
          />
        ) : users.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No user cards found. Click add to create one.
          </div>
        ) : (
          /* Responsive Grid Layout for Desktop and Mobile */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            {" "}
            {users.map((elem, index) => (
              <Card
                users={elem}
                key={index}
                ind={index}
                deleteUser={deleteUser}
                setToggle={setToggle}
                setUpdatedData={setUpdatedData}
              />
            ))}{" "}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
