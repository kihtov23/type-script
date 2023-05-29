//------------------------ document -----------------------------------
//typescript contains document object which is the same as js document
//it is controlled by lib property in tsconfig
const btn = document.getElementById("clickMe");
console.log(btn);

//------------------------ exclamation mark -----------------------------------
//some element is union here, HTMLElement | null
const someElement = document.getElementById("someNonExistingElementId");
//here someElement1 is only HTMLElement
const someElement1 = document.getElementById("someNonExistingElementId")!;

//---------------- just work with dom. "Todo" application ----------------------
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.getElementById("todoform") as HTMLFormElement;
const todoListUl = document.getElementById("todoListUl") as HTMLUListElement;

interface TodoItem {
  name: string;
  state: boolean;
}

let todoList: TodoItem[] = getTodos();
todoList.forEach(displayTodo);

function getTodos(): TodoItem[] {
  const todos = localStorage.getItem("todos");
  if (todos === null) return [];

  const parsedTodos = JSON.parse(todos);
  return parsedTodos;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = input.value;
  const newTodo: TodoItem = {
    name: todoText,
    state: false,
  };

  displayTodo(newTodo);
  todoList.push(newTodo);
  saveTodos();
  input.value = "";
});

function saveTodos(): void {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

function displayTodo(todo: TodoItem): void {
  const todoLi = document.createElement("li");
  todoLi.append(todo.name);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.state;
  checkbox.addEventListener("change", () => {
    todo.state = checkbox.checked;
    saveTodos();
  });

  todoLi.append(checkbox);
  todoListUl.append(todoLi);
}
