// TODO 1 : Primitive Types : number, string, boolean

const myNumber = 10;
let myBoolean: boolean;
myBoolean = true;
let myString = `
kdf
dfkdkf
dfkdlfd

dfkldfkldf
df
${myNumber}
kldsfkjkdf
dfkdfd
kdfldf
`;

// console.log(myString);
// TODO 2 : Any Type

let maVariable;
maVariable = 'Hello';
maVariable = 78;

function myFunction(): any {
    return {
        name: 'Hello'
    }
}


// TODO 3 : Void and Never Types 
function myFunction2(): void {
    console.log('Bonjour');
    // throw new Error('Hello');

}


// myFunction2()

// TODO 4 : Null, undefined, Strict null ckeck 

let maVariable2: string | null ;

maVariable2 = null;

// TODO 5 : Union and literal types 

const userData = {
    firstName: 'Jean',
    lastName: 'Dupond',
    account_type: 'ADMIN'
}


function setUserType(type: '>=' | '>' | '<=') {
    userData.account_type = type
}

setUserType('>=');
// console.log(userData)

// TODO 6 : Functions Type


const userData2 = {
    firstName: 'Jean',
    lastName: 'Dupond',
    account_type: 'ADMIN',
    userCallback() {
        console.log('HELLO FROM CALLBACK');
    }
}

let somme: (a: number, b: number) => number;
let multiplication: (a: number, b: number) => number;

somme = (a, b) => a + b
multiplication = (a, b) => a * b


// console.log('RESULTAT ', somme(2,4), multiplication(2,4))


// TODO 7 : Object types 

let userData3: {
    firstName: string,
    lastName: string,
    account_type: string,
    userCallback: () => void
};

userData3 = {
    firstName: 'Jean',
    lastName: 'Dupond',
    account_type: 'ADMIN',
    userCallback: () => {
        console.log('HELLO FROM CALLBACK');
    }
}

// console.log(userData3);

// TODO 8 : Array types and generics

let myAwsomeTable: Array<string>;
let myAwsomeTable2: string[];
myAwsomeTable = ['', 'dfd']

// TODO 9 : Tuple Types 

let myAwsomeTable3: [string, number, string, boolean];
myAwsomeTable3 = ['hello', 2, 'coucou', false];

console.log(myAwsomeTable3);

// TODO 10 : Type Aliases and Assertion 

// Aliases
type Operator = '>=' | '>' | '<=' | '<';

let myOperator: Operator; 

function setOperator(param : Operator){

}
setOperator('>=')

// Assertion

type User = {
    firstName: string,
    lastName: string,
    account_type: string,
    userCallback: () => void
};
const userData4 : User= {
    firstName: 'Jean',
    lastName: 'Dupond',
    account_type: 'ADMIN',
    userCallback: () => {
        console.log('HELLO FROM CALLBACK');
    }
}


const myRawData = JSON.stringify(userData4); 

const myReceivedUser = (JSON.parse(myRawData) as User);
const myReceivedUser2 = <User>JSON.parse(myRawData);

// console.log(myReceivedUser2)
// console.log(myReceivedUser)
