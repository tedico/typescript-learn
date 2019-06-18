import axios from 'axios';
// npm install @types/node --dev-save I had install this to avoid an error
const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo { // I'm declaring to TS of this type of object that will exist.
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url)
  .then((res) => {
    const todo = res.data as Todo // I'm placing the res.data as a variable
    const { id, title, completed } = todo // I'm destructuring the response object w these variables
    // When destructuring an object, I need to make sure the property names actually exist in the object I'm destructuring.
    // If you look at the response object (or the JSON from the API) you'll see the properties that exist or the shape of the response data
    // so I can match this w my destructured object.
    
    logTodo(id, title, completed)
    
  })

  const logTodo = (id: number, title: string, completed: boolean) =>  {
    
    console.log(`
    Id is: ${id},
    title is: ${title},
    completed is : ${completed}
    `);
  }