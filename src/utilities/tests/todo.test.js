import todo from "../todo"

describe('Testing TODO', () => {
    it('Test new instance of TODO', () => {
        expect(todo.todo).toBe(false)
    })
})