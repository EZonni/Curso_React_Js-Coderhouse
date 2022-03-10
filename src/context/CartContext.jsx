import React, { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

        const [cartProducts , setCartProducts] = useState([]);
        const [productsCount , setProductsCount] = useState(0);
 
  
        const addItemsToCart = (item, quantity)=>{
            if (cartProducts.some(product => product.id === item.id)) {
                const copyPaste = [...cartProducts];
                const prodIndex = cartProducts.findIndex(product => product.id === item.id);
                copyPaste[prodIndex] = {
                    ...copyPaste[prodIndex],
                    quantity: copyPaste[prodIndex].quantity + quantity,
                };
                setCartProducts(copyPaste);
                setProductsCount(prev => prev + quantity)
            
            } else {
                
                setCartProducts([...cartProducts,{...item, quantity}])
                setProductsCount(prev => prev + quantity)}
                
        };
       
        const removeItems = (item) => {
            if(cartProducts.some(product => product.id === item.id)) {
                const remove = cartProducts.filter(product => product.id !== item.id);
                setCartProducts(remove);
                setProductsCount(prev => prev - item.quantity);
            };
        };

        const finalPrice =  cartProducts.reduce((prev,product) => prev + (product.price * product.quantity),0);

        const cleanCart = () => {
            setCartProducts([]);
            setProductsCount(0);
        };

    return ( 

        <CartContext.Provider value={{cartProducts, productsCount, addItemsToCart, removeItems, finalPrice, cleanCart}}> {children} </CartContext.Provider>

    );
      
};