export let message = "ES6 modules";

export function user(name){
    console.log(`Hello ${name}`);
}

export class test{
    constructor(){
        console.log("I am using module constructor calling");
    }
}