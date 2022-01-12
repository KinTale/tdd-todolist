class TodoList {

    constructor() {
        this.todos = []
        this.counter = 1
    }

    create(description) {
        const list = {
            id: this.counter,
            text: description,
            status: 'incomplete',
        }
        this.counter++
        this.todos.push(list)
        return list
    }

    getAll() {
        return this.todos
    }

    setComplete(byId) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == byId) {
                this.todos[i].status = "complete"
            }
        }
    }

    incomplete() {
        let incomplete = []
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].status === "incomplete") {
                incomplete.push(this.todos[i])
            }
        }
        return incomplete
    }

    complete() {
        let complete = []
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].status === "complete") {
                complete.push(this.todos[i])
            }

        }
        return complete
    }

    findById(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
               return this.todos[i]
            }
        }
         return "This ID does not exist"
    }

    removeById(id){
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                this.todos.splice([i],1)
            }
        } return this.todos
    }

}



module.exports = TodoList
