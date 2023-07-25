import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All")


  function addNewTask(newItem) {
    setTask([...task, newItem])
  }

  function deletedItem(deletedItem){
    setTask(task.filter((item)=>item.text !== deletedItem))
  }

  const itemDisplayed = task
  .filter(
    (item)=>{ 
      if(selectedCategory==='All') return true
      return selectedCategory === item.category
   })

   function addNewCategory(newCategory) {
    setCategories([...categories, newCategory]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categories={categories}
      onButton={selectedCategory}
      selectedButton={setSelectedCategory} 
      />
      <NewTaskForm 
      onTaskFormSubmit={addNewTask}
      categories={categories}
      addNewCategory={addNewCategory}
      />
      <TaskList deletedItem={deletedItem} tasks={itemDisplayed}/>
    </div>
  );
}

export default App;
