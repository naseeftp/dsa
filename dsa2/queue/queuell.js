class Node{
constructor(value)
{
    this.value=value;
    this.next=null;
}
}

class Queue{
    constructor()
    {
        this.front=null
        this.rear=null;
        this.count=0
    }
    isEmpty()
    {
        return this.count==0;
    }
       enqueue(value)
    {
        const newNode=new Node(value)
        if(this.isEmpty())
        {
            this.front=newNode;
            this.rear=newNode;
        }
        else
        {
            this.rear.next=newNode;
            this.rear=newNode
        }
        this.count++
    }
    size()
    {
        return this.count;
    }
    
    dequeue()
    {
        if(this.isEmpty())
        {
            console.log('stack underflow')
        }
        this.front=this.front.next;
        this.count--;
        if(this.isEmpty())
        {
            this.rear=null;
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            return null
        }
        return this.front.value;
    }
   print()
   {
       if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }
        let output = "Queue: ";
        let current = this.front;
        while (current) {
            output += current.value + (current.next ? " -> " : "");
            current = current.next;
        }
        console.log(output);
    }
   
    
}


const q=new Queue()
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print()
q.dequeue()
q.print()
console.log(q.size())
console.log(q.peek())




















     

