function removeDuplicates(string)
{
    let hashtable={};
    let result='';
    for(let char of string)
    {
        if(!hashtable[char])
        {
            hashtable[char]=true;
            result+=char
        }
    }
    return result;
}

console.log(removeDuplicates('programming'))