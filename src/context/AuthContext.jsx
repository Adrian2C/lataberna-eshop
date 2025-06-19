import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const { setIsAuth } = useContext(CartContext)

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuth') === 'true'
        if (isAuthenticated) {
            setIsAuth(true)
            navigate('/admin')
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let validationErrors = {}

        if (!email) validationErrors.email = 'Email es requerido'
        if (!password) validationErrors.password = 'La contraseña es requerida'

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        try {
            const res = await fetch('data/users.json')
            const users = await res.json()

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            )

            if (!foundUser) {
                setErrors({ email: 'Credenciales inválidas' })
            } else {
                if (foundUser.rol === 'admin') {
                    setIsAuth(true)

                    //mantiene el login abiero.t hasta q haga logout
                    localStorage.setItem('isAuth', true)
                    navigate('/admin')
                } else {
                    navigate('/')
                }
            }
        } catch (err) {
            console.error('error fetching user', err)
            setErrors({ email: 'Algo salió mal, por favor intentelo más tarde' })
        }
    }
    return (
        <AuthContext.Provider value={{ email, setEmail, password, setPassword, handleSubmit, errors }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)