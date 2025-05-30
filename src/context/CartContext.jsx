import React, { useState } from 'react'

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
}