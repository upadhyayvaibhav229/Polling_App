import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const name = localStorage.getItem("PollUserName");
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear('PollUserName');
        navigate("/");
    }
    return (
        <div className='p-8 bg-gray-800 flex justify-between items-center'>
            <div className='flex items-center'>
                <svg
                    className="text-gray-900 dark:text-white h-6 w-auto mr-2"
                    width="482"
                    height="74"
                    viewBox="0 0 482 74"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>StrawPoll</title>
                    <path
                        fill="currentColor"
                        d="M106.67 72.38c-13.93 0-24.69-7.3-24.88-20h14.41c.39 5.38 3.94 8.93 10.13 8.93s10.09-3.36 10.09-8.16c0-14.51-34.58-5.77-34.49-30.08 0-12.11 9.8-19.41 23.62-19.41 13.84 0 23.15 7 24 19.12h-14.78c-.29-4.42-3.84-7.88-9.61-8.01-5.28-.2-9.22 2.39-9.22 7.86 0 13.45 34.39 5.99 34.39 29.59 0 10.62-8.4 20.13-23.73 20.13z"
                    />
                    <path
                        fill="currentColor"
                        d="M134.53 29.54V5.33h13.54v13.16H160v11.05h-11.92v25.74c0 3.56 1.44 5.09 5.67 5.09H160v11.34h-8.46c-10.18 0-17-4.32-17-16.52z"
                    />
                    <path
                        fill="currentColor"
                        d="M179.29 71.71h-13.45V18.49h13.45v8.26c3.42-5.73 9.66-9.17 16.33-8.99v14.12h-3.55c-8 0-12.78 3.07-12.78 13.35z"
                    />
                    <path
                        fill="currentColor"
                        d="M219.74 17.62c8.55 0 14.41 4 17.58 8.46v-7.59h13.54v53.22h-13.54v-7.78c-3.17 4.61-9.23 8.64-17.68 8.64-13.45 0-24.21-11.05-24.21-27.66s10.75-27.29 24.31-27.29zm3.45 11.82c-7.2 0-14 5.38-14 15.47s6.82 15.85 14 15.85c7.4 0 14.13-5.57 14.13-15.66s-6.74-15.66-14.13-15.66z"
                    />
                    <path
                        fill="currentColor"
                        d="M254.22 18.49h13.64L277.27 59l10.19-40.54h14.22l10 40.44 9.41-40.49h12.91l-15.56 53.22h-14.56L294.18 34.5 284.48 71.68h-14.6z"
                    />
                    <path
                        fill="currentColor"
                        d="M362.1 46h-11.24v25.75h-13.45V4.65H362.1c16.13 0 24.19 9.13 24.19 20.75 0 10.19-6.91 20.6-24.19 20.6zm-.58-10.85c7.59 0 10.99-3.75 10.99-9.71s-3.36-9.8-10.99-9.8h-10.66v19.51z"
                    />
                    <path
                        fill="currentColor"
                        d="M413 72.57c-15.37 0-27-10.76-27-27.47s12-27.48 27.38-27.48c15.38 0 27.38 10.67 27.38 27.48S428.48 72.57 413 72.57zm0-11.72c7.11 0 13.93-5.18 13.93-15.75s-6.63-15.76-13.81-15.76c-7.11 0-13.54 5.09-13.54 15.76S405.81 60.85 413 60.85z"
                    />
                    <path fill="currentColor" d="M446.15.62h13.45v71.09h-13.45z" />
                    <path fill="currentColor" d="M468.35.62h13.45v71.09h-13.45z" />
                    <path
                        fill="#f87171"
                        d="M22.89 50.7L45.57 5.33H22.89C10.36 5.32.21 15.47.2 28c0 6.02 2.39 11.79 6.64 16.05C11.1 48.31 16.87 50.7 22.89 50.7z"
                    />
                    <path
                        fill="#818cf8"
                        d="M45.57 28L22.89 73.37h22.68c12.53 0 22.69-10.15 22.69-22.68C68.26 38.16 58.1 28 45.57 28z"
                    />
                </svg>
            </div>
            {name && (
                <div className="flex space-x-4">
                    <Link to="/create" className="text-white hover:text-gray-300 hover:border-white">Create Poll</Link>
                    <Link to="/mypolls" className="text-white hover:text-gray-300">My Polls</Link>
                    <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
                </div>
            )}
        </div>
    );
}

export default Navbar;

