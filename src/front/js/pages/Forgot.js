import React, { useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState('')
  const token = sessionStorage.getItem("token");
  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:email
      })
    };
    const res = await fetch(process.env.BACKEND_URL + "/api/forgot-password", opts);
    if (res.status < 200 || res.status >= 300) {
      throw new Error("User does not exist");
    }
    const data = await res.json();
  };

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Email</h1>
        <input
          type={"text"}
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
