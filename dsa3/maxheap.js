function swap(heap,i,j)
{
    [heap[i],heap[j]]=[heap[j],heap[i]]
}

function heapify(heap,index,size)
{
    let left=2*index+1;
    let right=2*index+2
    let small=index;
    if(left<size&&heap[left]>heap[small])
    {
        small=left;
    }
    if(right<size&&heap[right]>heap[small])
    {
        small=right;
    }
    if(small!=index)
    {
        swap(heap,index,small)
        heapify(heap,small,size)
    }
}

function Minheap(array)
{
    for(i=Math.floor(array.length/2);i>=0;i--)
    {
        heapify(array,i,array.length)
    }
    return array
}

let array = [5, 3, 8, 4, 1, 2]
console.log('min heap :',Minheap(array))