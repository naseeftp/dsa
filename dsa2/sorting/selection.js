function SelectionSort(array)
{
    let n=array.length;
    for(i=0;i<n-1;i++)
    {
        let min=i
        for(j=i+1;j<n;j++)
        {
            if(array[j]<array[min])
            {
                min=j
            }
        }
        [array[i],array[min]]=[array[min],array[i]]
    }
    return array
    
}
console.log(SelectionSort([64,25,12,22,11]))