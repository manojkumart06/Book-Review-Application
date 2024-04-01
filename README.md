# BookReviewer Application

BookReviewer is a comprehensive web application designed for book enthusiasts to browse, search, and review their favorite books. It offers a user-friendly interface and utilizes a robust backend API for efficient data handling. This application is the go-to platform for sharing and discovering insightful book reviews.

## Installation and Running the Application

To get the BookReviewer application up and running on your local machine, follow these steps:

1. **Clone the Project**
   - Use the following URL to clone or download the project to your local machine:
     ```
     https://github.com/manojkumart06/Book-Review-Application.git
     ```

2. **Install Dependencies**
   - Navigate to both the root and frontend folders and install the required dependencies by executing:
     ```
     npm install
     ```

3. **Environment Configuration**
   - Create a `.env` file in the root directory and include your secret key as shown below:
     ```
     JWT_SECRET=bookapp
     ```

4. **Run the Application**
   - Start the application with the following command:
     ```
     npm run dev
     ```

## Features

- **Responsive UI**: A modern, responsive user interface ensuring a seamless experience across all devices.
- **Book Listings**: Displays books in a grid format, showing covers, titles, and authors.
- **Search Functionality**: Enables users to find books by title, author, or genre.
- **Book Details**: Offers detailed information about the book, including descriptions and user reviews.
- **Review Submission**: Allows users to post reviews, including ratings and comments, with client-side validation.
- **User Registration/Login**: Supports user account creation and authentication for a personalized experience.
- **Favorites Feature**: Enables users to mark books as favorites for easy access.(currently working on it)

## Tools and Libraries

- **Frontend**: React for building the user interface, Bootstrap for styling.
- **Backend**: Node.js with Express for the API, MongoDB Atlas for the database.
- **Authentication**: JWT for handling authentication and user sessions.
- **Development Tools**: npm for dependency management, Git for version control.

## Contributions

Contributions are welcome! If you're interested in improving the BookReviewer application, feel free to fork the repository and submit a pull request. Please ensure your code adheres to the project's coding standards and include unit tests where possible.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
