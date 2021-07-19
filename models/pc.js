let storage = require("../helpers/db")
let HDDarray = storage.HDD;
let CPUarray = storage.CPU;
let RAMarray = storage.RAM;
let kbrdArray = storage.Keyboard;
let mouseArray = storage.Mouse;
module.exports = class PC {
    save() {
        HDDarray;
    }
    save(){
        CPUarray;
    }
    save(){
        RAMarray;
    }
    save(){
        kbrdArray;
    }
    save(){
        mouseArray;
    }
}