import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";

// setup Vars
import { books } from "./books";

import Book from "./Book";

// the component name has to be capital
function BookList(props) {
  // you must always return something
  // has html-like syntax for easier reading.
  return (
    <section className="booklist">
      {books.map((book) => {
        // needs indentifier thus use key = {}
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
// props becomes like a psudo variable
// props destructuring

// const Image = () =>  <img src="https://images-na.ssl-images-amazon.com/images/I/612Nuwx6MvL._SX350_BO1,204,203,200_.jpg" alt = ""></img>
// const Title = () => <h1>Thus Spoke Rohan Kishibe</h1>;
// const Author = () => <h4 style={{color: '#617d98', fontSize:'0.75rem', marginTop: '0.25rem'}}> Hirohiko Araki</h4>
// passes greeting func to root class
ReactDom.render(<BookList />, document.getElementById("root"));
