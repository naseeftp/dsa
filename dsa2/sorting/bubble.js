function BubbleSort(array)
{
 let n=array.length
 for(i=0;i<n-1;i++)
 {
     for(j=0;j<n-1;j++)
     {
       if(array[j]>array[j+1])  
       {
           [array[j],array[j+1]]=[array[j+1],array[j]]
       }
     }
     
 }
 return array
}

console.log(BubbleSort([5,6,1,3]))
