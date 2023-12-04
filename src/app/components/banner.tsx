"use client"

import { table } from "node:console";
import { useState } from "react";

export default function Banner() {

    const [list, setList] = useState(["tabom", "tatata", "olamaa"])
    const [text, setText] = useState("blue")
    const [fist, setFist] = useState("id, title")

    function trocar() {
        setText("red")
        console.log(text)
    }


    return (
        <section className="flex justify-center p-1">

            <div className="border border-black  h-48  w-96 rounded justify-center">
                <div className="flex p-1">
                    <input className="rounded text-2xl border-black border-2 " type="text"

                    />
               
                </div>
                <div className="flex justify-center">
                    <button className="bg-green-500 rounded hover:bg-black hover:text-green-500  hover:border-green-500 border-black border-2 w-80 text-center">Adicionar</button>
                </div>
                <div className="p-1 ">
              
                    {list.map((note) => (
                        <p className="text-green-500 divide-y-2 border border-black p-1 text-left  flex justify-between place-items-center w-full  rounded hover:border-green-500 cursor-pointer ">{note} <button className="hover:text-black">X</button></p>
                    ))}
                            
                </div>
            </div>
        </section>

    )
}