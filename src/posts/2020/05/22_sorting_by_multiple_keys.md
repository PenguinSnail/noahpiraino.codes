---
title: Sorting an Array by Multiple Keys in JavaScript
date: 2020-05-20
published: true

keywords:
- javascript
- js
- array
- sort
- sorting
- keys
- react
- reactjs

---

Sorting is probably one of the most common things done when programming. The other day I decided to write a small todo app in React just for fun and to have something lightweight to keep track of my work. I wanted the todo list to have some structure to it, rather than just being in a fixed order. The three requirements were that incomplete and complete tasks would be separate from each other, incomplete tasks would be sorted in a defined order, and complete tasks would be sorted by completion time.

The first solution I came up with was this:

```jsx
<List>
	{ (todos && todos.length > 0) &&
		todos.filter(t => !t.complete).sort((a, b) => a.position - b.position)
		.map(todo => (
			<TodoListItem
				key={todo.id}
				todo={todo}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		))
	}
	{ (todos && todos.filter(t => t.complete).length > 0) &&
		todos.filter(t => t.complete).sort((a, b) => b.toggleTime - a.toggleTime)
		.map(todo => (
			<TodoListItem
				key={todo.id}
				todo={todo}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		))
	}
</List>
```

In this snippet we're creating two separate maps (lists) in React. The first list is made by taking our array of tasks and filters it to only the incomplete ones, then sorts it by our sort key:  
`javascript›todos.filter(t => !t.complete).sort((a, b) => a.position - b.position)`

Our second list does the same, but filters to only the completed items, and sorts by the `toggleTime` key instead:  
`javascript›todos.filter(t => t.complete).sort((a, b) => b.toggleTime - a.toggleTime)`

While this does work, it's less efficient because we're manipulating the data twice, but more importantly we're removing and recreating a component every time we complete an item. In this case, it's removed from the first list once the completed status changes, and a new component is created in the second list. This comes with some unexpected side effects such as preventing animations on items when they're checked off, as well as the potential for extra unwanted renders. Ideally we want item to stay in the same map statement so React can keep track of it.

```jsx
<List>
	{ (todos && todos.length > 0) &&
		todos.sort((a, b) => {
			if (a.complete === b.complete) {
				if (a.complete) {
					return b.toggleTime - a.toggleTime;
				} else {
					return a.position - b.position;
				}
			} else {
				if (!a.complete) {
					return -1;
				} else {
					return 1;
				}
			}
		}).map(todo => (
			<TodoListItem
				key={todo.id}
				todo={todo}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		))
	}
</List>
```

This new method should be relatively self explanatory. We first start by checking to see if the two items are either both complete or both incomplete. If one is complete and the other isn't, we check to see which is which, then move the incomplete one before the completed.

If, however, the completion status is the same for both items, we need to sort using other keys. We then check to see if they're complete or incomplete. If the former, we sort them by compring their completed time, otherwise we sort by their set sort order.

While it seems obvious enough now that it's written, I was getting surprisingly hung up on how to organize these lists. This can also be expanded very easily to cover a variety of object/key complexities, and can also be shortened down to fewer lines using the conditional operator:

```jsx
todos.sort((a, b) => {
	if (a.complete === b.complete) {
		return a.complete ? b.toggleTime - a.toggleTime : a.position - b.position;
	} else {
		return !a.complete ? -1 : 1;
	}
})
```

We can even go all the way to a one-liner if we're feeling ambitious:

```jsx
todos.sort((a, b) => a.complete === b.complete ? (a.complete ? b.toggleTime - a.toggleTime : a.position - b.position) : (!a.complete ? -1 : 1))
```

Though I'll probably stick with the more readable version just to be able to remmeber what's going on at a glance!