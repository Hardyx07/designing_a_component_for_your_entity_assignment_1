import React from "react";

const UserCard = () => {
  const ProfilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEg09MmHvC-78aaRxyd52HabsZqI1-u8R6-w&s";
  const name = "Admin Sir";
  const email = "admin@login.in";
  const phone = "6900690069";
  const address = "Gate no. 1 , IIT Dholakpur , India";

  return (
    <div className="card">
      <img src={ProfilePic} alt="Profile Pic" className="logo" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  );
};

export default UserCard;