function insertionsort(array)
{
    for(i=1;i<array.length;i++)
    {
        let j=i-1;
        let key=array[i];
        while(j>=0&&array[j]>key)
        {
            array[j+1]=array[j]
            j--;
        }
        array[j+1]=key
    }
    return array
}

console.log(insertionsort([5, 2, 9, 1]));  
