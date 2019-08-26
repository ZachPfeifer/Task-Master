export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log('Model Checking-in')
        this.name = data.name || "Get to Work"
        this.toDo = data.toDo || []
    }
    getTemplate(index) {
        let template = `
            <div class="col-4 list-bg">
            <h1>${this.name}</h1>
            <hr>
                <h3><b>Things to Do:</b></3>
             <ul>`
        template += this.getToDoTemplate(index)
        template += `
         </ul>
                <form onsubmit="app.controllers.listController.addtoDo(event, ${index})">
                    <div class="form-group">
                        <label for="name">To Do:</label>
                        <input type="text" class="form-control" name="toDo" placeholder="Enter Things to do here">
                </div>
                        <div class="col">
                            <button class="btn btn-dark" type="submit">Add</button>
              </form>
                        <button class="btn btn-dark" type="button" onclick="app.controllers.listController.deleteList(${index})">Remove</button>
                    </div>
        </div>
                `
        return template
    }
    getToDoTemplate(listIndex) {
        let toDoTemplate = ""
        this.toDo.forEach((td, toDoIndex) => {
            toDoTemplate += `<h4><input type="checkbox" name="crossOFF" class="strikethrough largerCheckbox" value="1"><span> ${td} </span><span class="redx" onclick="app.controllers.listController.deletetoDo(${listIndex}, 
                ${toDoIndex})"> X </span></h4>`
        });
        return toDoTemplate
    }
}