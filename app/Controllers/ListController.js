import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ``
    let lists = _listService.List
    lists.forEach((list, index) => {
        template += list.getTemplate(index)
    })
    document.querySelector('#todoList').innerHTML = template
}

//FIXME  Color Picker 
// function colorPicker() {
//     let colorID = document.getElementById('#colorID').value;
//     document.getElementById('put').value = colorID
//     document.getElementById("list-bg").style.backgroundColor = colorID;
// }

//take 2
// function colorPicker(event) {
//     document.getElementById('div').forEach(function ('div') {
//         div.style.color = event.target.value;
//     });
// }


//Public
export default class ListController {
    constructor() {
        console.log('Controller Checking-in')
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }
    //TODO: Your app will need the ability to create, and delete both lists and listItems
    addList(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.name.value //FIXME Potiental Problem
        }
        _listService.addList(newList)
        _drawLists()
    }
    addtoDo(event, listIndex) {
        event.preventDefault()
        let form = event.target
        let newtoDo = form.toDo.value
        _listService.addtoDo(newtoDo, listIndex)
        _drawLists()
    }
    deleteList(index) {
        _listService.deleteList(index, _drawLists)
        _drawLists()
    }
    deletetoDo(listIndex, toDoIndex) {
        _listService.deletetoDo(listIndex, toDoIndex, _drawLists)
        _drawLists()
    }
}