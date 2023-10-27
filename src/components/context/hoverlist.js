import React, { createContext, useState } from 'react';

export const HoverContext = createContext();

export default function HoverProvider({ children }) {
    const [elementHovered, setElementHovered] = useState("Raphaël Colau");

    const handleHover = (text) => {
        if (text === null) {
            setElementHovered("Raphaël Colau");
            return;
        }
        setElementHovered(text);
    }

    return (
        <HoverContext.Provider value={{ elementHovered, handleHover }}>
            {children}
        </HoverContext.Provider>
    )
}
