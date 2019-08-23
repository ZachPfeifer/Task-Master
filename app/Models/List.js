export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log('Model Checking-in')
        this.title = data.title || "Get to you Work"
        this.toDo = data.toDo || "Get to Work Succka"
    }
    getTemplate(index) {
        let template = `
            <div class="col-4">
            <h1>${this.title}</h1>
            <h3><b>Things to Do:</b></3>
            <h3>${this.toDo}</h3>
            `
        return template
    }
    getToDoTemplate(listIndex) {
        let toDoTemplate = ""
        this.toDo.forEach((td, toDoIndex) => {
            toDoTemplate += `<li>${td}<span onclick="app.controllers.pizzaController.deleteTopping(${listIndex}, ${toDoIndex})">X</span></li>`
        });
        return toDoTemplate
    }
}