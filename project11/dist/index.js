"use strict";
//never type
function sum(a, b) {
}
function raiseError(message) {
    throw new Error(message);
    //it stops and will not execute this bellow so it never expect to return something because execution broken with error thrown
    console.log(message);
}
