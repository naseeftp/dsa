function mergeSort(array)
{
    if(array.length<=1)
    {
        return array;
    }
    let mid=Math.floor(array.length/2);
    let left=array.slice(0,mid)
    let right=array.slice(mid)
    left=mergeSort(left)
    right=mergeSort(right)
    return merge(left,right)
}

function merge(left,right)
{
    let result=[];
    let i=0,j=0;
    while(i<left.length&&j<right.length)
    {
        if(left[i]<right[j])
        {
            result.push(left[i])
            i++
        }
        else
        {
          result.push(right[j])  
          j++
        }
        
        
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}


console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));