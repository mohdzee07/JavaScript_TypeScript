function rev(name)
{
     let rename =""

    for(let i=name.length-1; i>=0 ;i--)
    {
        rename = rename +name[i]
    }
    return rename

}
console.log(rev("zeeeshan"))
