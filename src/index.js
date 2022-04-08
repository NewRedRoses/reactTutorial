import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";
// setup Vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/612Nuwx6MvL._SX350_BO1,204,203,200_.jpg",
  title: "Thus Spoke Rohan Kishibe",
  author: "Hirohiko Araki",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51zxhFjkk3L._SX334_BO1,204,203,200_.jpg",
  title: "Vagabond",
  author: "Takehiko Inoue",
};
// the component name has to be capital
// JSX rules
function BookList(props) {
  // you must always return something
  // has html-like syntax for easier reading.
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          consequatur aliquid voluptatem suscipit molestiae deleniti, reiciendis
          eos minima libero odio!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>
    </section>
  );
}
// props becomes like a psudo variable
// props destructuring
const Book = (props) => {
  // another way of doing desconstruction ->
  const { img, title, author, children } = props;

  return (
    <article className="book">
      <img src={img} alt=""></img>
      {/* way to access js into JSX */}
      <h1>{title}</h1>
      <h4> {author} </h4>
      {children}
      {/* this changes due to the 2nd instance of "book" having aval */}
      {/* alternative way of doing it: 
         <Image></Image>
          <Title></Title>
          <Author></Author>  */}
    </article>
  );
};
// const Image = () =>  <img src="https://images-na.ssl-images-amazon.com/images/I/612Nuwx6MvL._SX350_BO1,204,203,200_.jpg" alt = ""></img>
// const Title = () => <h1>Thus Spoke Rohan Kishibe</h1>;
// const Author = () => <h4 style={{color: '#617d98', fontSize:'0.75rem', marginTop: '0.25rem'}}> Hirohiko Araki</h4>
// passes greeting func to root class
ReactDom.render(<BookList />, document.getElementById("root"));
