# 🚀 QuickDecide | Modern Decision Maker App
**QuickDecide** is a professional, full-stack MERN application designed to help users make fast decisions through interactive polls. It features a vibrant, high-performance UI built with **React 19, Vite, and Tailwind CSS v4,** backed by a robust **Node.js/Express server and MongoDB Atlas.** \
![alt text](https://img.shields.io/badge/license-MIT-blue.svg)<br/>

![alt text](https://img.shields.io/badge/React-19-blue?logo=react)<br/>

![alt text](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)<br/>

![alt text](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)<br/>

## ✨ Core Features

Dynamic Poll Creation: Set questions with custom durations (minutes).<br/>
Smart Expiry Logic: Polls automatically close and disable voting once the time is up.<br/>
Visual Voting System: Real-time progress bars showing the percentage of votes for each option.<br/>
Winner Highlighting: Automatically identifies and displays the winning option with a trophy icon after expiry.<br/>
Advanced Filtering: Sort through polls by All, Active, or Expired status.<br/>
Responsive Design: Fully optimized for mobile, tablet, and desktop views.<br/>

## 🛠️ Tech Stack

### Frontend:
React 19 (Vite)<br/>
Tailwind CSS v4 (Modern CSS-first styling)<br/>
Framer Motion (Smooth animations)<br/>
Lucide React (Professional iconography)<br/>
Axios (API handling)<br/>

### Backend:
Node.js & Express.js<br/>
MongoDB Atlas (Cloud Database)<br/>
Mongoose (Object Data Modeling)<br/>
Day.js (Time manipulation)<br/>


## 🚀 Getting Started
### 1. Prerequisites
- Node.js (v18.x or higher)
- NPM (v9.x or higher)
- MongoDB Atlas Account

 ## ⚙️ Installation & Setup Guide
Follow these steps to get the project running locally on your machine.

### 1. Clone the Repository<br/>
Open your terminal and run the following command to clone the project:

```
git clone https://github.com/pankaj0114/QuickDecide-Mern-App.git
cd QuickDecide-Mern-App
```

### 2. Database Configuration (MongoDB Atlas)
**Create a Cluster:** Sign up at MongoDB Atlas and create a free Shared Cluster.<br/>
**Database Access:** Create a user with a username and password.<br/>
**Network Access:** Add 0.0.0.0/0 to the IP Access List to allow connections from anywhere.<br/>
**Connection String:** Click Connect > Drivers and copy your connection string (URI).<br/>

### 3. Backend Setup
Navigate to the backend folder and configure the environment variables:

```
# Go to backend folder
cd backend

# Install dependencies
npm install

# Create environment file
.env
```
**Edit the .env file** and add your MongoDB URI:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/quickdecide?retryWrites=true&w=majority
```
**Start the backend server:**
```
node server.js
```
The console should display: Server running on port 5000 and MongoDB Connected.</br>
### 4. Frontend Setup
Open a new terminal window, navigate to the client directory, and launch the Vite development server:

```
# Go to frontend folder
cd frontend

# create react app
npx create vite@latest

#install dependencies
 npm install axios lucide-react framer-motion dayjs
 npm install tailwindcss @tailwindcss/vite

# Start the React 19 app
npm run dev

```
The app will be available at: http://localhost:5173.</br>

## 🧪 Testing the API
You can use **Postman or Insomnia** to verify the CRUD operations.
### 1. Create a New Poll
   **Method:** POST</br>
   **URL:** http://localhost:5000/api/polls</br>
   **Body (JSON):** </br>
 ```
{
  "question": "What is the best JS framework?",
  "options": ["React", "Vue", "Angular"],
  "duration": 60
}
```
## 2. Fetch All Polls
**Method:** GET</br>
 **URL:** http://localhost:5000/api/polls</br>
 
## 3. Cast a Vote
**Method:** PATCH </br>
**URL:** http://localhost:5000/api/polls/PASTE_POLL_ID_HERE/vote </br>
 **Body (JSON):** </br>
 ```
{
 "optionId": "PASTE_OPTION_ID_HERE"
}
```

## 📚 Key Documentation Links
**Resource** 	&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;          **Link**</br>
**React 19 Hooks**&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    [React.dev Docs](https://react.dev/reference/react)</br>
**Tailwind CSS v4**&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 	[v4.tailwindcss.com](https://v4.tailwindcss.com/)</br>
**Vite Guide**   &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 	[Vitejs.dev](https://vite.dev/guide/)</br>
**Mongoose API** &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 	[Mongoosejs.com](https://mongoosejs.com/docs/api/mongoose.html)</br>
**Framer Motion**	 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; [Framer.com/Motion](https://motion.dev/)</br>

##📸 Screenshots
Dashboard View	Create Poll Modal
![alt text](https://via.placeholder.com/400x250?text=Vibrant+Poll+Grid)
![alt text](https://via.placeholder.com/400x250?text=Colorful+Create+Form)

🤝 Contributing
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See LICENSE for more information.
Developed with ❤️ for better decisions.
