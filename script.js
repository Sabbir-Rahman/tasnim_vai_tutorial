function make_user(name, age) {

    return {
        name: name,
        age: age,
    };
}


let user = new Object();
console.log(user)

let user1 = {
    name: "Sakib",
    age: 30
};

user1.address = "Kushtia"
user1['Uni'] = "IUT"

//for multi word property name double string is needed and can not use dot notation
//reserve keyword like for can be used as property name

user1.for_delete = "Delete this"

user1["is admin"] = false

let variable = "value"

user1[variable] = 5;

delete user1.for_delete;

console.log(user1)
console.log(user1.name)
console.log(user1['name'])
console.log(user1['is admin'])

let user3 = make_user("Sakib",30)

console.log(user3)

for (let key in user1){
    console.log(key);
    console.log(user1[key]);
}