const getState = ({ getStore, getActions, setStore }) => {
<<<<<<< HEAD
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
      characters: [],
      planets: [],
      starships: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((data) => {
            setStore({ characters: data.results });
          })
          .catch((error) => {
            console.log(error);
          });
        fetch("https://swapi.dev/api/planet")
          .then((response) => response.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .catch((error) => {
            console.log(error);
          });
        fetch("https://swapi.dev/api/starships")
          .then((response) => response.json())
          .then((data) => {
            setStore({ starships: data.results });
          })
          .catch((error) => {
            console.log(error);
          });
      },
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
=======
  const token = sessionStorage.getItem("token");
  let cb_url = process.env.BACKEND_URL;
  return {
    store: {
      message: null,

      //   evertime I come back must update cf_url by coping if from the browser of my frontend
      token: null,
      user: null,
      cf_url:
        "https:3000-deontaemurp-newgrouppro-gcgtzxginv1.ws-us93.gitpod.io/",
      username: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      logout: () => {
        const cf_url = getStore().cf_url;
        const token = sessionStorage.removeItem("token");
        setStore({ token: null });
        window.location.href = cf_url + "/";
      },
        // login: async (email,password) => {
        //   const opt = {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       email: email,
        //       password: password,
        //       // user_id: user_id,
        //     }),
        //   };
        //   const resp = await fetch(
        //     "https://3001-deontaemurp-newgrouppro-8tf8x11ptk9.ws-us95.gitpod.io/admin/api/token",
        //     opt
        //   )
        //   if (resp.status !== 200){
        //     alert("there will be an error");
        //     return false;
        //   }
        //   // const data = await resp.json();
        //   //   .then((data) => {
        //   //     console.log("this came from backend", data);
        //   //     sessionStorage.setItem("token", data.access_token);
        //   //   })
        //   //   .catch((error) => {
        //   //     console.error("there was an error", error);
        //   //   })
        // }

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
          data.favorites.forEach((f) => {
            //was returning an error bc it didnt like the single quotes so the line below turns the single into double quotes
            f.item = f.item.replace(/'/g, '"');
            f.item = JSON.parse(f.item);
          });
          setStore({
            token: data.access_token,
            // favorites: data.favorites, need to add favorites
            user_name: data.user,
          });
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      signup: (data) => {
        const store = getStore();
        console.log("data received", data);
        console.log(JSON.stringify(data));
        return fetch(`${cb_url}/api/signup`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
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
            getActions().setAlert({
              type: "success",
              msg: data.msg,
              show: true,
            });

            return true;
          })
          .catch((err) => err);
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
          console.log("Error loading message from backend", error);
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
>>>>>>> main
    },
  };
};

export default getState;
