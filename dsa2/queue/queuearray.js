class Queue{
    constructor(size)
    {
        this.array=new Array(size);
        this.capacity=size;
        this.front=0;
        this.rear=-1
        this.count=0;
    }
    isFull()
    {
        return this.count==this.capacity
    }
    isEmpty()
    {
        return this.count==0
    }
    enqueue(value)
    {
        if(this.isFull())
        {
            console.log('queue overflow')
            return 
        }
        this.rear++;
        this.array[this.rear]=value;
        this.count++
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            console.log('queue underflow')
            return null
        }
        const value=this.array[this.front];
        this.front++;
        this.count--;
        return value
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log('no elements')
        }
        return this.array[this.front]
    }
    size(){
        return this.count;
    }
    
    print()
    {
        let output = "Queue: ";
        for (let i = this.front; i <= this.rear; i++) {
            output += this.array[i] + (i < this.rear ? " -> " : "");
        }
        console.log(output);
    }
}

const q=new Queue()
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.enqueue(9)
q.print()




