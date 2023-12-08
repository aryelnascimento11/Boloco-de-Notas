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

     function update(value:string, index:number){
        console.log(value, index)
        console.log(list[index]);
        setList(addlist => {
            const updates = [...addlist]
            addlist[index] = value
            return addlist
        })
                
     
     }
   
    return (
        <section className="flex justify-center p-1 bg-cover h-screen pt-32  "  style={{ backgroundImage: `url('./.png')` }}>
            <div className="border-2  border-black h-full w-auto rounded shadow-lg shadow-black justify-center">
                <div className="flex p-1">
                    <input
                        className="rounded text-2xl bg-gray-300 border-black border-2"
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
                        <p className="text-black font-medium divide-y-2 border-2 border-black p-1 text-left flex justify-between place-items-center w-full rounded hover:border-green-500 cursor-pointer">
                             <input  
                                onChange={(e) => update(e.target.value,index)} type="text" className="border-2 border-black rounded bg-gray-300"   defaultValue={note}/>
                            <button onClick={() => remover(index)} className="hover:text-black text-green-500">
                                X
                            </button> 
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}