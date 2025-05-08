## What are some differences between interfaces and types in TypeScript?

When working with `interface` and `type'` it may appear that the functionality of both is same. However, there is a minor difference between 'interface' and 'type'. At first understand interface and type in TypeScript.

**Interface:** An interface is a syntactical contract that an object must follow. In other words, an interface determines the syntax that each entity must follow. Members of an interface are defined by its properties, methods, and events.

**Type:** A type alias is a name that may be used for any type. Not just primitives, but also object types, union types, tuples, and intersections, can be represented using type aliases.

The term `interface` is most appropriate for defining a new object or object method. On the other hand, `type` may be used to define primitive-type aliases, tuple types, and unions. In summary, types work better with functions and complicated types, but interfaces work better with objects and method objects.

One of the most important differences between them is that interfaces may be expanded or implemented by other interfaces or classes, giving them a benefit for defining common contracts or API. types, on the other hand, lack the ability to be extended or implemented by other types.

## Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

`any`, `unknown` and `never` are used for numerous uses connected to type safety and type inference. Before diving into the differences between them let's go through about them in short:

**any:** `any` provides for flexible typing and might be beneficial in situations when the type of data is not vital or difficult to describe.

**unknown:** The `unknown` type, on the other hand, represents data whose type is unknown and is a safer option to `any` since it forces developers to execute a type check before accessing the value.

**never:** The `never` type represents value that will never occur. For example, never is the return type for a function expression or an arrow function expression that always throws an exception or returns nothing.

The main difference between `any`, `unknown` and `never` is that any lets you do any operation on a value without requiring type checking, `unknown` needs type verification before performing any actions on the value and `never` is used to assert that a case should be impossible.
