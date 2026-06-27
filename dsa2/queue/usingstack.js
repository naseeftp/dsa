class Queue{
    constructor()
    {
        this.stack1=[];
        this.stack2=[];
    }
    enqueue(value)
    {
        this.stack1.push(value)
    }
    dequeue()
    {
        if(this.stack1.length==0&&this.stack2.length==0)
        {
            console.log('queue is empty')
        }
        if(this.stack2.length==0)
        {
            while(this.stack1.length>0)
            {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    
    peek()
    {
        if(this.stack1.length==0&&this.stack2.length==0)
        {
            console.log('queue is empty')
        }
        if(this.stack2.length==0)
        {
            while(this.stack1.length>0)
            {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

  
    size() {
        return this.stack1.length + this.stack2.length;
    }

     print(){
        const queue=[
             ...this.stack2.slice().reverse(),
             ...this.stack1
            ]
            console.log(queue.join('->'))
    }
    

}



const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());   // Output: 2
console.log(queue.size());   // Output: 2
console.log(queue.isEmpty())
