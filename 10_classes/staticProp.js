class User{

    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is : ${this.username}`);
    }
   
    /* static keyword restrict the use of the function*/
    static createId(){
        return `123`;
    }
}

const akash = new User('akash');
akash.logMe();
// console.log(akash.createId()); /*if we are not using static prop then it will return 123 otherwise this createId function is not accessible */

class Teacher extends User{

    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const hitesh = new Teacher('hitesh','hitesh@google.com');
hitesh.logMe();
console.log(hitesh.createId()); /* not accessible because of static keyword in parent class*/