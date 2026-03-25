class circlularqueue
{
    constructor(capacity)
    {
        this.items=new Array(capacity);
        this.capacity=capacity;
        this.currentlength=0;
        this.front=-1;
        this.rear=-1;
    }
   isFull()
   {
       return this.currentlength==this.capacity
   }
   isEmpty()
   {
       return this.currentlength==0
   }
   enqueue(value)
   {
       if(!this.isFull())
       {
           this.rear=(this.rear+1)%this.capacity
           this.items[this.rear]=value;
           this.currentlength+=1
           if(this.front===-1)
           {
               this.front=this.rear
           }
       }
   }
   dequeue()
   {
       if(this.isEmpty())
       {
           return null
       }
       const item=this.items[this.front];
       this.items[this.front]=null;
       this.front=(this.front+1)%this.capacity
       this.currentlength-=1
       if(this.isEmpty())
       {
           this.front=-1;
           this.rear=-1
       }
       return item
   }
   peek()
   {
       if(!this.isEmpty())
       {
           return this.items[this.front]
       }
       return null
   }
   print() {
    if (this.isEmpty()) {
        console.log("Queue is empty");
    } else {
        let str = "";
        for (let i = 0; i < this.currentlength; i++) {
            let index = (this.front + i) % this.capacity;
            str += this.items[index] + " ";
        }
        console.log(str.trim());
    }
}
}

const q=new circlularqueue(5)
console.log(q.isEmpty())
q.enqueue(10)
q.enqueue(11)
q.enqueue(12)
q.enqueue(13)
q.enqueue(14)
console.log(q.isFull())
q.print()

console.log(q.dequeue())
