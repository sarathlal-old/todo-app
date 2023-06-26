function Item({todos, todo, updateToDo, index}){

    function updateText(e){
        let elements = [...todos];
        elements[index].text = e.target.value
        updateToDo(elements)
    }

    function remove(){
        let elements = [...todos];
        elements.splice(index, 1);
        updateToDo(elements)
    }

    return(
        <>
            <li key={index}>
                <input type="text" value={todo.text} onChange={updateText} />
                <span onClick={remove}>Delete</span>
            </li>
        </>
    )

}

export default Item