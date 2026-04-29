interface Todo {
  id: number;
  job: string;
  done: boolean;
}

class TodoApp {
  todos: Todo[] = [];
  nextId: number = 1;

  // 데이터 가져오기
  getTodo(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new Error(`Error: #${id} item not found.`);
    return todo;
  }

  // 데이터 추가
  addTodo(job: string): number {
    const todo: Todo = {
      id: this.nextId++,
      job,
      done: false,
    };
    this.todos.push(todo);
    return todo.id;
  }

  // 데이터 상태
  toggleTodo(id: number) {
    const todo: Todo = this.getTodo(id);
    if (todo) todo.done = !todo.done;
  }

  // 데이터 삭제
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  // DOM 가져오기
  getItem(id: number): HTMLLIElement {
    const item = document.querySelector<HTMLLIElement>(`li[data-id="${id}"]`);
    if (!item) throw new Error(`Error: #${id} list item element not found.`);
    return item;
  }

  // DOM node 내용 만들기
  contentTodo(todo: Todo, parent: HTMLUListElement) {
    const li: HTMLLIElement = document.createElement("li");
    li.textContent = ` [${todo.id}] ${todo.job}`;
    li.setAttribute("data-id", `${todo.id}`);
    parent.appendChild(li);

    const checkSpan: HTMLSpanElement = document.createElement("span");
    checkSpan.textContent = `[${todo.done ? "✅" : " "}]`;
    checkSpan.setAttribute("data-id", `${todo.id}`);
    li.prepend(checkSpan);

    const doneBtn: HTMLButtonElement = document.createElement("button");
    doneBtn.setAttribute("data-action", "done");
    doneBtn.setAttribute("data-id", `${todo.id}`);
    doneBtn.textContent = "완료";
    li.appendChild(doneBtn);

    const delBtn: HTMLButtonElement = document.createElement("button");
    delBtn.setAttribute("data-action", "delete");
    delBtn.setAttribute("data-id", `${todo.id}`);
    delBtn.textContent = "삭제";
    li.appendChild(delBtn);
  }

  // DOM 출력
  listItems(parent: HTMLUListElement) {
    this.todos.map((todo: Todo) => {
      this.contentTodo(todo, parent);
    });
  }

  // 특정 DOM 출력
  listItem(id: number, parent: HTMLUListElement) {
    const todo: Todo = this.getTodo(id);
    if (todo) this.contentTodo(todo, parent);
  }

  // 특정 DOM 삭제
  unlistItem(id: number) {
    const item: HTMLElement = this.getItem(id);
    if (item) item.remove();
  }

  // 특정 DOM 업데이트
  updateItem(id: number) {
    const todo: Todo = this.getTodo(id);
    const item: HTMLLIElement = this.getItem(id);
    if (item && todo) {
      const check = item.querySelector<HTMLSpanElement>("span");
      if (!check) throw new Error("Error: Checkbox element not found.");
      check.textContent = `[${todo.done ? "✅" : " "}]`;
    }
  }
}

const myTodo: TodoApp = new TodoApp();

const todoList = document.querySelector<HTMLUListElement>("#todo-list");
const todoInput = document.querySelector<HTMLInputElement>("#todo-input");
const addBtn = document.querySelector<HTMLButtonElement>("#add-button");

if (!todoList || !todoInput || !addBtn) {
  throw new Error("Error: Todo list element not found.");
}

addBtn.addEventListener("click", () => {
  if (typeof todoInput.value !== "string" || !todoInput.value.trim()) {
    return;
  }
  const job: string = todoInput.value.trim();
  const insertedId: number = myTodo.addTodo(job);
  myTodo.listItem(insertedId, todoList);
  todoInput.value = "";
});

todoList.addEventListener("click", (e: MouseEvent) => {
  const target = e.target;
  if (!(target instanceof Element)) return;

  const btn = target.closest("button");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const action = btn.dataset.action;

  if (!Number.isFinite(id)) {
    throw new Error("Error: Invalid todo id.");
  }

  switch (action) {
    case "delete":
      myTodo.unlistItem(id);
      myTodo.removeTodo(id);
      break;
    case "done":
      myTodo.toggleTodo(id);
      myTodo.updateItem(id);
      break;
    default:
      throw new Error("Error: Unknown error.");
  }
});
