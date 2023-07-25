import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories, addNewCategory}) {
  const [newItemFields, setNewItemFields]=useState({
    text:'',
    category:'Code'
  })

  function handleFields(e){
    const{name,value}=e.target
    setNewItemFields({...newItemFields,[name]:value})

  }
  function handleNewCategory(e) {
    e.preventDefault();
    const newCategory = newItemFields.category;
    addNewCategory(newCategory);
  }

  return (
    <form onSubmit={(e)=>{
    e.preventDefault()
      onTaskFormSubmit(newItemFields)}}
    className="new-task-form"
    >
      <label>
        Details
        <input value={newItemFields.text} onChange={handleFields}  type="text" name="text" />
      </label>
      <label>
        Category
        <select value={newItemFields.category} onChange={handleFields} name="category">
        {categories.map((category,index)=>(
            <option key={index}>{category}</option>
          ))}
        </select>
        <button onClick={handleNewCategory}>Add New Category</button>

      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
