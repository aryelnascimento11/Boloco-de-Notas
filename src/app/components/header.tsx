"use client"

import { describe } from "node:test"
import { useState } from "react"

export default function Header() {

    const [text, setText] = useState("blue")
    const [list, setList] = useState("id, title")

    function trocar() {
        setText("green")
        setText("rose")
        setText(text == "blue" ? "green"   : "blue")

        console.log(text)
    }


    return (
        <>
        <header className="bg-black top-0  w-screen   p-6  shadow-lg rounded-bl-lg rounded-br-lg '>">
            <h1 
             style={{color:text} }
            className="text-3xl text-center justify-center flex text-white">{text}</h1>
            <button 
           
            onClick={trocar} className="text-3xl text-white">ooooo</button>
            </header>
        </>
    )
}