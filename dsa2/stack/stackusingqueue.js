class Queue{
    constructor()
    {
        this.items=[]
    }
    isEmpty()
    {
        return this.items.length==0
    }
    enqueue(value)
    {
        this.items.push(value)
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            conole.log('queue is empty')
            return
        }
        return this.items.shift()
    }
    peek()
    {
        if(this.isEmpty())
        {
            conole.log('queue is empty')
            return
        } 
        return this.items[0]
    }
    print()
    {
        console.log(this.items.join('-->'))
    }
}


class Stack{
    constructor()
    {
        this.queue1=new Queue()
        this.queue2=new Queue()
    }
    push(value)
    {
        this.queue2.enqueue(value)
        while(!this.queue1.isEmpty())
        {
            this.queue2.enqueue(this.queue1.dequeue())
        }
        [this.queue1,this.queue2]=[this.queue2,this.queue1]
    }
    isEmpty()
    {
        return this.queue1.items.length==0
    }
    pop()
    {
        if(this.queue1.isEmpty())
        {
            return 
        }
        return this.queue1.dequeue()
    }
    print()
    {
        console.log(this.queue1.items.join('-->'))
    }
    
}

const stack = new Stack();
stack.print(); 

stack.push(1);
stack.print(); 

stack.push(2);
stack.print(); 

stack.push(3);
stack.print();

console.log(stack.pop()); 
stack.print(); 


stack.print(); 

console.log(stack.pop());
stack.print(); 

console.log(stack.isEmpty()); 
console.log(stack.pop()); 
stack.print(); 

console.log(stack.isEmpty())


