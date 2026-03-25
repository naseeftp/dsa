function swap(heap,i,j)
{
    [heap[i],heap[j]]=[heap[j],heap[i]]
}

function heapify(heap,index,size)
{
    let left=2*index+1;
    let right=2*index+2;
    let small=index;
    if(left<size&&heap[left]<heap[small])
    {
        small=left
    }
    if(right<size&&heap[right]<heap[small])
    {
        small=right
    }
    if(small!=index)
    {
        swap(heap,index,small);
        heapify(heap,small,size)
    }
}

function MinHeap(array)
{
    for(let i=Math.floor((array.length)/2);i>=0;i--)
    {
        heapify(array,i,array.length)
    }
    return array
}
function insert(heap,value)
{
    MinHeap(heap)
    heap.push(value);
    let index=heap.length-1;
    while(index>0)
    {
        let parent=Math.floor((index-1)/2)
        if(heap[parent]<=heap[index])
        {
            break;
        }
        else
        {
            swap(heap,index,parent)
            index=parent
        }
    }
    return heap;
}
function heapsort(array)
{
    MinHeap(array)
    for(i=array.length-1;i>0;i--)
    {
        swap(array,0,i)
        heapify(array,0,i)
    }
    return array
}

let array = [5, 3, 8, 4, 1, 2]

 console.log('after inserting :',insert(array,7))
let array2=[4,7,1,9,5]
console.log('MinHeap :',MinHeap(array))
console.log('array after heapsort :',heapsort(array2))

