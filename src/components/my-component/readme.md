# my-component



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type     | Default     |
| ----------------- | ------------------ | ----------- | -------- | ----------- |
| `backgroundColor` | `background-color` |             | `string` | `'Red'`     |
| `first`           | `first`            |             | `string` | `undefined` |
| `last`            | `last`             |             | `string` | `undefined` |
| `middle`          | `middle`           |             | `string` | `undefined` |


## Dependencies

### Depends on

- [example-one](../example-one)
- [example-two](../example-two)
- [example-third](../example-third)
- [demo-story](../demo-story)

### Graph
```mermaid
graph TD;
  my-component --> example-one
  my-component --> example-two
  my-component --> example-third
  my-component --> demo-story
  example-one --> demo-story
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
