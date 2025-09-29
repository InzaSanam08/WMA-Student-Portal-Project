# Student Portal - Local Storage Version

## Overview
This project is a simple Student Portal that allows users to sign up, log in, register their profiles, and view their dashboard. The entire application uses Local Storage to manage user data, eliminating the need for a backend server.

## Project Structure
```
student-portal-local
├── index.html        (Login & Signup)
├── register.html     (Student Registration Form)
├── dashboard.html    (Profile Dashboard)
├── style.css         (UI Design)
└── app.js            (Local Storage Logic)
```

## File Descriptions

- **index.html**: Contains the HTML structure for the login and signup page. It includes input fields for email and password, along with buttons to trigger the login and signup functions.

- **register.html**: Contains the HTML structure for the student registration form. It includes input fields for the student's full name, timing, campus, teacher name, and course selection, along with a button to save the profile.

- **dashboard.html**: Contains the HTML structure for the profile dashboard. It displays the user's profile information such as name, timing, campus, teacher, and course, along with a logout button.

- **style.css**: Contains the CSS styles for the project. It styles the body, card layout, input fields, buttons, and hover effects to create a visually appealing user interface.

- **app.js**: Contains the JavaScript logic for handling user signup, login, profile saving, profile loading, and logout functionality using Local Storage. It includes functions for signup, login, saving the profile, loading the profile on the dashboard, and logging out.

## How to Run the Project
1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Use the signup form to create a new user account.
4. Log in with the created account and fill out the student registration form.
5. Access the dashboard to view your profile information.

## Technologies Used
- HTML
- CSS
- JavaScript
- Local Storage

## Notes
- This project is designed for educational purposes and demonstrates the use of Local Storage for managing user data in a web application.