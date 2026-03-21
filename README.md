# 🚀 QuickDecide | Modern Decision Maker App
QuickDecide is a professional, full-stack MERN application designed to help users make fast decisions through interactive polls. It features a vibrant, high-performance UI built with **React 19, Vite, and Tailwind CSS v4,** backed by a robust **Node.js/Express server and MongoDB Atlas.** \
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


# Install dependencies
npm install

# Create a .env file
touch .env
Add your MongoDB URI to .env:
code
Env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/quickdecide
PORT=5000
Start the server:
code
Bash
npm start
3. Frontend Setup
code
Bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
🔌 API Documentation
Method	Endpoint	Description
GET	/api/polls	Fetch all polls
POST	/api/polls	Create a new poll (Question, Options, Duration)
PATCH	/api/polls/:id/vote	Vote for a specific option in a poll
Sample POST Body:
code
JSON
{
  "question": "Which framework is better?",
  "options": ["React", "Vue"],
  "duration": 60
}
📸 Screenshots
Dashboard View	Create Poll Modal
![alt text](https://via.placeholder.com/400x250?text=Vibrant+Poll+Grid)
![alt text](https://via.placeholder.com/400x250?text=Colorful+Create+Form)
📖 Documentation Links Used
The following resources were utilized in the development of this project:
React 19: Official React Docs
Tailwind CSS v4: Tailwind CSS v4 Alpha Documentation
Vite: Vite Guide
MongoDB Atlas: Atlas Documentation
Framer Motion: Animation Library Docs
Lucide Icons: Icon Reference
🤝 Contributing
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See LICENSE for more information.
Developed with ❤️ for better decisions.
