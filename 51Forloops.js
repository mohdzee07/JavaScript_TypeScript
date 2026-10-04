//for of loops

const arr = [1, 2, 3, 4, 5];


for(let e of arr)
{
    console.log(e);
}

const users = 
{
    name: "zeeshan",
    age : 20,
    city : "karachi"
};

users.name = 'afshan'
for (let key in users)
{
    console.log(users[key]);
}