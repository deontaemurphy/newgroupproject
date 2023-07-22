import { set } from "react-hook-form";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      checkForToken: () => {
        let token = sessionStorage.getItem(token);
        if (token !== null && token !== "" && token !== undefined) {
          setStore({ token: token });
        } else {
          setStore({ token: null });
        }
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
   
      login: async (email, password) => {
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
      },

      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
      },

      register: (name, email, password) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + `/api/createUser`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        })
          .then((res) => {
            if (res.status === 409)
              throw new Error(
                "The email address already exists. Please login to your account to continue."
              );
            // else if (!res.ok) throw new Error(res.statusText);

            return res.json();
          })
          .then((data) => {
            console.log("data ", data);

            return true;
          })
          .catch((error) => error);
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error from backend", error);
        }
      },

      // changeColor: (index, color) => {
      //   //get the store
      //   const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   //reset the global store
      //   setStore({ demo: demo });
      // },
    },
  };
};

export default getState;
