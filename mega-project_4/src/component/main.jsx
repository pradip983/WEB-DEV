import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const main = () => {
    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([]);
    const [showfinished, setshowfinished] = useState(true);

   useEffect(() => {
    let todoString =  localStorage.getItem("todos")
    if(todoString){
        let todos = JSON.parse(localStorage.getItem("todos"))
        settodos(todos)
    }
   }, [])
   

    // const saveToLC = (params) =>{
    //     localStorage.setItem("todos", JSON.stringify(todos))
    // }

    const handelsubmit = () => {
        settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
        // saveToLC();
        settodo("")
    }

    const handeldelet = (e, id) => {


        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newtodos = todos.filter(item => {
            return item.id !== id
        })
        settodos(newtodos)
        
    }

    const handeladd = (e, id) => {
       let t = todos.filter(i=>i.id === id)
        settodo(t[0].todo);
        let newtodos = todos.filter(item => {
            return item.id !== id
        })
        settodos(newtodos);
        // saveToLC();

    }

    const handelchange = (e) => {
        settodo(e.target.value)

    }

    const handelchackbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newtodos = [...todos];
        newtodos[index].isCompleted = !newtodos[index].isCompleted;
        settodos(newtodos)
        // saveToLC();

    }

    const toggle = (e)=>{
   setshowfinished(!showfinished);
    }

    return (
        <>
            <header className='mx-auto my-[45px] h-[75vh] w-[50%] bg-red-100 rounded-lg'>
                <nav className='text-center bg-slate-700 text-white p-[15px]'>
                    <div className="logo ">
                        <div className="font-semibold text-xl">iTask-Manager your todos at one place</div>
                    </div>
                </nav>
                <div className="head grid gap-2">
                    <div className='font-bold m-2 text-slate-700 text-[20px] mx-[18px]'>Add a Todo</div>
                    <div className="add m-auto flex gap-3">
                        <input type="text" placeholder='Add Todo' onChange={handelchange} value={todo} className=' input1 rounded-lg p-[5px] w-[43vw]' />
                        <button type="submit" onClick={handelsubmit} disabled = {todo.length <= 3} className='p-[5px] bg-slate-700 rounded-lg text-white'>submit</button>
                    </div>
                    <div className="show flex gap-3 my-3 mx-5">
                        <input type="checkbox" onChange={toggle} checked = {showfinished} /> Show Finished

                    </div>
                </div>
                <div className="underline w-[90%] h-[2px] bg-slate-700 m-auto" ></div>
                <div className='font-bold m-2 text-slate-700 text-[20px] mx-[18px]'>Your Todos</div>

                <div className="box1 w-full max-h-[35vh] h-[35vh] overflow-y-auto">
                    {todos.length === 0 && <div className='px-[20px]'>No todos to display </div>}
                    {todos.map(item => {
                        return (showfinished || !item.isCompleted) && <div key={item.id} className="show flex  ">
                            <div className="show flex gap-3 my-3 mx-5"> <input type="checkbox" name={item.id} onChange={handelchackbox} value={item.isCompleted} />
                                <div className='w-[38vw]'>
                                    <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

                                </div>
                            </div>
                            <div className="show flex gap-3 my-3 mx-5">
                                <button type='submit' onClick={(e) => {handeladd(e, item.id)}} className='bg-slate-700 p-[3px] rounded-lg'><img src="svg/add.svg" className="" alt="" width={20} /></button>
                                <button type='submit' onClick={(e) => { handeldelet(e, item.id)}} className='bg-slate-700 p-[3px] rounded-lg'><img src="svg/delet.svg" className="" alt="" width={20} /></button>
                            </div>
                        </div>
                    })}
                </div>


            </header>
        </>


    )
}

export default main
