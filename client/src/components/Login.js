import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlelogin = (event) => {
        event.preventDefault();
        //Cambiar esta parte por una busqueda en la BD
        if(username === "admin" && password === "1234") {
            navigate("/home");
        }
        else {
            alert("Username or password incorrect");
        }

    };
    return (
        <div>
            <h2> Login </h2>
            <form onSubmit={handlelogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                /><br/><br/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                /><br/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;