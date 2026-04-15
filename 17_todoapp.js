class TodoApp {
    todos = [];
    nextId = 1;
    // 추가
    addTodo(job) {
        const todo = {
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
    toggleTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo)
            todo.done = !todo.done;
    }
    // 삭제
    removeTodo(id) {
        const newTodos = this.todos.filter((todo) => todo.id !== id);
        this.todos = newTodos;
    }
}
const myTodo = new TodoApp();
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
export {};
