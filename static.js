class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    static compareByAge(user1 , user2){
        return user1.age - user2.age;

    }
}

const user1 = new User('Amita' ,28);
const user2 = new User('Anita' , 30);
const user3 = new User('Amrita' , 32);

const users = [user1,user2,user3];
// users.sort((a,b) => a.age ,b.age);/
users.sort(User.compareByAge)

console.log(users);