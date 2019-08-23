export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log('Model Checking-in')
        this.title = data.title
        this.toDo = data.toDo
    }
    getTemplate(index) {
        let template = `
            <div class="col-4">
            <h1>${this.title}</h1>
            <h3>${this.toDo}</h3>
            <ul>
            `
        return template
    }
}