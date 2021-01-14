// TODO 1 : Creating interfaces
// TODO 2 : Extending interfaces 

interface User extends Token {
    firstName: string;
    lastName: string;
    callBack(): void;
}
interface Token {
    tokenData: string;
}

function createUser(): User {
    return {
        tokenData: 'My-data',
        firstName: 'Hello',
        lastName: 'Hello',
        callBack() {
        }
    }
}

let myUser: User = createUser();
// console.log(myUser);

// TODO 3 : Classes and constructors
// TODO 4 : Public and private and readonly members 
// TODO 5 : Setters and getters
// TODO 6 : Inheritance and abstract classes 

abstract class GenericService {
    constructor(public baseUrl: string){}

    public loadHost(){

    }
}

class UserService extends GenericService {
    
    attribute : string 
    constructor(
        baseUrl : string,
        readonly userNetworkDataSource: string,
        private users: User[]
    ) {
        super(baseUrl);
        this.attribute = '';
    }

    get usersList(){
        console.log('get usersList')
        return this.users;
    }
    
    set usersList(val: User[]){
        console.log('set usersList')
        this.users = val;
    }


    public fetchUsers(): User[] {
        return [{
            tokenData: 'My-data',
            firstName: 'Hello',
            lastName: 'Hello',
            callBack() {
            }
        }];
    }
}

const monService: UserService = new UserService('http://192.168.1.1', 'Ma variable', []);

// const baseService : GenericService = new GenericService('http://192.168.1.1');

monService.usersList = [];
const result = monService.usersList;

console.log(monService.baseUrl);








