import React, { useState } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [aiComment, setAiComment] = useState('');
  const [error, setError] = useState(null);

  const fetchProfileData = async () => {
    if (username.trim() === '') {
      setError('Please enter a GitHub username!');
      return;
    }

    setError(null);
    try {
      // GitHub API'den profil verilerini çekiyoruz
      const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
      setProfileData(profileResponse.data);

      // Repo verilerini çekiyoruz
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(reposResponse.data);

      // Backend'e profil verilerini gönderiyoruz ve yapay zekadan yorum alıyoruz
      const profileSummary = `
        Name: ${profileResponse.data.name || 'N/A'}
        Bio: ${profileResponse.data.bio || 'N/A'}
        Repositories: ${reposResponse.data.map(repo => repo.name).join(', ')}
      `;

      const aiResponse = await axios.post('http://localhost:5000/analyzeProfile', {
        profileData: profileSummary,
      });

      setAiComment(aiResponse.data.comment);

    } catch (err) {
      // Hata mesajını daha ayrıntılı şekilde göster
      console.error("Error fetching data:", err.response ? err.response.data : err.message);
      setError(`Error: ${err.response ? err.response.data.message : err.message}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Profile Analyzer</h1>
        <div>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={fetchProfileData}>Analyze</button>
        </div>
        {error && <p>{error}</p>}

        {profileData && (
          <div className="profile-info">
            <img src={profileData.avatar_url} alt="Avatar" className="avatar" />
            <h2>{profileData.name}</h2>
            <p>{profileData.bio}</p>
            <p>Followers: {profileData.followers} | Following: {profileData.following}</p>
            <p>Public Repositories: {profileData.public_repos}</p>
            <a href={profileData.html_url} target="_blank" rel="noopener noreferrer">
              <FaGithub /> View Profile
            </a>
          </div>
        )}

        {repos.length > 0 && (
          <div className="repos">
            <h3>Repositories:</h3>
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {aiComment && (
          <div className="ai-comment">
            <h3>AI Comment:</h3>
            <p>{aiComment}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
