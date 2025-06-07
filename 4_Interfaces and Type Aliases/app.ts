interface User{
    name:string,
    email:string,
    password:string
}

interface Admin extends User{
    admin:boolean
}

function getDataOfUser(obj:User):void{
console.log(obj.name+" "+obj.email+" "+obj.password);
}

function abcd(obj:Admin):void{
    
}
getDataOfUser({name:"rahul",email:"email@gmail.com",password:"asdsf"})



