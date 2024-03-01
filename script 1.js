// Compate tow json properties
let obj1 = { name: "Person 1", age:5 };
let obj2 = { age:5, name: "Person 1" };

let Val = true;


if(Object.keys(obj1).length===Object.keys(obj2).length)
{
    for(key in obj1)
    {
        if(obj1[key]===obj2[key])
        {
            continue;
        }
        else
        {
            flag = false;
            break;
        }
    }
}
else
{
    falg = false;
}
console.log(Val + " It has the same properties");



//Display all countries flags


let api = new XMLHttpRequest();
console.log(api);
api.open("GET","https://restcountries.com/v3.1/all");
api.send();
api.onload = function()
{
    const data = JSON.parse(api.response);
    console.log(data);
    for(let i = 0; i<data.length;i++)
    {
        console.log(data[i].flags);
    }
};


// print country,name,region,sub-region and population

let api = new XMLHttpRequest();
console.log(api);
api.open("GET","https://restcountries.com/v3.1/all");
api.send();
api.onload = function()
{
    const data = JSON.parse(api.response);
    console.log(data);
    for(let i = 0; i<data.length;i++)
    {
        console.log(data[i].country);
        console.log(data[i].name);
        console.log(data[i].region);
        console.log(data[i].sub-region);
        console.log(data[i].population);
    }
};








