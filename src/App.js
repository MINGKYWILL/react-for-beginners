// import Button from "./Button";
// import styles from "./App.module.css";

import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");

//   const onClick = () => {
//     setValue((prev) => prev + 1);
//   };
//   const onChange = (e) => setKeyword(e.target.value);

//   useEffect(() => {
//     console.log("키워드 입력하면 실행");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("카운터 바뀌면 실행 ");
//   }, [counter]);
//   // useEffect(() => {
//   //   console.log("카운터 또는 키워드 실행 ");
//   // }, [keyword, counter]);
//   useEffect(() => {
//     console.log("한번만 실행");
//   }, []);

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here"
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// function Hello() {
//   // function byeFn() {
//   //   console.log("destroyed");
//   // }
//   // function hiFn() {
//   //   console.log("created");
//   //   return byeFn;
//   // }
//   useEffect(() => {
//     console.log("hi");
//     return () => console.log("bye");
//   }, []);
//   return <h1>Hello</h1>;
// }
// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

//To-Do List Practice

// function App() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (e) => setToDo(e.target.value);
//   const [toDos, setToDos] = useState([]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//     console.log(toDos);
//   };
//   const onDelete = () => {
//     setToDos((prevToDos) => prevToDos.filter((item) => item !== toDo));
//     setToDo("");
//   };
//   return (
//     <form onSubmit={onSubmit}>
//       <h1>My To - Do List {toDos.length}</h1>
//       <input
//         onChange={onChange}
//         value={toDo}
//         type="text"
//         placeholder="Write your to do"
//       ></input>
//       <button>Add</button>
//       <button onClick={onDelete}>delete</button>
//       <hr />
//       <ul>
//         {toDos.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </form>
//   );
// }

//Coin Tracker-api error
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>
//         {loading ? (
//           <strong>Loading...</strong>
//         ) : (
//           <ul>
//             {coins.map((coin) => (
//               <li>
//                 {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//               </li>
//             ))}
//           </ul>
//         )}
//       </h1>
//     </div>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
