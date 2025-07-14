import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "./CartContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const { setIsAuth } = useContext(CartContext);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuth') === 'true';
        if (isAuthenticated) {
            setIsAuth(true);
            if (location.pathname === '/login' || location.pathname === '/') {
                navigate('/admin');
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (!email) validationErrors.email = 'Email es requerido';
        if (!password) validationErrors.password = 'La contraseña es requerida';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await fetch('data/users.json');
            const users = await res.json();

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            );

            if (!foundUser) {
                setErrors({ email: 'Credenciales inválidas' });
            } else {
                setIsAuth(true);
                localStorage.setItem('isAuth', true);
                setEmail('');
                setPassword('');
                navigate('/admin');
            }

        } catch (err) {
            console.error('error fetching user', err);
            setErrors({ email: 'Algo salió mal, por favor intentelo más tarde' });
        }
    };

    return (
        <AuthContext.Provider value={{ email, setEmail, password, setPassword, handleSubmit, errors }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
