import React, { useEffect, useState } from "react";

function Body() {
  const [profiles, setProfiles] = useState([]);
  const [numberOfProfiles, setNumberOfProfiles] = useState("");
  const [username, setUsername] = useState("");

  async function generateProfile(count) {
    const validatedCount = count > 0 ? Math.min(count, 100) : 10;
    const randomId = Math.floor(1 + Math.random() * 10000);
    
    try {
      const response = await fetch(
        `https://api.github.com/users?since=${randomId}&per_page=${validatedCount}`
      );
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  }

  async function searchUser() {
    if (!username.trim()) return;
    
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}&per_page=${numberOfProfiles}`
      );
      const data = await response.json();
      setProfiles(data.items || []);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  return (
    <div className="container">
      <div className="controls">
        <div className="input-group">
          <input
            type="number"
            min="1"
            max="100"
            value={numberOfProfiles}
            onChange={(e) => setNumberOfProfiles(e.target.value)}
            placeholder="Number of profiles"
          />
          <button onClick={() => generateProfile(Number(numberOfProfiles))}>
            Generate Random Profiles
          </button>
        </div>

        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Search username"
          />
          <button onClick={searchUser}>Search User</button>
        </div>
      </div>

      <div className="profiles">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.avatar_url} alt={profile.login} />
            <h2>{profile.login}</h2>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;