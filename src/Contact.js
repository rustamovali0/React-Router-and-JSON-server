// Contact.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
// import ModalJson from "./ModalJson";

const Contact = () => {
  const [list, setList] = useState([]);
  // const [infoShow, setInfoShow] = useState(false);
  // const [userData, setUserData] = useState({});
  // const [clickedUsername, setClickedUsername] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3005/users")
      .then((res) => {
        // console.log(res.data);
        if (res.data && res.data.users) {
          setList(res.data.users);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  
  
  
  

  // const UsernameClick = (id) => {
  //   // fetch(`http://localhost:3000/users/${id}`)
  //   //   .then((response) => response.json())
  //   //   .then((res) => {
  //   //     setUserData(res);
  //   //     setClickedUsername(res.username);
  //   //     setInfoShow(true);
  //   //   })
  //   //   .catch((error) => console.error('Hata:', error));
  // };

  return (
    <div>
      {/* <ModalJson
        userData={userData}
        setUserData={setUserData}
        infoShow={infoShow}
        setInfoShow={setInfoShow}
        clickedUsername={clickedUsername}
      /> */}

      <table className="table1" style={{ borderRadius: "40px" }}>
        <thead>
          <tr className="tr1">
            <th className="id">Id</th>
            <th className="username">Username</th>
            <th className="email">Email</th>
            <th className="phone">Phone</th>
            <th className="age">Age</th>
            <th className="gender">Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((user, index) => (
              <tr key={index}>
                <td className="id">{user.id}</td>
                <td
                  className="username"
                  // onClick={() => UsernameClick(user.id)}
                  style={{ cursor: "pointer" }}
                >
                  {user.username}
                </td>
                <td className="email">{user.email}</td>
                <td className="phone">{user.phone}</td>
                <td className="age">{user.age}</td>
                <td className="gender">{user.gender}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
