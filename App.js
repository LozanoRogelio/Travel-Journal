import React from "react"
import Card from "./components/Card"
import Nav from "./components/Nav"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
            {...item}
            
            />
        )
    })
    
    return (
        <div>
        <Nav />
        {cards}
        </div>
    )
}