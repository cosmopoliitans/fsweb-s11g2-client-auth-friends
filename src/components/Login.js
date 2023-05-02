import { axiosWithAuth } from "./axiosAuth";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/friendlist");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="username">USERNAME</label>
          <br />
          <input
            onChange={handleChange}
            value={form.username}
            type="text"
            id="username"
            name="username"
          ></input>
          <br />
          <br />
          <label for="pwd">PASSWORD</label>
          <br />
          <input
            onChange={handleChange}
            value={form.password}
            type="password"
            id="pwd"
            name="pwd"
          ></input>
          <br />
          <br />
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
