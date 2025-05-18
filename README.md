# Simple Blog Application

![Blog Homepage](https://via.placeholder.com/800x400?text=Blog+Homepage+Preview)
![Post Creation](https://via.placeholder.com/800x400?text=New+Post+Form+Preview)

A lightweight blog application built with Express.js that allows users to create, view, edit, and manage blog posts.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview
This Simple Blog Application provides a clean interface for creating and managing blog posts. It demonstrates core concepts of web development including routing, templates, and data management in a Node.js environment.

## Features
- Create new blog posts with title and content
- View all posts on the homepage
- Edit existing posts
- Delete posts
- Simple and responsive design
- About and Contact pages

## Technologies Used
- **Backend**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Frontend**: HTML, CSS
- **Data Storage**: In-memory array (no database required)

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/aliabdalla2110/simple-node-blog.git
cd simple-node-blog

Install dependencies:
npm install

Start the application:
node index.js

Open your browser to:
http://localhost:3000
```

## Features
- **View Posts**: All posts are displayed on the homepage  
- **Create a Post**: Click "New Post" to create a new blog entry  
- **Edit a Post**: Click the edit icon next to any post  
- **Delete a Post**: Click the delete icon to remove a post  
- **About/Contact**: Access these pages from the navigation menu  

## Project Structure
```plaintext
.
├── index.js           # Main application file
├── public/            # Static assets (CSS, images)
│   └── styles.css     
├── views/             # EJS templates
│   ├── partials/      # Reusable components
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs      # Homepage template
│   ├── new.ejs        # New post form
│   ├── edit.ejs       # Edit post form
│   ├── about.ejs      # About page
│   └── contact.ejs    # Contact page
└── package.json       # Project dependencies
```

## Contributing
1. Fork the project
2. Create your feature branch:
git checkout -b feature/your-feature
3. Commit your changes:
git commit -m 'Add some feature'
4. Push to the branch:
git push origin feature/your-feature
5. Open a Pull Request



## License
MIT © 2025 Ali Abdallah

## Contact
Ali Abdallah
📧 aliabdalla2110@gmail.com

## Project Link: https://github.com/aliabdalla2110/simple-node-blog

