/* old version of using getter and setter when classes are not introduced to js */

function User(email,password){

    this._email = email;
    this._password = password;

    /* The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
    
    syntax : Object.defineProperty(obj, prop, descriptor)

    obj : The object on which to define the property
    prop: property which we want to modify
    descriptor : updating the properties
    
    */
    Object.defineProperty(this,'email',{

        get: function(){
            return this._email.toUpperCase();
        },

        set: function(value){
           this._email = value
        }
    })

    Object.defineProperty(this,'password',{

        get:function(){

            return this._password.toUpperCase();
        },

        set:function(value){
            this._password = value;
        }
    })
}

const akash = new User('akash@google.com','abc');

console.log(akash);
console.log(akash.email);