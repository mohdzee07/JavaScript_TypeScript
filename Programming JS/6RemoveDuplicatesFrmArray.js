function removerduplictes(arr)
{
    for (let i=0; i<arr.length ; i++)
    {
        for( let j= i+1; j<arr.length ; j++)
        {
            if(arr[i] === arr[j])
            {
                arr.splice(j,1);//remove the duplicate at index j
                j--;//// step back because the elements shifted
            }
        }
    }

    return arr;
}

console.log(removerduplictes([10,20,30,20,30]))