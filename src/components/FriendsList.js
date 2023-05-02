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
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          - {friend.name} - {friend.email}
        </div>
      ))}
    </div>
  );
}
