import React, { useReducer, useEffect, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERS_DATA":
      return { ...state, usersData: action.payload };
      
    case "LOADING":
      return { ...state, isLoading: action.payload };
    case "DELETE_USER":
      return {
        ...state,
        usersData: state.usersData.filter((user) => user.id !== action.payload),
      };
    case "ONCLICK_EDIT":
      return { ...state, isEditing: action.payload };
    case "UPDATE_USER":
      return {
        ...state,
        usersData: state.usersData.map((user) =>
          user.id === action.payload.id
            ? { ...user, name: action.payload.name, email: action.payload.email }
            : user
        ),
      };
    default:
      return state;
  }
};


const Sampleusereducer = () => {
  const fetchUsersData = async (URL) => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch({ type: "UPDATE_USERS_DATA", payload: data });
      console.log(state)
      console.log(initialState)
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: error.message },
      });
    }
  };

  useEffect(() => {
    fetchUsersData("https://jsonplaceholder.typicode.com/users");
  }, []);

  const initialState = {
    usersData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
    isEditing: { status: false, id: "", name: "", email: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const updateData = (id, name, email) => {
    dispatch({
      type: "UPDATE_USER",
      payload: {
        id,
        name,
        email,
      },
    });
    dispatch({
      type: "ONCLICK_EDIT",
      payload: { status: false, id: "", name: "", email: "" },
    });
  };

  if (state.isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Users Information</h2>
      {state.isEditing?.status && (
        <EditFormContainer
          id={state.isEditing.id}
          comingTitle={state.isEditing.name}
          comingEmail={state.isEditing.email}
          updateData={updateData}
        />
      )}
      {state.usersData.map((eachUser) => {
        const { id, name, email } = eachUser;
        return (
          <div key={id} style={{ background: "yellow" }}>
            <h3>{name}</h3>
            <p>{email}</p>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={ () => dispatch({ type: "ONCLICK_EDIT", payload: { status: true, id: id, name: name, email } }) }>
              edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

const EditFormContainer = ({ id, comingTitle, comingEmail, updateData }) => {
  const [title, setTitle] = useState(comingTitle || "");
  const [email, setEmail] = useState(comingEmail || "");

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => updateData(id, title, email)}>
          update data
        </button>
      </form>
    </>
  );
};

export default Sampleusereducer;