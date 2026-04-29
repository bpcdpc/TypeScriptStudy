interface Todo {
  id: number;
  job: string;
  done: boolean;
}

class TodoApp {
  todos: Todo[] = [];
  nextId: number = 1;

  // 추가
  addTodo(job: string) {
    const todo: Todo = {
      id: this.nextId++,
      job,
      done: false,
    };
    this.todos.push(todo);
  }

  // 출력
  listTodos() {
    console.log("📋 Todos List");
    this.todos.map((todo) => {
      console.log(`[${todo.done ? "✅" : " "}] ${todo.id}: ${todo.job}`);
    });
  }

  // 상태
  toggleTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) todo.done = !todo.done;
  }

  // 삭제
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

const myTodo: TodoApp = new TodoApp();

myTodo.addTodo("청소");
myTodo.addTodo("빨래");
myTodo.addTodo("공부");
myTodo.addTodo("식사");
myTodo.addTodo("정리");

myTodo.listTodos();

myTodo.toggleTodo(1);
myTodo.toggleTodo(3);

myTodo.listTodos();

myTodo.removeTodo(5);

myTodo.listTodos();

myTodo.toggleTodo(3);

myTodo.listTodos();
