function mergeSort(array)
{
      
    if(array.length<=1) return array
    let mid=Math.floor(array.length/2)
    let left=array.slice(0,mid)
    let right=array.slice(mid)
    left=mergeSort(left)
    right=mergeSort(right)
    return merge(left,right)
    
}

function merge(left,right)
{
    let result=[];
    let i=0;j=0;
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
function mergeSortString(string)
{
   return  mergeSort(string.split('')).join('') 
}
console.log(mergeSortString('naseef'))




{


    function reversingusingmerge(string)
    {
        if(string.length<=1) return string
        let mid=Math.floor(string.length/2)
        let left=reversingusingmerge(string.slice(0,mid))
          let right=reversingusingmerge(string.slice(mid))
          return merge(left,right)
    }
    
    function merge(left,right)
    {
        return right+left
    }
    
    
    console.log(reversingusingmerge('naseef'))











}