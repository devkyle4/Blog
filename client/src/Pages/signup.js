import {useState} from 'react';

export default function SignUp(){
    const [ username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function signup(ev){
        ev.preventDefault();    
            const response = await fetch('http://localhost:4000/signup',{
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: { 'Content-Type':'application/json'},
            });
        if (response.status === 200){
            alert('Registration Successful');
        }else{
            alert('Registration Failed');
        } 
    }

    return (
        <form className="signup" onSubmit={signup}>
            <h1>Sign Up</h1>
            <input type="text" 
                   placeholder="username"
                   value={username}
                   onChange={event => setUsername(event.target.value)}
            />
            <input type="password"
                   placeholder="password"
                   value={password}
                   onChange={event=> setPassword(event.target.value)}
            />
            <button>Sign Up</button>
        </form>
    );
 }