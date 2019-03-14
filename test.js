var test = require('tape');
var logic = require('./logic');

var exampleArray = [{
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];

var newArray = [{
  id: 0,
  description: 'make smoothie out of things that should really be cooked',
  done: false,
}];


test('Example', function (t) {
  t.pass();
  t.end();
});

test("To-do output", function (t) {
  const testArray = logic.addTodo(exampleArray, "avocado");
  const actual = Array.isArray(testArray);
  const expected = true;
  t.deepEqual(actual, expected, "Output should be an array");
  t.end();
})

test("To-do output", function (t) {
  const actual = exampleArray;
  const expected = exampleArray.slice();
  logic.addTodo(exampleArray, newArray);
  t.deepEqual(actual, expected, "Test old array doesn't change");
  t.end();
})

test("To-do output", function (t) {
  const testArray = logic.addTodo(exampleArray, "avocado");
  const actual = testArray[testArray.length - 1].description;
  const expected = "avocado";
  t.deepEqual(actual, expected, "Output should be avocado")
  t.end();
});

test("To-do output", function (t) {
  const testArray = logic.addTodo(exampleArray, "avocado");
  const actual = testArray[testArray.length - 1].done;
  const expected = false;
  t.deepEqual(actual, expected, "Done should be false")
  t.end();
});

test("To-do output", (t) => {
  const actual = logic.deleteTodo([{
    id: 1,
    description: 2
  }], 1);
  const expected = [];
  t.deepEqual(actual, expected, "Input 1 should return []");
  t.end();
});
//
// test("To-do output", (t) => {
//   const actual = logic.markTodo();
//   const expected = 1;
//   t.equal(actual, expected, "Input 1 should return 1");
//   t.end();
// });
//
// test("To-do output", (t) => {
//   const actual = logic.sortTodos();
//   const expected = 1;
//   t.equal(actual, expected, "Input 1 should return 1");
//   t.end();
// });