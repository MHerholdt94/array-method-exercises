/*
Exercise 3: Finding a blog post using an ID

This exercise is similar to the last. We are going to find
a person using the '.find()' array method, however we will
need to check two separate values this time.

This time round there is a much larger set of data that
is over 1000 lines of code. You can have a quick look at the file,
'exercise-3-data.js', which is in the same diectory as this file.

You will need to find a todo that has the following properties:
  userId: 3,
  id: 43,

*/
// import { todos } from "./exercise-3-data.js";

// const foundTodo = todos.find(({ userId, id }) => userId === 3 && id === 43);

// console.log(foundTodo);

// -----------------------------------------------

const values = [100, 200, 300, 400, 500];

const newArray = values.every((element, index, array) => {
  // Return true if it matches your condition and every() will keep looping
  // Return false if the condition is not matched and it will immediately break out, and return false as the final result. This is because not "every" value is valid
});
