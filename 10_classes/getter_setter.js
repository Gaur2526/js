/*
getter -: getter is used to get the properties
setter -: setter is used to set the properties

you have to use both getter and setter, only one cannot be declared without other
*/
class User{

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    /* constructor properties automatically converted as a method for get and set */
    
    /* by default you have to use the name of the properties in getter and setter methods */
    get password(){
        // return this.password.toUpperCase();
        return `${this._password}akash`;
    }

    /* NOTE : _ means that now the property is an private field which cannot be accessed outside a new proposol is introduced in es2022 where we are using # to define a private property in future */
    /*if we console using this.password = value, so it will provide an maximum call stack size exceed because both the constructor and setter will set the same property password so both constructor and setter get's confused and their is an race between constructor and setter */

    /* the solution to the maximum call stack size exceed is that if we declare a completely new variable/property then it will not show the error so we will include an _ */

    /* NOTE : behind the scene now constructor will set only email because we have overwrite the password property by defining getter and setter */
    set password(value){
        // this.password = value.toUpperCase();
        this._password = value;
    }

    get email(){

        return this._email.toUpperCase();
    }

     set email(value){
        this._email = value;
     }
}

const akash = new User('akash@google.com','abc');

console.log(akash.password);
console.log(akash.email);

/* setter */
akash.email='akash@microsoft.com';
akash.password='def';

console.log(akash.password);
console.log(akash.email);
