// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     getParentIndex(i) { return Math.floor((i - 1) / 2); }
//     getLeftChildIndex(i) { return 2 * i + 1; }
//     getRightChildIndex(i) { return 2 * i + 2; }
  
  
//     swap(i, j) {
//       [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }
  
  
//     insert(value) {
//       this.heap.push(value);
//       this.heapifyUp();
//     }
  
  
//     heapifyUp() {
//       let index = this.heap.length - 1;
//       while (
//         index > 0 &&
//         this.heap[this.getParentIndex(index)] > this.heap[index]
//       ) {
//         this.swap(index, this.getParentIndex(index));
//         index = this.getParentIndex(index);
//       }
//     }
  
  
//     extractMin() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();
  
//       const root = this.heap[0];
//       this.heap[0] = this.heap.pop(); 
//       this.heapifyDown();
//       return root;
//     }
  

//   heapifyDown() {
//     let index = 0;
  
//     while (true) {
//       let left = this.getLeftChildIndex(index);
//       let right = this.getRightChildIndex(index);
//       let smallest = index;
  
     
//       if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
//         smallest = left;
//       }
  
   
//       if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
//         smallest = right;
//       }
  
  
//       if (smallest === index) break;
  
   
//       this.swap(index, smallest);
//       index = smallest;
//     }
//   }
  
  
//     peek() {
//       return this.heap[0] || null;
//     }
//   }
  
  
//   const minHeap = new MinHeap();
//   minHeap.insert(10);
//   minHeap.insert(5);
//   minHeap.insert(20);
//   minHeap.insert(1);
  
//   console.log("Heap array:", minHeap.heap);
//   console.log("Extract Min:", minHeap.extractMin());
//   console.log("Heap after extract:", minHeap.heap);










function swap(heap,i,j)
{
    [heap[i],heap[j]]=[heap[j],heap[i]]
}

function heapify(heap,index,size)
{
    let left=2*index+1;
    let right=2*index+2
    let small=index;
    if(left<size&&heap[left]<heap[small])
    {
        small=left;
    }
    if(right<size&&heap[right]<heap[small])
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
    for( let i=Math.floor(array.length/2);i>=0;i--)
    {
        heapify(array,i,array.length)
    }
    return array
}
function insert(heap,value)
{
    heap.push(value);
    let index=heap.length-1;
    while(index>0)
    {
        let parent=Math.floor((index-1)/2);
        if(heap[parent]<=heap[index])
        {
            break;
        }
        else
        {
            swap(heap,parent,index)
             index=parent;
        }
    }
    return heap
}

let array = [5, 3, 8, 4, 1, 2]
console.log('min heap :',Minheap(array))
console.log('after inserting :',insert(array,7))

