# Custom CSS support for Tailwind CSS IntelliSense<br>![](https://img.shields.io/npm/v/tailwind-plugin-customcss-intellisense) ![](https://img.shields.io/badge/-experimental-orange.svg)
> Enable autocompletion of custom CSS classes inside [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 🪄

This plugin will scan your files for custom classes and mock them inside your Tailwind config for improved autocompletion.

![Print](https://user-images.githubusercontent.com/158975/189505212-b0eb2ce2-a94f-4931-97fb-5c911e66fc2f.png)

## Usage
`tailwind.config.js`
```js
module.exports = {
  // ...
  plugins: [
    require('tailwind-plugin-customcss-intellisense')({
      content: path.resolve(__dirname, './src/**/*.css')
    })
  ]
}
```