# wordifynumbers

Number Wordify is a JavaScript package that converts numerical values into their corresponding verbal representations. It provides a simple and convenient way to transform numbers into words, making it easier to display numeric data in a more human-readable format.

## Features

- Converts numerical values into words.
- Handles numbers up to crores for Indian numbering system.
- Easy-to-use API for seamless integration into your projects.

## Installation

You can install Number Wordify via npm:

```bash
npm install wordifynumbers
```
## Usage

Here's how you can use Number Wordify in your JavaScript code:
 


```bash
const  wordifynumbers = require("wordifynumbers");

const number = 12567;
const words = wordifynumbers(number);

console.log(words); // Output: "twelve thousand five hundred sixty-seven"

```


## For type = module

```bash
import { wordifynumbers } from "wordifynumbers"

const number = 12567;
const words = wordifynumbers(number);

console.log(words); // Output: "twelve thousand five hundred sixty-seven"

```

## Contribution

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.
