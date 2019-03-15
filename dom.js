// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
    // This is the dom node where we will keep our todo
    let container = document.getElementById('todo-container');
    let addTodoForm = document.getElementById('add-todo');

    let state = [{
            id: -3,
            description: 'first todo',
            done: true
        },
        {
            id: -2,
            description: 'second todo',
            done: false
        },
        {
            id: -1,
            description: 'third todo',
            done: false
        },

    ]; // this is our initial todoList

    // This function takes a todo, it returns the DOM node representing that todo

    let createTodoNode = function (todo) {
        let todoNode = document.createElement('li');

            // target.classList.add('upper')
            if (todo.done == true) {
              todoNode.classList.add('complete');
            }

              // todoNode.classList.toggle('complete');

        // you will need to use addEventListener

        // add span holding description
        let todoNode_span = document.createElement('span');

        todoNode.appendChild(todoNode_span);
        todoNode_span.classList.add("todo-wrapper")
        todoNode_span.textContent = todo.description;

        // this adds the delete button
        let buttonsContainer = document.createElement('span');
        todoNode.appendChild(buttonsContainer);
        buttonsContainer.classList.add("buttons-container");
        let deleteButtonNode = document.createElement('button');
        deleteButtonNode.addEventListener('click', function (event) {
            let newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
            // setActive(newState);
        });
        deleteButtonNode.classList.add('bin');
        deleteButtonNode.setAttribute("aria-label", "delete to do")
        buttonsContainer.appendChild(deleteButtonNode);

        // add markTodo button
        let markButtonNode = document.createElement('button');
        markButtonNode.classList.add('tick')
        markButtonNode.setAttribute("aria-label", "mark to do as complete")
        markButtonNode.addEventListener('click', function (event) {
          let newState = todoFunctions.markTodo(state, todo.id);
            update(newState);
            console.log(newState);
            setActive(newState);

        });
        buttonsContainer.appendChild(markButtonNode);

        // add classes for css

        return todoNode;
    };

    // bind create todo form
    if (addTodoForm) {

        addTodoForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // https://developer.mozilla.org/en-US/docs/Web/Events/submit
            // what does event.preventDefault do?
            // what is inside event.target?

            let description = document.querySelector('.add-form__input').value; // event.target ....
            // hint: todoFunctions.addTodo
            let newState = todoFunctions.addTodo(state, description); // ?? change this!
            update(newState);
            document.querySelector('.add-form__input').value = "";
        });
    }

    // you should not need to change this function
    let update = function (newState) {
        state = newState;
        renderState(state);
    };

    // you do not need to change this function
    let renderState = function (state) {
        let todoListNode = document.createElement('ul');

        state.forEach(function (todo) {
            todoListNode.appendChild(createTodoNode(todo));
            // console.log(todoListNode.childNodes);
        });

        // you may want to add a class for css
        container.replaceChild(todoListNode, container.firstChild);
    };

    if (container) renderState(state);
})();
