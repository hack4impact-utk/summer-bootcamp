# Building the TaskComponent

## Before we begin

Before diving into creating the component, I recommend you take a look through the code in this project. Specifically the following files: `./src/App.tsx` and `./src/components/TaskList.tsx`. If you can understand what's happening in these files, you will have an easier time building the `TaskComponent` without spoilers!

## Step 1: Defining a shape for the props

Go ahead and open `./src/components/Task.tsx`. This is the file we will be working in for this guide.

Before we can start writing our component we need to think about what data we will be passing into the component for it to work. Think about this for a minute. What data and functionality does the `TaskComponent` need to work? It might need to what to display and what to do on a certain action... Once we know what data we will need, we need to create a TypeScript interface to define that shape.

_Hint: You will need the Task interface for this. Import it at the top of the file using the following code:_

```typescript
import { Task } from '../types';
```

<details>
  <summary>Stuck? Click here to reveal the interface</summary>

```typescript
interface Props {
  task: Task; // if there is an error with Task make sure you imported it!
  toggleTaskCompleted: (taskId: number) => void;
}
```

</details>

Sweet, if you didn't use the spoiler above go ahead and look at it now. Make sure you have the same ones (it is important that even the names are the same because of the props passed in this component in `./src/components/TaskList`, if you don't want to rename your props you'll need to change what's passed in there).

## Step 2: Creating the component function

Ok, now we need to define a function that represents our React component in `./src/components/Task.tsx`.

Don't forget to `export default` the function and to accept a parameter of type `Props`!

<details>
  <summary>Stuck? Click here to reveal the function</summary>

```typescript
export default function TaskComponent(props: Props) {}
```

Don't forget about object destructuring! We can use that here to not have to prepend our props with `props.`

Here's what that looks like:

```typescript
export default function TaskComponent({ task, toggleTaskCompleted }: Props) {}
```

</details>

## Step 3: Rendering the HTML

In your file, there was some commented out HTML. You'll want to uncomment this HTML and return it from the function you just defined so that it will be rendered. If you deleted it, here is the markup:

```tsx
<li className="task">
  <input type="checkbox" className="mr-2" />
  <span>{/* Task text goes here */}</span>
</li>
```

**Note: When returning HTML in a .tsx file, you must surround the HTML in parenthesis like this: `return (<div></div>)`**

<details>
  <summary>Stuck? Click here to reveal the component</summary>

```tsx
export default function TaskComponent({ task, toggleTaskCompleted }: Props) {
  return (
    <li className="task">
      <input type="checkbox" className="mr-2" />
      <span>{/* Task text goes here */}</span>
    </li>
  );
}
```

</details>

## Step 4: Adding the functionality

### Our progress so far

Before we move on, let's take a step back and run the app to see our progress.

You can run the app in dev mode with the command `npm run start`, and it should start the app and open it in your browser. Go ahead and try to create a task. Something happens. The counter goes up and a checkbox is added to the list, but the text isn't there.

Would you expect that at this stage? Why?

Click the checkbox, does the counter go down? Do you know why or why not?

If this confuses you, definitely feel free to reach out and ask questions :)

### Adding functionality

For this step, we need to actually use the data we passed in through our props.

Specifically, we need to display `task.name` inside of the `<span>` element and make it so that the checkbox is checked when the task is completed and not checked otherwise. We also need to define what should happen when the checkbox is checked or unchecked (AKA changed)

**Note: Don't forget that in the HTML part of the component we need to surround any TypeScript with {}**

<details>
  <summary>Stuck? Click here to reveal the component</summary>

```tsx
export default function TaskComponent({ task, toggleTaskCompleted }: Props) {
  return (
    <li className="task">
      <input
        type="checkbox"
        className="mr-2"
        checked={task.completedAt !== null}
        onChange={() => toggleTaskCompleted(task.id)}
      />
      <span>{task.name}</span>
    </li>
  );
}
```

</details>

## Continue learning

We now have a super dope todo app that would rival even the best notepad. That's all we're going to do in this guide, but I do have a couple challenges for you. Complete all of them to become a React legend. If you do them, or have questions about them, please reach out on Discord and we'll be happy to help!

1. Show the task name as scratched out when it's completed and normal when it isn't. Hint: `<s>` element will create text with the strikethrough style applied. If you are stuck I would look up 'react conditional render' ;)
2. Hide all completed tasks. There are a couple ways to do this, what do you think is best?
3. This one is hard. Show completed tasks at the bottom of the list. This will require sorting the task list before looping through it and rendering the `TaskComponent`. I would look into the JavaScript sort function.
