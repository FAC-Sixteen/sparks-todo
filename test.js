var test = require('tape');
var logic = require('./logic');

test('Example', function (t) {
    t.pass();
    t.end();
});

test("To-do output", (t) => {
  const actual = logic.addTodo([1, 2, 3, 4], 1);
  const expected = [ 1, 2, 3, 4, 1];
  t.deepEqual(actual, expected, "Input [1] should return [1, 2]");
  t.end();
});

// test("To-do output", (t) => {
//   const actual = logic.deleteTodo();
//   const expected = 1;
//   t.equal(actual, expected, "Input 1 should return 1");
//   t.end();
// });
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
