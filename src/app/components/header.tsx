"use client"

import { useState } from "react"
import { MdInvertColors } from "react-icons/md";
import { FaPen } from "react-icons/fa";

interface TTProps {
    image: string
    change: () => void
}

export default function Header(props: TTProps) {

    const [text, setText] = useState("black")
    const [list, setList] = useState("id, title")


    function trocar() {
        setText("green")

        setText(text == "black" ? "white " : "black")


        console.log(text)
    }



    return (
        <>
            <header style={{ background: props.image }} className=" fixed top-0  w-screen items-center bg-gradient-green-500  p-6  shadow-lg rounded-bl-lg rounded-br-lg '>">
                <h1
                    style={{ color: text }}
                    onChange={() => text}
                    className="text-4xl text-center  justify-center flex ">Bloco de Notas</h1>
                <div className="flex justify-between">
                    <button onClick={trocar} className="text-2xl text-white hover:scale-110"><FaPen /></button>
                    <button onClick={() => (props.change())} className="text-3xl text-white hover:scale-110"><MdInvertColors /></button>
                </div>

            </header>
        </>
    )
}