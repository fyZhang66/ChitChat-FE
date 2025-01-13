import React, { useState } from 'react';

const Register = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='text'>Avatar</label>
                    <input id="text" type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                    <button>Upload</button>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;