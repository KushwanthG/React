import React, { useState } from "react";

const SampleForm = () => {
  const obj = [
    {
      text: "kush1",
      id: "wr3ew43"
    },
    {
      text: "kush2",
      id: "wrywgw"
    }
  ];
  const [message, setMessage] = useState({
    text: "",
    id: ""
  });

  const [list, setList] = useState(obj);
  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      text: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem.isEditing) {
      setList(
        list.map((item) =>
          item.id === editingItem.id ? { ...item, text: message.text } : item
        )
      );
      setEditingItem({ id: "", isEditing: false });
    } else {
      let newTodo = {
        text: message.text,
        id: new Date().getTime().toString()
      };
      setList([...list, newTodo]);
    }
    setMessage({ text: "", id: "" });
  };

  const handleInsideDelete = (id) => {
    let deleteIt = list.filter((eachitem) => {
      return eachitem.id !== id;
    });

    setList(deleteIt);
  };

  const handleInsideEdit = (id) => {
    setEditingItem({
      id: id,
      isEditing: true
    });
    let editableitem = list.find((eachitem) => eachitem.id === id);
    setMessage({
      text: editableitem.text,
      id: editableitem.id
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message.text} onChange={handleChange} />
        {message.text}
        <button type="submit">
          {editingItem.isEditing ? "EDIT" : "ADD"}
        </button>
      </form>
      <hr />
      <ul>
        {list.map((eachitem) => {
          const { text, id } = eachitem;
          return (
            <li key={id}>
              <span>{text}</span>
              <span>{id}</span>
              <button
                onClick={() => {
                  handleInsideEdit(id);
                }}
              >
                EDIT
              </button>
              <button
                onClick={() => {
                  handleInsideDelete(id);
                }}
              >
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SampleForm;
