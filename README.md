#  Response API Error Handler

[![npm version](https://badge.fury.io/js/response-error-handler.svg)](https://badge.fury.io/js/response-error-handler)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


`response-error-handler` is an npm package designed to centralize and simplify API error handling in your applications. It supports HTTP errors, GraphQL errors, and network errors, and allows you to customize error messages based on language and application needs.

<br>
---

##  Features

- **HTTP Error Handling**: Supports common HTTP error codes (400, 401, 403, 404, 500, etc.).
- **GraphQL Error Handling**: Handles errors returned by GraphQL APIs.
- **Network Error Handling**: Detects internet connection issues.
- **Callbacks**: Execute specific functions when errors occur (e.g., redirect users or show notifications).

<br>
<br>
---

## 📦 Installation

Install the package via npm:

```bash
npm install response-error-handler
```
or 

```bash
npm i response-error-handler
```

<br>
<br> 

## 🚀 Usage

1. Import and Initialize the `ApiErrorHandler` class:

```javascript

import ApiErrorHandler from 'response-error-handler';

const callbacks = {
    401: () => console.log("Redirecting to login..."),
    404: () => console.log("Resource not found!"),
    onDefault: () => console.log("An error occurred!"),
};

const errorHandler = new ApiErrorHandler("en", callbacks);

```

2. Handling Errors

```javascript

try {
    // Example with Axios
    const response = await axios.get('/api/data');
    console.log(response.data);
} catch (error) {
    const errorMessage = errorHandler.handle(error);
    console.error(errorMessage); // Displays a user-friendly error message
}

```

<br>
<br>

##  Configuration

**Supported Languages**

The package supports multiple languages. By default, the language is English ("en"). You can pass another language during initialization like french ("fr") or espanol ("es"):

```javascript
const errorHandler = new ApiErrorHandler("fr"); 
```

**Callbacks**

You can define specific functions to execute when an error occurs. For example, you can redirect users to a login page when a 401 error is received:

```javascript
const callbacks = {
    401: () => console.log("Redirecting to login..."),
    404: () => console.log("Resource not found!"),
    onDefault: () => console.log("An error occurred!"),
};

const errorHandler = new ApiErrorHandler("en", callbacks);
```


<br>
<br>

## Full Examples

Example with Axios:

```javascript
import axios from 'axios';
import ApiErrorHandler from 'response-error-handler';

const errorHandler = new ApiErrorHandler("en");

axios.get('/api/data')
    .then(response => console.log(response.data))
    .catch(error => {
        const errorMessage = errorHandler.handle(error);
        console.error(errorMessage); // Displays a user-friendly error message
    });
```

Example with GraphQL:

```javascript
import { ApolloError } from '@apollo/client';
import ApiErrorHandler from 'response-error-handler';

const errorHandler = new ApiErrorHandler("en");

const apolloError = new ApolloError({
    graphQLErrors: [{ message: "GraphQL error occurred." }],
});

const errorMessage = errorHandler.handle(apolloError);
console.error(errorMessage); // "GraphQL error occurred."
```


<br>
<br>

## 👨‍💻 Contribute

Contributions are welcome! Feel free to submit a pull request or open an issue if you have any suggestions or feedback.

1. Clone the repository: 

```bash
git clone https://github.com/adelekekismath/response-error-handler.git
```

2. Install dependencies:

```bash
npm install
```

3. Make your changes and run tests:

```bash
npm test
```

4. Submit a pull request!


<br>
## 📜 License
MIT © 2025 - Kismath Adeleke

<br>

## Author
Kismath ADELEKE - Your GitHub



