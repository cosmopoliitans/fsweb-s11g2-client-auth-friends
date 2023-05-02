import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosAuth.js";

export default function AddFriend() {
  const history = useHistory;

  const [friend, setFriend] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    setFriend({
      ...friend,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/friends`, friend)
      .then((res) => {
        console.log(JSON.stringify(res));
        setFriend({ name: "", email: "" });
        history.push("/friendsadd");
      })
      .catch((err) => {
        console.log(err);
        setFriend({ name: "", email: "" });
      });
  }

  return (
    <div className="loginFormMainDiv">
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <h2>FRIEND NAME</h2>
          </label>
          <br />
          <input
            onChange={handleChange}
            value={friend.name}
            type="text"
            name="name"
          ></input>
          <br />
          <br />
          <label>
            <h2>FRIEND EMAIL</h2>
          </label>
          <br />
          <input
            onChange={handleChange}
            value={friend.password}
            type="email"
            name="email"
          ></input>
          <br />
          <br />
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
