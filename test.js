let test = require('tape');
let logic = require('./logic');

let exampleArray = [{
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
  {
    id: 2,
    description: 'make tea',
    done: false,
  },
];

let newArray = [{
  id: 0,
  description: 'make smoothie out of things that should really be cooked',
  done: false,
}];


test('Example', function (t) {
  t.pass();
  t.end();
});

test("To-do output of addTodo", function (t) {
  const testArray = logic.addTodo(exampleArray, "avocado");
  const actual = Array.isArray(testArray);
  const expected = true;
  t.deepEqual(actual, expected, "Output should be an array");
  t.end();
})

test("Test old array isn't altered by addTodo", function (t) {
  const expected = exampleArray.slice();
  const testArray = logic.addTodo(exampleArray, "avocado");
  const actual = exampleArray;

  logic.addTodo(exampleArray, newArray);
  t.deepEqual(actual, expected, "Test old array doesn't change");
  t.end();
})

test("Test that input is put as new objects description by addTodo", function (t) {
  const testArray = logic.addTodo(exampleArray, "avocado");
  const actual = testArray[testArray.length - 1].description;
  const expected = "avocado";
  t.deepEqual(actual, expected, "Output should be avocado")
  t.end();
});

test("Test that default done attribute added is false, addTodo", function (t) {
  const testArray = logic.addTodo(exampleArray, "avocado");
  const actual = testArray[testArray.length - 1].done;
  const expected = false;
  t.deepEqual(actual, expected, "Done should be false")
  t.end();
});

test("Test deleteTodo remove an object", (t) => {
  const testArray = logic.deleteTodo(exampleArray, 1);
  const actual = testArray.length;
  const expected = 2;
  t.equal(actual, expected, "Length should be one less");
  t.end();
});


test("Test The targeted id is removed by deleteTodo", (t) => {
  const testArray = logic.deleteTodo(exampleArray, 1);
  const actual = testArray.includes(testArray.id === 1);
  const expected = false;
  t.equal(actual, expected, "The targeted id should be removed");
  t.end();
});




test("Testing markTodo changes done value", (t) => {
  const testArray = logic.markTodo(exampleArray, 1);
  const actual = testArray[1].done
  console.log(testArray);
  const expected = true;
  t.equal(actual, expected, "Input 1 should return true");
  t.end();
});

test("Testing markTodo changes done value from true to false", (t) => {
  const testArray = logic.markTodo(exampleArray, 0);
  const actual = testArray[0].done
  console.log(testArray);
  const expected = false;
  t.equal(actual, expected, "Input 0 should return false");
  t.end();
});

test("Testing markTodo does not change the 'done' value of non targeted objects", (t) => {
  const testArray = logic.markTodo(exampleArray, 0);
  const actual = testArray[1].done
  console.log(testArray);
  const expected = false;
  t.equal(actual, expected, "Input 0 should not change done of id : 1");
  t.end();
});

//
// test("To-do output", (t) => {
//   const actual = logic.sortTodos();
//   const expected = 1;
//   t.equal(actual, expected, "Input 1 should return 1");
//   t.end();
// });
