import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
function Profile() {
  const [editible, setEditible] = useState(false);
  const [useDetails, setDetails] = useState({
    name: "Anshuman kumar",
    email: "mahianshuman491@gmail.com",
    image: "",
    bio: "none",
    username: "Mr_Mahi",
  });

  const handleInputOnchange = (e) => {
    if (e.target.name !== "name" && e.target.value.includes(" ")) {
      e.target.value = e.target.value.replaceAll(" ", "");
    }
    setDetails({ ...useDetails, [e.target.name]: e.target.value });
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    setEditible(!editible);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="w-7/12 mx-auto pb-5 overflow-hidden overflow-y-auto p-2"
      style={{ background: "rgb(0, 0, 0, 0.1)", backdropFilter: "blur(50px)" }}
    >
      <p
        className="w-[70px] h-[70px] flex items-center justify-center text-2xl font-semibold rounded-full mx-auto mt-5 text-white"
        style={{ background: "rgba(255, 255, 255, 0.15)" }}
      >
        A
      </p>
      <p className="text-white text-center text-2xl font-semibold">Mr_Mahi</p>

      <input
        type="text"
        name="name"
        value={useDetails.name}
        onChange={handleInputOnchange}
        readOnly={!editible}
        className={`block outline-none w-10/12 h-[45px] bg-transparent border px-3 text-xl font-semibold mx-auto my-5 rounded-md ${
          editible ? "text-white border-white" : "border-gray-600 text-gray-400"
        }`}
      />
      <input
        type="email"
        name="email"
        value={useDetails.email}
        onChange={handleInputOnchange}
        readOnly={!editible}
        className={`block outline-none w-10/12 h-[45px] bg-transparent border px-3 text-xl font-semibold mx-auto my-5 rounded-md ${
          editible ? "text-white border-white" : "border-gray-600 text-gray-400"
        }`}
      />
      <textarea
        name="bio"
        id="bio"
        value={useDetails.bio}
        onChange={handleInputOnchange}
        readOnly={!editible}
        className={`block outline-none w-10/12 h-[250px] bg-transparent border text-xl font-semibold mx-auto my-5 rounded-md resize-none p-3 ${
          editible ? "text-white border-white" : "border-gray-600 text-gray-400"
        }`}
      ></textarea>
      <div className="w-10/12 mx-auto my-10 flex justify-between items-center">
        {editible ? (
          <>
            <button
              className="flex items-center justify-center gap-3 w-[170px] text-xl text-white p-2 rounded-md"
              style={{ background: "#ed3548" }}
              onClick={handleEditProfile}
            >
              Cancle
            </button>

            <button
              className="flex items-center justify-center gap-3 w-[170px] text-xl text-white p-2 rounded-md"
              style={{ background: "#3bbc6c" }}
              onClick={handleUpdateProfile}
            >
              Update
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="flex items-center justify-center gap-3 w-[170px] text-xl text-white p-2 rounded-md"
              style={{ background: "#3bbc6c" }}
              onClick={handleEditProfile}
            >
              Edit profile <MdModeEdit />
            </button>

            <button
              className="flex items-center justify-center gap-3 w-[170px] text-xl text-white p-2 rounded-md"
              onClick={handleDeleteAccount}
              style={{ background: "#ed3548" }}
            >
              Delete <MdDelete />
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default Profile;
