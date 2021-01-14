// TODO 1 : Arrow Functions

const newArray = [1, 2, 3, 4, 5, 6].map(function (value) {
    return value + 10;
});

const obj = {
    name: 'Jean',
    callback: function () {
        setTimeout(function () {
            console.log(this);
        }, 1000)
    }
}
const obj2 = {
    name: 'Dupond',
    callback: () => {
        setTimeout(() => {
            console.log(this);
        }, 1000)
    }
}
// obj.callback();
// obj2.callback();

// TODO 2 : Default parameters

function addFriend(id: string, email: string = 'email@gmail.com') {
    console.log('Friend added : ', id, email)
}

// addFriend('2433', 'Hello');

// TODO 3 : Object literal mapping

const person = {
    children: ['', ''],
    token: {
        id: 'djfjdfd'
    }
}

const children = ['child_1', 'child_2'];
const tokenCode = {
    id: 'djfjdfd'
};

const person2 = {
    children, tokenCode
}

// console.log(person)
// console.log(person2)

// TODO 4 : Rest parameters (Indefinit number of parameters)

function myCustomLog(age: number, ...args: string[]) {
    console.log(arguments)

    args.forEach(elem => {
        console.log('CUSTOM LOG : ' + new Date(), elem);
    })
}

function displayUser(name: string, lastName: string, age: number) {
    console.log(arguments)
    console.log(name, lastName);
}

// myCustomLog(30 , 'HELLO', 'WORLD');

// TODO 5 : Array Spread operator

const monTableau = [1, 2, 3, 4, 5];
const mySecondTab = [7, 8, 9];

const mergedTab2 = [...monTableau, ...mySecondTab];

//console.log(mergedTab2)

// TODO 6 : Object spread operator
const order = {
    orderId: 232,
    orderName: 'Hello'
}

const user = {
    firstName: 'Jean',
    lastName: 'Dupond',
    orderName: 'Hello 2'
}

const tags = ['tag1', 'tag2'];

const mergedObj = {
    ...order, ...user, tags
}
// Ca fait une copie et ne garde pas la ref sur l'objet initial
// console.log(mergedObj);


// TODO 7 : Destructing Arrays and Objects 

const userProfil = {
    image: 'URL DE L\'IMAGE',
    full_name: 'Jean Dupond'
}

function getUserProfile() {
    return userProfil;
}

const { full_name } = getUserProfile();
// console.log(full_name)


const userTable = [
    {
        image: 'URL DE L\'IMAGE',
        full_name: 'user 1'
    }, {
        image: 'URL DE L\'IMAGE',
        full_name: 'user 2'
    }, {
        image: 'URL DE L\'IMAGE',
        full_name: 'user 3'
    }
]

const [firstUser, secondUser] = userTable;
console.log(firstUser.full_name)
console.log(secondUser.full_name)




