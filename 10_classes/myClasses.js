/* new keyword call automatically the constructor */

class User{

      constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
      }

      encryptPassword(){
        return `${this.password}abc`;
      }

      changeusername(){

        return `${this.username.toUpperCase()}`;
      }

}

const chai = new User('chai','chai@google.com','123');
console.log(chai.encryptPassword());
console.log(chai.changeusername());

/*Behind the scene*/

