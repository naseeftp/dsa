class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor()
    {
        this.top=null;
        this.length=0;
    }
    isEmpty()
    {
        return this.top==null
    }
    push(value)
    {
        const newNode=new Node(value);
        newNode.next=this.top;
        this.top=newNode;
        this.length++
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log('stack underflow')
            return null
        }
        const value=this.top.value
        this.top=this.top.next;
        this.length--;
        return value
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log('stack is empty')
            return null
        }
        return this.top.value
    }
    size()
    {
        return this.length
    }
    print()
    {
        if(this.isEmpty())
        {
            console.log('stack is empty')
            return null
        }
        let current=this.top;
        while(current)
        {
            console.log(current.value)
            current=current.next
        }
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();