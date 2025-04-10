// let obj = {
//   a: 1,
//   b:"pradip"

// }

// console.log(obj);


// let animal = {
//     eats:true
    
  
//   };

//   let rabbit = {
//     jumps:true
  
//   };

//   rabbit.__proto__ = animal;

// class animal{
// constructor(name){
//     this.name = name;
//     console.log("object is created...")
// }
// eats(){
//     console.log("kha raha hoon");
// }
// jumps(){
//     console.log("kood raha hoon");
// }

// }



// class lion extends animal{

//     constructor(name){
//        super(name)
//         console.log("object is created... he is a lion")
//     }

//     eats(){
//         super.eats();
//         console.log("kha raha hoon main");
//     }
// }

// let a = new animal("bunny");
// console.log(a);

// let l = new lion("shera");
// console.log(l);

class User{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("name is to short");
            return;
        }
        this._name = value;
    }
}

let user = new User("john");
console.log(user.name);

 user.name = "pradip"
 console.log(user);

 //instanceof operator