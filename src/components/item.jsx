function Item({todos, todo, updateToDo, index}){

    function updateText(e){
        let elements = [...todos];
        elements[index].text = e.target.value
        updateToDo(elements)
    }

    return(
        <>
            <li key={index}><input type="text" value={todo.text} onChange={updateText} /></li>
        </>
    )
    
}

export default Item