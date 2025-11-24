
        ALU node.js gate

--- 
1. Difference between Node.js and other server-side runtimes
2. ⁠Differences of app.use and app.get and a middleware scenario flow where they would be used both
3. ⁠Event Loops, libuv (can’t remember the rest)
4. ⁠How can a Node.js app for scalability purpose be divided into multiple CPU cors.

Practical Question: Mental Model 4 Practical Question

---

Implement these endpoints: The main route will be /todo
POST →/todo to create a task,
GET → /todo to get all tasks
Use a search parameter to filter tasks by status,
Use route parameters to a task by id,
A task will be have this shape:
type task = {
   id: number,
   task: string,
   status: "todo" | "doing" | "done"
}

---

Create an Express.js middleware function called requestLogger that logs the following information for every incoming request:

- HTTP method (e.g., GET, POST)
- URL path
- Timestamp of the request
- Response time (in milliseconds)

Then:

1. Integrate this middleware into an Express app.
2. The app should have at least *two routes* (/ and /users) that return a JSON response.
3. Ensure the middleware runs for *all routes* and prints logs in the following format:
shell
[2025-11-11T18:23:10Z] GET /users - 5ms
