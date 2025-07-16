import React from 'react';

const AdminNavbar = ({ onLogout }) => {
    return (
        <nav className="w-max flex px-4 py-2">
            <button
                className="flex items-center px-4 h-10 rounded-lg bg-rune text-bg hover:text-rune hover:bg-dragon group"
                onClick={onLogout}
                aria-label="Cerrar sesión"
            >
                Logout
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                </svg>
            </button>
        </nav>
    );
};

export default AdminNavbar;