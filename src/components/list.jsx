import { useState } from 'react'

import Item from './item.jsx'
import New from './new.jsx'

function List() {
    const [todos, setToDo] = useState([{'text':"First one"}, {'text':"Second One"}])
    return(
        <>
        <ul>
            {todos.map((todo, index) =>{

                return(
                    <>
                    <Item todos={todos} todo={todo} updateToDo={setToDo} index={index}/>
                    </>
                )
            })}
        </ul>
        <New todos={todos} addNew={setToDo} />
        </>
    )
}

export default List