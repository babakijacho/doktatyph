function toDoListFunction(){

    // retrieve a message from a text field
    const txtInputMsg = document.getElementById("txtInputMsg").value
    console.log(txtInputMsg)
    
    // create the html element
    const element = document.createElement("div")
    element.classList.add("todoItem")
    
    element.textContent = txtInputMsg

    // Now append list of message into the div element
    document.getElementById("todo-list").appendChild(element)

    
}