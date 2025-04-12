import bus from './assets/projects/bus.jpg'
import book from './assets/projects/books.jpg'
import password from './assets/projects/password.jpg'
import portfolio from './assets/projects/portfolio.jpg'
import students from './assets/projects/students.jpg'
import weather from './assets/projects/weather.jpg'

// screen shots for students management system 
import student1 from './assets/ProjectsDetails/student1.png'
import student2 from './assets/ProjectsDetails/student2.png'
import student3 from './assets/ProjectsDetails/student3.png'
import student4 from './assets/ProjectsDetails/student4.png'
import student5 from './assets/ProjectsDetails/student5.png'
import student6 from './assets/ProjectsDetails/student6.png'
import student7 from './assets/ProjectsDetails/student7.png'
import student8 from './assets/ProjectsDetails/student8.png'
import student9 from './assets/ProjectsDetails/student9.png'
import student10 from './assets/ProjectsDetails/student10.png'
import student11 from './assets/ProjectsDetails/student11.png'
import student12 from './assets/ProjectsDetails/student12.png'
import student13 from './assets/ProjectsDetails/student13.png'
import student14 from './assets/ProjectsDetails/student14.png'


// screen shots for bus booking app 
import bus1 from './assets/ProjectsDetails/bus1.png'
import bus2 from "./assets/ProjectsDetails/bus2.png";
import bus3 from "./assets/ProjectsDetails/bus3.png";
import bus4 from "./assets/ProjectsDetails/bus4.png";
import bus5 from "./assets/ProjectsDetails/bus5.png";
import bus6 from "./assets/ProjectsDetails/bus6.png";
import bus7 from "./assets/ProjectsDetails/bus7.png";
import bus8 from "./assets/ProjectsDetails/bus8.png";
import bus9 from "./assets/ProjectsDetails/bus9.png";
import bus10 from "./assets/ProjectsDetails/bus10.png";

// screen shots for book shop
import book1 from './assets/ProjectsDetails/book1.png'
import book2 from './assets/ProjectsDetails/book2.png'
import book3 from './assets/ProjectsDetails/book3.png'
import book4 from './assets/ProjectsDetails/book4.png'
import book5 from './assets/ProjectsDetails/book5.png'
import book6 from './assets/ProjectsDetails/book6.png'
import book7 from './assets/ProjectsDetails/book7.png'
import book8 from './assets/ProjectsDetails/book8.png'
import book9 from './assets/ProjectsDetails/book9.png'

// screen shots for modern portfolio
import portfolio1 from './assets/ProjectsDetails/porfolio1.png'
import portfolio2 from './assets/ProjectsDetails/porfolio2.png'
import portfolio3 from './assets/ProjectsDetails/porfolio3.png'
import portfolio4 from './assets/ProjectsDetails/porfolio4.png'
import portfolio5 from './assets/ProjectsDetails/porfolio5.png'
import portfolio6 from './assets/ProjectsDetails/porfolio6.png'
import portfolio7 from './assets/ProjectsDetails/porfolio7.png'
import portfolio8 from './assets/ProjectsDetails/porfolio8.png'
import portfolio9 from './assets/ProjectsDetails/porfolio9.png'
import portfolio10 from './assets/ProjectsDetails/porfolio10.png'
import portfolio11 from './assets/ProjectsDetails/porfolio11.png'
import portfolio12 from './assets/ProjectsDetails/porfolio12.png'


// screen shots for weather app
import weather1 from './assets/ProjectsDetails/weather1.png'
import weather2 from './assets/ProjectsDetails/weather2.png'
import weather3 from './assets/ProjectsDetails/weather3.png'
import weather4 from './assets/ProjectsDetails/weather4.png'

// screen shots for Strong password generator
import password1 from './assets/ProjectsDetails/password1.png'
import password2 from './assets/ProjectsDetails/password2.png'
import password3 from './assets/ProjectsDetails/password3.png'
import password4 from './assets/ProjectsDetails/password4.png'

