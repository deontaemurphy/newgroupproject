const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      // demo: [
      // 	{
      // 		title: "FIRST",
      // 		background: "white",
      // 		initial: "white"
      // 	},
      // 	{
      // 		title: "SECOND",
      // 		background: "white",
      // 		initial: "white"
      // 	}
      // ]

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

      login: async (email, password) => {
        const cb_url = getStore().process.env.BACKEND_URL;
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
          sessionStorage.setItem("token", data.access_token);
          data.favorites.forEach((f) => {
            //was returning an error bc it didnt like the single quotes so the line below turns the single into double quotes
            f.item = f.item.replace(/'/g, '"');
            f.item = JSON.parse(f.item);
          });
          setStore({
            token: data.access_token,
            favorites: data.favorites,
            user_name: data.user_name,
          });
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      createUser: async (name, email, password) => {
        const cb_url = getStore().cb_url;
        const cf_url = getStore().cf_url;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        };
        try {
          const res = await fetch(cb_url + "/api/createUser", opts);
          if (res.status !== 200) {
            alert("there has been an error");
            return false;
          }
          const data = await res.json();
          // console.log(data);
          if (data.status == "true") {
            //redirect to login
            window.location.href = cf_url + "/login";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
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
    },
  };
};

export default getState;
