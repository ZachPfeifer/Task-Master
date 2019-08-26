import List from "../Models/List.js";

//Private
let _state = {
    lists: [new List({
        name: "Cleaning List",
        toDo: [],
    })]
}




//Public
export default class ListService {
    deletetoDo(listIndex, toDoIndex) {
        if (window.confirm('Are you Sure you want to delete?')) {
            _state.lists[listIndex].toDo.splice(toDoIndex, 1)
        }
        //Old Saved
        this.saveLists()
    }
    deleteList(index) {
        if (window.confirm('Are you Sure you want to delete?')) {
            _state.lists.splice(index, 1)
        }
        //Old Saved
        this.saveLists()
    }

    addtoDo(newtoDo, listIndex) {
        _state.lists[listIndex].toDo.push(newtoDo)
        //FIXME need reload draw
        this.saveLists()

    }
    addList(newList) {
        _state.lists.push(new List(newList))
        //Old saved
        this.saveLists()
    }

    get List() {
        return _state.lists.map(list => new List(list))
    }


    constructor() {
        console.log('Service Checking-in');
        // this.List = undefined;
    }

    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?




    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
