function New({todos, addNew}){

    function addNewToDo(){
        let elements = [...todos];
        const updated = [...elements, {"text":""}];
        addNew(updated)
    }

    return(
        <>
            <a href="#" onClick={addNewToDo}>Add New</a>
        </>
    )
}

export default New