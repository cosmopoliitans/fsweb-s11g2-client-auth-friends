import { axiosWithAuth } from "./axiosAuth.js";
import React, { useEffect, useState } from "react";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>FRIENDS LIST</h1>
      <ul>
        {friends.map((item) => (
          <li key={item.id}>
            - {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}