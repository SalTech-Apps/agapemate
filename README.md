# Dating App Landing Page

Welcome to the repository for our Dating App Landing Page. This project is built using modern web technologies and tools to create a responsive and interactive landing page.


## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This landing page serves as the entry point for our dating app, showcasing its features and encouraging users to sign up. It is designed with responsiveness and performance in mind, providing a seamless experience across different devices.

## Technologies

The project leverages the following technologies:

- **[Concurrently](https://www.npmjs.com/package/concurrently)**: To run multiple npm scripts concurrently.
- **[Parcel](https://parceljs.org/)**: For fast and zero configuration web application bundling.
- **[PostHTML](https://github.com/posthtml/posthtml)**: A tool for transforming HTML with plugins.
  - **[posthtml-doctype](https://github.com/posthtml/posthtml-doctype)**: To specify doctype in HTML.
  - **[posthtml-include](https://github.com/posthtml/posthtml-include)**: To include files in HTML.
  - **[posthtml-modules](https://github.com/posthtml/posthtml-modules)**: To manage modular HTML components.
- **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone git@github.com:SalTech-Apps/fresh-landing.git
    cd fresh-landing
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

To run the project locally, use the following command:

```sh
npm start
```
This will run the development server and you can view the landing page in your browser at 
```http://localhost:1234```

To run build project, use the following command:

```sh
npm run build
```