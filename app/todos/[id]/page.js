import React from "react";

async function fetchTodo(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  if (!res.ok) {
    throw new Error("Cant Fetch TODO");
  }

  return res.json();
}

const page = async ({ params }) => {
  const todo = await fetchTodo(params.id);
  return (
    <div>
      ToDo:
      <div>ID:{todo.id}</div>
      <div>ID:{todo.title}</div>
    </div>
  );
};

export default page;
