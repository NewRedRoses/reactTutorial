import React from "react";
// props becomes like a psudo variable
// props destructuring
const Book = (props) => {
  // desconstruction
  const { img, title, author } = props;

  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=""></img>
      {/* way to access js into JSX */}
      <h1>{title}</h1>
      <h4> {author} </h4>
      <button type="button" onClick={clickHandler}>
        {" "}
        Reference Button
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
      {/* alternative way of doing it: 
         <Image></Image>
          <Title></Title>
          <Author></Author>  */}
    </article>
  );
};

export default Book;