const projects=[
  {
    id: 1,
    image:students,
    title: "Student Management System",
    overview: "The Student Management System is a full-stack web application that allows educational institutions to manage student data efficiently. It supports adding, editing, and deleting student records and provides detailed views of student profiles. The app includes both user and admin roles with secure access and intuitive navigation.",
    features: [
      "Admin & User Authentication (Login/Register)",
      "Add, Update, View, and Delete Student Records",
      "Course and Department Assignment",
      "Student Dashboard with Statistics",
      "Profile View for Each Student",
      "OTP verifications for students",
    ],
    techStack: {
      frontend: ["Handlebars","HTML", "CSS", "JS"],
      backend: ["Node.js", "Express.js", "Node Mailer", "Multer"],
      database: ["MySQL"],
      tools: ["VS Code","Postman", "MySQL Workbench"]
    },
    screenshots: [
      student1,student2,student3,student4,student5,student6,student7,student8,student9,student10,student11,student12,student13,student14
    ],
    myrole: [
      "Designed RESTful APIs using Spring Boot & Hibernate",
      "Integrated React frontend using Axios",
      "Implemented CRUD operations for student and course management",
      "Used MySQL for relational data storage and designed normalized schema",
      "Managed authentication, form validation, and navigation routing"
    ],
    learnings: [
      "Role-based access in web applications",
      "Integration of Spring Boot with React",
      "State and form management in React",
      "Efficient database relationships with Hibernate",
      "Modular backend API design"
    ],
    future: [
      "Role-based dashboards for Teachers/Parents",
      "Bulk import/export of student data (Excel/CSV)",
      "Integration with Email & SMS notification services",
      "Attendance & Fee Management Modules"
    ],
    github: "https://github.com/Stephenjoseph2604/Student-Management-System"
  }
  ,
  {
    id: 2,
    image:bus,
    title: "Bus Booking App",
    overview: "The Bus Booking App is a full-stack web application designed to allow users to easily search, book, and manage bus tickets online. The system also includes an admin panel to manage routes, view bookings, and monitor system activity. It ensures a smooth travel booking experience with real-time updates and a user-friendly interface.",
    features: [
      "User & Admin Authentication (Login/Register)",
      "Search Buses by Route, Date & Time",
      " Book, View, and Cancel Tickets",
      "Live Seat Availability",
      "Admin Dashboard: Add/Edit/Delete buses & routes",
      " Role-Based Access Control",
      "Booking History & Invoice Generation",
    ],
    techStack: {
      frontend: ["React.js","JQuery","Axios","React-Router-Dom"],
      backend: ["Java"," Spring Boot"," Spring Boot REST API"," Spring Data JPA"],
      database: ["MySQL"],
      tools:["VS Code","Eclipse","IntelliJ","Postman","MySQL Workbench"]
    },
    screenshots: [
      bus1,bus2,bus3,bus4,bus5,bus6,bus7,bus8,bus9,bus10
    ],
    myrole:[
      "Designed RESTful APIs using Spring Boot & Hibernate",
      "Integrated React frontend using Axios",
      "Implemented CRUD operations for bookings and routes",
      "Used MySQL for relational data storage and optimized schema",
      "Handled form validation, authentication, and navigation routing"
    ],
    learnings:[
      "Full-stack application architecture",
      "Secure API development with Spring Boot",
      "Efficient state management in React",
      "Handling real-time data and dynamic routing"
    ],
    future:[
      "Online payment gateway integration (Razorpay/Stripe)",
      "Passenger chat system",
      "Rewards & cash prize for passengers"
    ],
    github: "",
    
   
  },
  {
    id: 3,
    image:book,
    title: "Book Shop Management System",
    overview: "The Book Shop Management System is a full-stack web application built using Java Servlet and JSP that allows users to browse books, view prices, and raise queries. Admins have full control to manage book inventory, respond to user queries, and send notifications. This system offers a simplified way to handle book listings and customer interactions efficiently.",
    features: [
      "User Registration and Login",
      "Browse Books and View Prices",
      "Query Submission by Users",
      "Admin Panel to Add/Update/Delete Books (CRUD)",
      "Notification Management by Admin",
      "Admin Response to User Queries",
      "Responsive UI for Web Browsing"
    ],
    techStack: {
      frontend: ["HTML", "CSS", "JSP"],
      backend: ["Java", "Servlets", "JSP"],
      database: ["MySQL"],
      tools: ["Eclipse", "Apache Tomcat", "MySQL Workbench", "Postman"]
    },
    screenshots: [
     book1,book2,book3,book4,book5,book6,book7,book8,book9,
    ],
    myrole: [
      "Built the backend using Java Servlets and JSP",
      "Designed and implemented CRUD operations for books",
      "Handled query and notification modules for admin",
      "Integrated MySQL for data persistence",
      "Worked on both frontend and backend logic for seamless functionality"
    ],
    learnings: [
      "Web application development using Servlets and JSP",
      "Manual session management and authentication in Java",
      "Interfacing Java backend with MySQL database",
      "Form handling and validation in JSP",
      "Efficient routing and modular coding in legacy Java EE architecture"
    ],
    future: [
      "Add online book purchase and payment integration",
      "Implement user reviews and ratings for books",
      "Introduce user dashboards with order history",
      "Enable email notifications for admin responses"
    ],
    github: "https://github.com/Stephenjoseph2604/Book_Shop_Management"
  }
  ,
  {
    id: 4,
    image:portfolio,
    title: "Modern Portfolio Website",
    overview: "The Modern Portfolio Website is a fully responsive single-page application built using React.js and Tailwind CSS. It showcases my skills, projects, resume, and contact information in a clean and minimal UI. It utilizes modern React UI libraries to deliver a smooth user experience with animations, reusable components, and optimized performance.",
    features: [
      "Fully Responsive Design for All Devices",
      "Animated Smooth Scroll Navigation",
      "Project Showcase with Screenshots",
      "Resume Download Option",
      "Integrated Contact Form with Email Support",
      "Lightweight and Fast Loading",
      "Deployed with Custom Domain"
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Framer Motion", "Magic UI", "Cursify"],
      backend: [],
      database: [],
      tools: ["VS Code", "Git", "GitHub", "Vercel"]
    },
    screenshots: [
     portfolio1,portfolio2,portfolio3,portfolio4,portfolio5,portfolio6,portfolio7,portfolio8,portfolio9,portfolio10,portfolio11,portfolio12
    ],
    myrole: [
      "Designed and developed the UI using React.js and Tailwind CSS",
      "Integrated smooth scroll and animation libraries",
      "Created reusable components for projects and contact section",
      "Optimized for performance and mobile responsiveness",
      "Handled deployment on Vercel with custom domain setup"
    ],
    learnings: [
      "Modern React development and best practices",
      "Responsive web design with Tailwind CSS",
      "Using third-party libraries for UI enhancements",
      "Component-based architecture and state management",
      "Optimizing assets and deploying to production"
    ],
    future: [
      "Add blog section with markdown support",
      "Integrate CMS for dynamic content management",
      "Include GitHub contribution graph and visitor counter",
      "Theme switcher (Dark/Light mode)"
    ],
    github: "https://github.com/Stephenjoseph2604/Mordern_Portfolio"
  }
  ,{
    id: 5,
    image:weather,
    title: "Weather App",
    overview: "The Weather App is a simple and elegant React application that allows users to check current weather conditions in any city. It fetches real-time weather data from the OpenWeatherMap API and displays temperature, weather conditions, humidity, and wind speed with intuitive icons and styling.",
    features: [
      "Search weather by city name",
      "Display real-time temperature and weather conditions",
      "Show humidity, wind speed, and weather icon",
      "Responsive UI with minimal design",
      "Error handling for invalid city names",
      "API-based data fetching using Axios"
    ],
    techStack: {
      frontend: ["React.js", "CSS", "Axios"],
      backend: [],
      database: [],
      tools: ["VS Code", "Git", "GitHub", "OpenWeatherMap API"]
    },
    screenshots: [
     weather1,weather2,weather3,weather4
    ],
    myrole: [
      "Built the UI components using React.js",
      "Integrated OpenWeatherMap API using Axios",
      "Managed state and props to handle API responses",
      "Implemented error handling for invalid or empty inputs",
      "Styled the app to make it responsive and clean"
    ],
    learnings: [
      "Working with third-party APIs",
      "Fetching and displaying dynamic data in React",
      "State and effect management using useState and useEffect",
      "Building responsive UIs with basic CSS",
      "Handling asynchronous API calls and error states"
    ],
    future: [
      "Add 5-day weather forecast feature",
      "Geolocation support to fetch weather by current location",
      "Theme toggle (day/night)",
      "Save favorite cities"
    ],
    github: "https://github.com/Stephenjoseph2604/WeatherApp-React-js"
  }
  ,{
    id: 6,
    image:password,
    title: "Strong Password Generator",
    overview: "The Strong Password Generator is a React-based tool designed to help users create secure and customizable passwords. It leverages mathematical logic and randomization to generate strong passwords based on selected criteria like length, uppercase, lowercase, numbers, and symbols, ensuring better online security.",
    features: [
      "Generate random strong passwords",
      "Customize password length",
      "Toggle options for uppercase, lowercase, numbers, and symbols",
      "Copy password to clipboard",
      "Clean and responsive UI"
    ],
    techStack: {
      frontend: ["React.js", "CSS"],
      backend: ["None"],
      database: ["None"],
      tools: ["VS Code", "Git", "GitHub"]
    },
    screenshots: [
      password1,password2,password3,password4
    ],
    myrole: [
      "Created dynamic UI components in React",
      "Used JavaScript's `Math.random()` and `charCodeAt()` for random password generation",
      "Built password strength logic based on character types and length",
      "Implemented copy-to-clipboard feature",
      "Managed form state using React useState hook"
    ],
    learnings: [
      "Core concepts of randomness and character code manipulation",
      "React state management",
      "Building reusable functional components",
      "User experience design with dynamic feedback",
      "Clipboard API usage in React"
    ],
    future: [
      "Dark mode support",
      "Save and manage previously generated passwords (local storage)",
      "Download password as text file",
      "User alerts for weak configuration selections"
    ],
    github: "https://github.com/Stephenjoseph2604/Strong_Password_Generator-React"
  }
  
  
]

export default projects;