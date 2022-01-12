const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })
  //Test 1
  it("creates a todo item", () => {
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    const result = todoList.create("turn the heating on!")
    expect(result).toEqual(expected)
  })

  //Test 2
  it("creates a second todo item with ID 2", () => {
    
    const expectedTwo = {
      id: 2,
      text: "make lunch",
      status: "complete"
    }
    const resultTwo = todoList.create("make lunch")
    expect(resultTwo).toEqual(resultTwo)
  })

  //Test 3
  it("get all returns empty list when no todo", () => {
    const expected = []
    const allTodos = todoList.getAll("turn the heating on!")
    expect(allTodos).toEqual(expected)
  })

  //Test 4
  it("get all returns single todo", () => {
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete"
      }
    ]
    todoList.create("turn the heating on!")
    const allTodos = todoList.getAll()

    expect(allTodos).toEqual(expected)
  })

  //Test 5
  it("set item completed by ID", () => {
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "complete"
      }
      
    ]
    todoList.create("turn the heating on!")
    todoList.setComplete(1)
    expect(todoList.getAll()).toEqual(expected)
  })

//Test 6
it("get items that are incomplete", () => {
  const expected = [{
    id: 2,
    text: "Make lunch",
    status: 'incomplete'
  },
  {
    id: 3,
    text: "take out trash",
    status: 'incomplete'
  }]
  todoList.create("turn the heating on!")
  todoList.create("Make lunch")
  todoList.create("take out trash") 
  todoList.setComplete(1)
  const completion = todoList.incomplete()
  expect(completion).toEqual(expected)
})

//Test 7
it("get items that are complete", () => {
  const expected = [
    {
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    }
  ]
  todoList.create("turn the heating on!")
  todoList.create("Make lunch")
  todoList.create("take out trash") 
  todoList.setComplete(1)
  const completion = todoList.complete()
  expect(completion).toEqual(expected)
})

//Test 8
it("get items by ID", () => {
  const expected = 
    {
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    }
  
  todoList.create("turn the heating on!")
  todoList.create("Make lunch")
  todoList.create("take out trash") 
  todoList.setComplete(1)
  const result = todoList.findById(1)
  expect(result).toEqual(expected)
})

//Test 9
it("remove by ID", () => {
  const expected = "This ID does not exist"
  todoList.create("turn the heating on!")
  todoList.create("Make lunch")
  todoList.create("take out trash") 
  todoList.setComplete(1)
  const result = todoList.findById(5)
  expect(result).toEqual(expected)
})

//Test10
it("remove list by ID", () => {
  const expected = []
  todoList.create("turn the heating on!")
 
  const removeId = todoList.removeById(1)
  expect(removeId).toEqual(expected)
})

})