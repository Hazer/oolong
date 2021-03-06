[oolong](./index.md)

## Oolong

Oolong is an [Elm](https://guide.elm-lang.org/architecture) inspired Model-View-Update (MVU) implementation for Kotiln multiplatform. As the name implies, three core concepts comprise the foundation of this architecture:

* **Model** - a type to represent the program state

* **Update** - a function to update the state

* **View** - a function to map the state to view properties

By applying this simple pattern you can create composable, testable programs that can run on any platform. Oolong enables a common codebase for all platforms by using a `Render` function which is implemented by each frontend.

### Packages

| Name | Summary |
|---|---|
| [oolong](oolong/index.md) | The Oolong runtime and types. |
| [oolong.util.delay](oolong.util.delay/index.md) | Utility functions for creating delay effects. |
| [oolong.util.effect](oolong.util.effect/index.md) | Utility functions for creating effects. |
| [oolong.util.random](oolong.util.random/index.md) | Utility functions for creating random effects. |

### Index

[All Types](alltypes/index.md)