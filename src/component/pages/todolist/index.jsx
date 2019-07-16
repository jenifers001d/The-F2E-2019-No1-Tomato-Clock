import React from "react";
import styled from "styled-components";
import InputMission from "../../inputMission/index.jsx";

export default class extends React.Component {
  state = {
    todolist: [
      { content: "Have dinner", isDone: false, id: Date.now() },
      { content: "Take a shower", isDone: false, id: Date.now() },
      { content: "Eat snack", isDone: true, id: Date.now() },
    ],
  };
  render() {
    const { todolist } = this.state;
    return (
      <div>
        <InputMission />
        <div class="todo">
          <div class="title">TO-DO</div>
          <div class="content">
            <ul>
              {todolist.map((todo, index) => {
                if (todo.isDone === false) {
                  return <li key={todo.id}>{todo.content}</li>;
                }
              })}
            </ul>
          </div>
        </div>
        <div class="done">
          <div class="title">DONE</div>
          <div class="content">
            <ul>
              {todolist.map((todo, index) => {
                if (todo.isDone === true) {
                  return <li key={todo.id}>{todo.content}</li>;
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
