function quicksort(array)
{
    if(array.length<=1) return array;
    let pivot=array[array.length-1];
    let left=[];
    let right=[];
    for(i=0;i<array.length-1;i++)
    {
        if(array[i]<pivot) left.push(array[i])
        else right.push(array[i])
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

console.log(quicksort([5, 2, 9, 1]));