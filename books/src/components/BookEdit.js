import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
function BookEdit({book,onSubmit}) {
  const [title, setTitle] = useState(book.title)
  const handleChange = (event) =>{
    setTitle(event.target.value)
  }
  const {editBookById} = useBooksContext()
  const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmit()
    editBookById(book.id,title)
  }
  return (
    <form className="booke-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary" >Save</button>
    </form>
  );
}

export default BookEdit;
