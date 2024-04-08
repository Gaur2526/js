class User{

    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

/* extends keyword is used for inheritance teacher will inherit the property of user*/
class Teacher extends User {
 
    constructor(username,email,password){
        /* super is used to inherit constructor properties*/
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher('chai','chai@google.com','123');
chai.addCourse();
chai.logMe();

const masalaChai = new User('masalaChai');
masalaChai.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);