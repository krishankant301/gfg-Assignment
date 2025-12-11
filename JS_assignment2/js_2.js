
let student = ["Krishan", "Avinash","Vikas","Pratyush","Nishant"];

function display (name){
    console.log("Names off students are: ");
    for(let i =0; i<name.length; i++){
        console.log(name[i]);
    }
}

function search(name){
    for(let i=0; i<student.length; i++){
        if(name === student[i]){
            console.log(`${name} is at number ${i+1} position in the list.`);
            return;
        }
    }
}
display(student);
search("Avinash");