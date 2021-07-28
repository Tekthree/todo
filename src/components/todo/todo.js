import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import "./todo.scss";

import { v4 as uuid } from "uuid";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <header className="title-bar">
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <div className="todo-grid">
        <div className="form-contain">
          <form onSubmit={handleSubmit}>
            <h2 className="title-h2">Add To Do Item</h2>

            <label>
              <span>To Do Item</span>
              <input
                onChange={handleChange}
                name="text"
                type="text"
                placeholder="Item Details"
              />
            </label>

            <label>
              <span>Assigned To</span>
              <input
                onChange={handleChange}
                name="assignee"
                type="text"
                placeholder="Assignee Name"
              />
            </label>

            <label>
              <span>Difficulty</span>
              <input
                onChange={handleChange}
                defaultValue={3}
                type="range"
                min={1}
                max={5}
                name="difficulty"
              />
            </label>

            <label>
              <button className="form-button" type="submit">
                Add Item
              </button>
            </label>
          </form>
        </div>

        <div className="list-contain">
          {list.map((item) => (
            <div className="todo-items" key={item.id}>
              <div className="name-bar">
                <div className="flex">
                  <div
                    className={
                      "complete" + (item.complete === false ? "" : "-active")
                    }
                    onClick={() => toggleComplete(item.id)}
                  >
                    {item.complete === false ? "Pending" : "Complete"}
                  </div>
                  <h6 className="name">{item.assignee}</h6>
                </div>
                <div id="mdiv">
                  <div class="mdiv">
                    <div class="md"></div>
                  </div>
                </div>
              </div>
              <p className="p-margin">{item.text}</p>

              <p className="p-margin">
                <small>Difficulty: {item.difficulty}</small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDo;
