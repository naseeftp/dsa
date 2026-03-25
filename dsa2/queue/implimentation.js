class Queue
{
    constructor()
    {
        this.items=[]
    }
    enqueue(element)
    {
        this.items.push(element)
    }
    dequeue()
    {
        this.items.shift();
    }
    peek()
    {
        if(this.isEmpty())
        {
            return null
        }
        return this.items[0]
    }
    isEmpty()
    {
        return this.items.length==0
    }
    size()
    {
        return this.items.length
    }
    clear()
    {
        this.items=[]
    }
    print()
    {
        if(this.isEmpty())
        {
            console.log('que is empty')
        }
        else
        {
            console.log(this.items.join('->'))
        }
    }
}

const queue=new Queue()
queue.enqueue(9)
queue.enqueue(11)
queue.enqueue(12)
queue.print()









