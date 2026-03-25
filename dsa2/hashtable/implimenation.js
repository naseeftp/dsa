class HashTable{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=size;  
    }
    hash(key)
    {
        let total=0;
        for(let i=0;i<key.length;i++)
        {
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value)
    {
        const index=this.hash(key)
        this.table[index]=value
    }
    get(key)
    {
        const index=this.hash(key)
        return this.table[index]
    }
    remove(key)
    {
        const index=this.hash(key);
        this.table[index]=undefined
    }
    display()
    {
        for(let i=0;i<this.table.length;i++)
        {
            if(this.table[i])
            {
                console.log(i,this.table[i])
            }
        }
    }
}

const table=new HashTable(50)
table.set('name','naseef')
table.set('age',24)
table.display()
console.log(table.get('name'))
table.remove('name')
table.display()


{


  class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Update if key exists
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (let pair of bucket) {
                if (pair[0] === key) return pair[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            this.table[index] = bucket.filter(pair => pair[0] !== key);
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] && this.table[i].length) {
                console.log(i, this.table[i]);
            }
        }
    }
}

       
}