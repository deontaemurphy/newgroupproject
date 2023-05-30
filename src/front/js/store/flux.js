const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        changeColor: (index, color) => {
          //get the store
          const store = getStore();

          //we have to loop the entire demo array to look for the respective index
          //and change its color
          const demo = store.demo.map((elm, i) => {
            if (i === index) elm.background = color;
            return elm;
          });

          //reset the global store
          setStore({ demo: demo });
        },
          // const token = sessionStorage.getItem("token"),
          // let cb_url = process.env.BACKEND_URL,
          // return {
          // store: {
          // message: null,

          //   evertime I come back must update cf_url by coping if from the browser of my frontend
          // token: null,
          // user: null,
          // cf_url:
          // "https:3000-deontaemurp-newgrouppro-gcgtzxginv1.ws-us93.gitpod.io/",
          // username: null,
          // },
          // logout: () => {
          // const cf_url = getStore().cf_url;
          // const token = sessionStorage.removeItem("token");
          setStore({ token: null });
        window.location.href = cf_url + "/";
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
          const res = await fetch(process.env.BACKEND_URL + "/api/login", opts);
          if (res.status !== 200) {
            alert("there has been an error");
            return false;
          }
          const data = await res.json();
          console.log("this is from backend flux", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({
            token: data.access_token,
            // favorites: data.favorites, need to add favorites
          });
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      register: (name, email, password) => {
        const store = getStore();

        return fetch(
          `https://3001-deontaemurp-newgrouppro-97s7svokbii.ws-us98.gitpod.io/api/createUser`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ name, email, password }),
          }
        )
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
