import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

import { useAuth } from '../context/AuthContext'

const Login = () => {

    const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth()
    return (
        <div className="admin h-dvh">
            <div className="admin-login rounded-2xl">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto' }}>
                    <div>
                        <label htmlFor="formBasicEmail">Email address</label>
                        <input
                            id="formBasicEmail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
                                borderRadius: '0.25rem',
                            }}
                        />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="formBasicPassword">Password</label>
                        <input
                            id="formBasicPassword"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
                                borderRadius: '0.25rem',
                            }}
                        />
                        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                    </div>

                    <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '0.75rem', borderRadius: '0.25rem' }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
