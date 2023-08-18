//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import Bootstrap from "bootstrap";
//import styles from '../component./styles./index.css';

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";

import PropTypes from "prop-types";

// function SimpleCounter(props){
//     return(<div className="bigCounter">
//      <div className="calendar"></div>
//         <i className="far fa-clock"></i>

//      <div className="four">{props.digitFour}</div>
//      <div className="three">{props.digitThree}</div>
//      <div className="two">{props.digitTwo}</div>
//     <div className="one">{props.digitOne}</div>
//     </div>
//     );
// }

// SimpleCounter.propTypes = {
//     // You can declare that a prop is a specific JS primitive. By default, these
//     // are all optional.
//     digitFour: PropTypes.number,
//     digitThree: PropTypes.number,
//     digitTwo: PropTypes.number,
//     digitOne: PropTypes.number
// };

// //render your react application
// // ReactDOM.render(<Home />, document.querySelector("#app"));
// let counter = 0;
//  setInterval(function(){
//     const four = Math.floor(counter/1000);
//     const three = Math.floor(counter/100);
//     const two = Math.floor(counter/10);
//     const one = Math.floor(counter);
//     console.log(four,three,two,one);

//     counter++;
//     return
// }, 1000);

let seconds = 0;

setInterval(() => {
  seconds++;
  ReactDOM.render(<Home sec={seconds} />, document.querySelector("#app"));
});
