"use client"

import { useState } from "react"

export default function Header() {

    const [text, setText] = useState("blue")
    const [list, setList] = useState("id, title")
    const[texto, setTexto] = useState('url("./p.jpg")')

    function trocar() {
        setText("green")

        setText(text == "blue" ? "green" : "blue")


        console.log(text)
    }

    function trocare() {
        setTexto(texto == "url('./p.jpg')" ? "url('./oi.png')" : "url('./p.jpg')")
    }


    return (
        <>
            <header style={{ background: texto }} className=" backdrop-blur-md bg-opacity-100 fixed     top-0  w-screen bg-gradient-green-500  p-6  shadow-lg rounded-bl-lg rounded-br-lg '>">
                <h1
                    style={{ color: text }}
                    onChange={() => text}
                    className="text-4xl text-center  justify-center flex ">Bloco de Notas</h1>
                <button onClick={trocar} className="text-3xl text-white">ooooo</button>
                <button onClick={() => trocare()} className="text-3xl text-white">iii</button>


                    
            </header>
        </>
    )
}