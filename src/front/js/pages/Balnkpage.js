import React from "react";
import TheBookClub from "./TheBookClub";

const Blank = () => {
  TheBookClub;
  return () => {
    async (email, password) => {
      const opts = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };
      try {
        const resp = await fetch(process.env.BACKEND_URL + `/login`, opts);
        if (resp.status !== 200) {
          alert("there has been an error");
          return false;
        }
        const data = await resp.json();
        console.log("this is from backend flux", data);
        sessionStorage.setItem("token", data.access_token);
        setStore({
          token: data.access_token,
        });
        return true;
      } catch (error) {
        console.error(error);
      }
    };
    // *comment//
    sessionStorage.removeItem("token");
    setStore({ token: null });
  };
};
export default Blank;
