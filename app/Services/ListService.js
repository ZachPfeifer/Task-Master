import List from "../models/List.js";

//Private
let _state = {
    lists: [new List({
        title: "Cleaning List",
        toDo: ["Clean Bathroom", "Clean Garage", "Clean Bedroom"],
    })]
}


//Public
export default class ListService {

    addtoDo(newtoDo, listIndex) {
        _state.lists[listIndex].toDo.push(newtoDo)
        //FIXME need reload draw
        this.getLists()

    }
    addList(newList) {
        _state.lists.push(new List(newList))
        //Old saved
        this.getLists()
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
