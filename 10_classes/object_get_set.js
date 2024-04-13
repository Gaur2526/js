/* object based syntax of getter and setter which is rarely used */

const User = {

    _email : 'akash@google.com',
    _password : 'hey',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }

}

const akash = Object.create(User);

console.log(akash.email);

