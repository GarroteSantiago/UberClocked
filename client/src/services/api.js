const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

fetch(`${API_URL}/api/data`)
    .then(response => response.json())
    .then(data => console.log(data));
