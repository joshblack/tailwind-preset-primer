# tailwind-preset-primer

> Tailwind preset for the GitHub Design System (Primer)

## Getting started

To install `tailwind-preset-primer` in your project, you will need to run the
following command using [npm](https://www.npmjs.com/):

```bash
npm install -S tailwind-preset-primer
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add tailwind-preset-primer
```

You can then add this package as a `preset` in your project's
`tailwind.config.js` file:

```js
module.exports = {
  presets: [require('tailwind-preset-primer')],
};
```

## Supported themes

`tailwind-preset-primer` supports the following themes from Primer
out-of-the-box:

| Theme                 | Import                                                  |
| :-------------------- | :------------------------------------------------------ |
| `dark-colorblind`     | `require('tailwind-preset-primer/dark-colorblind')`     |
| `dark-high-contrast`  | `require('tailwind-preset-primer/dark-high-contrast')`  |
| `dark-tritanopia`     | `require('tailwind-preset-primer/dark-tritanopia')`     |
| `dark`                | `require('tailwind-preset-primer/dark')`                |
| `light-colorblind`    | `require('tailwind-preset-primer/light-colorblind')`    |
| `light-dimmed`        | `require('tailwind-preset-primer/light-dimmed')`        |
| `light-high-contrast` | `require('tailwind-preset-primer/light-high-contrast')` |
| `light-tritanopia`    | `require('tailwind-preset-primer/light-tritanopia')`    |
| `light`               | `require('tailwind-preset-primer/light')`               |

The preset also includes support for a dynamic theme through
`require('tailwind-preset-primer/dynamic')`. The dynamic theme allows you to
swap between themes instead of using only one theme.

### Dynamic theme

The dynamic theme requires your project to setup CSS Custom Properties from
`@primer/primitives` that correspond to the various color scales and tokens
based on each theme.

You can find an example of this using Sass in our
[Next.js example](../../examples/nextjs/src/styles/_themes.scss).

## 📚 Examples

If you're looking for more examples on how to use `tailwind-preset-primer`, we
have some examples that you can check out:

- [Next.js](../../examples/nextjs)

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
