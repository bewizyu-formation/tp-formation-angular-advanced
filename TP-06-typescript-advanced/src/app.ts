
 

const obj = {
    displayName(){
        console.log('Object => ', this);
    }
}

class User {
    displayName(){
        console.log(this);
    }
}

function displayName(arg1 : string, arg2 : string){
    console.log('Function => ', this);
}



