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
    },
  };
};

export default getState;
