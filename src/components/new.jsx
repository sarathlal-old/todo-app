function New({todos, addNew}){

    function addNewToDo(){
        let elements = [...todos];
        const updated = [...elements, {"text":""}];
        addNew(updated)
    }

    return(
        <> 
        <p>
            <span onClick={addNewToDo}>Add New</span>
        </p>
        </>
    )
}

export default New