const fetcuserinfo = async()=>
{

    try{
    const reposne = await fetch("https://reqres.in/api/users?page=2")

    if(!Response.ok)
    {
       console.error("error message");
        
    }

    const data = await reposne.json()
    console.log(data)
}
catch(error)
{
    console.log(error)
}
}

fetcuserinfo();