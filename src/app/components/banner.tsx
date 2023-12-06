"use client"

import React, { useState } from "react";

export default function Banner() {
    const [list, setList] = useState(["tabom", "tatata", "olamaa"]);
    const [atualizar, setAtualizar] = useState("");

    function adicionarTexto(index: any){
        if(atualizar.trim() !== ""){
            setList([...list, atualizar])
            setAtualizar("")
        }
    }

    function remover(index: any){
      const novalist = [...list]
      novalist.splice (index, 1)
      setList(novalist)
    }

    // function update(index:){
    //    list[]
    // }
   
    return (
        <section className="flex justify-center p-1">
            <div className="border border-black h-full w-auto rounded justify-center">
                <div className="flex p-1">
                    <input
                        className="rounded text-2xl border-black border-2"
                        type="text"
                        value={atualizar}
                        onChange={(e) => setAtualizar(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-green-500 rounded hover:bg-black hover:text-green-500 hover:border-green-500 border-black border-2 w-80 text-center"
                        onClick={adicionarTexto}>
                        Adicionar Nota
                    </button>
                </div>
                <div className="p-1">
                    {list.map((note, index) =>
                        <p className="text-green-500 divide-y-2 border border-black p-1 text-left flex justify-between place-items-center w-full rounded hover:border-green-500 cursor-pointer">
                            {/* <input  
                            onChange={(e) => update(e.target.value)} type="text"  defaultValue={note}/>
                            <button onClick={() => remover(index)} className="hover:text-black">
                                X
                            </button> */}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}