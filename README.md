
# GitHub Profile Analyzer with AI

This is a **GitHub Profile Analyzer** web application built with **React** (Frontend) and **Node.js** (Backend) that allows users to analyze GitHub profiles and get a detailed comment about the user's skills and repositories using **OpenAI**'s GPT model.

## Features

- **GitHub Profile Search**: Users can input a GitHub username to fetch profile details, including the bio, followers, following, and public repositories.
- **AI-powered Analysis**: Based on the profile information (e.g., bio, repositories), the app uses **OpenAI's GPT-3.5 model** to generate a detailed comment on the user's skills, technologies, and contributions.
- **Repositories Display**: Shows a list of public repositories with clickable links.
- **Responsive UI**: Built with React, ensuring that the application is user-friendly and works seamlessly across different devices.

## Technologies Used

- **Frontend**: 
  - **React** for building the user interface
  - **React Icons** for icons
  - **Axios** for making HTTP requests
- **Backend**:
  - **Node.js** and **Express** for handling API requests and serving the backend
  - **OpenAI API** for generating AI-powered comments based on GitHub profile data
- **CORS** middleware to handle cross-origin resource sharing between frontend and backend
- **GitHub API** to fetch public profile data and repositories

## Installation

### 1. Clone the Repository

Clone the project to your local machine using Git:

```bash
git clone https://github.com/yourusername/github-profile-analyzer-AI.git
cd github-profile-analyzer-AI
```

### 2. Set Up Backend

1. Navigate to the `backend` folder:

```bash
cd backend
```

2. Install the required dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` folder and add your **OpenAI API key**:

```
OPENAI_API_KEY=your-openai-api-key
```

4. Start the backend server:

```bash
node server.js
```

The backend will now be running on **http://localhost:5000**.

### 3. Set Up Frontend

1. Navigate to the `frontend` folder:

```bash
cd ../frontend
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

The frontend will now be running on **http://localhost:3000**.

### 4. View the Application

Open your browser and visit **http://localhost:3000** to interact with the GitHub Profile Analyzer.

## How It Works

1. **User Input**: Users enter a GitHub username in the search bar.
2. **Profile Data Fetch**: The app fetches data using the **GitHub API** to retrieve details like the user's name, bio, followers, and repositories.
3. **AI Analysis**: The profile data is sent to the **Node.js backend**, where the **OpenAI API** generates a detailed comment about the user's skills, repositories, and programming knowledge.
4. **Results**: The app displays the user’s profile, a list of their repositories, and the AI-generated comment.

## Example

### User Profile

- **Name**: John Doe
- **Bio**: Full Stack Developer | React | Node.js | JavaScript | TypeScript
- **Followers**: 120
- **Following**: 50
- **Public Repositories**: 10

### AI Comment:
"John is a skilled Full Stack Developer with experience in JavaScript, React, Node.js, and TypeScript. He has a solid background in building both frontend and backend applications. His active involvement in open-source projects and diverse repository contributions indicates a strong understanding of web development technologies."

## License

This project is licensed under the MIT License.
