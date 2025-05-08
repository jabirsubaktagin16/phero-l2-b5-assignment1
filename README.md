## What are some differences between interfaces and types in TypeScript?

When working with `interface` and `type'` it may appear that the functionality of both is same. However, there is a minor difference between 'interface' and 'type'. At first understand interface and type in TypeScript.

**Interface:** An interface is a syntactical contract that an object must follow. In other words, an interface determines the syntax that each entity must follow. Members of an interface are defined by its properties, methods, and events.

**Type:** A type alias is a name that may be used for any type. Not just primitives, but also object types, union types, tuples, and intersections, can be represented using type aliases.

The term `interface` is most appropriate for defining a new object or object method. On the other hand, `type` may be used to define primitive-type aliases, tuple types, and unions. In summary, types work better with functions and complicated types, but interfaces work better with objects and method objects.

One of the most important differences between them is that interfaces may be expanded or implemented by other interfaces or classes, giving them a benefit for defining common contracts or API. types, on the other hand, lack the ability to be extended or implemented by other types.

## Explain the difference between `any`, `unknown`, and `never` types in TypeScript.
