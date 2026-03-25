class TreiNode{
    constructor()
    {
        this.children={};
        this.isEnd=false
    }
}
class Trei{
    constructor()
    {
        this.root=new TreiNode()
    }
    insert(word)
    {
        let node=this.root;
        for(let char of word)
        {
            if(!node.children[char])
            {
                node.children[char]=new TreiNode()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word)
    {
        let node=this.root;
        for(let char of word)
        {
            if(!node.children[char])
            {
               return false
            }
            node=node.children[char]
        }
        return node.isEnd
    }
    display(node=this.root,prefix='',words=[])
    {
        if(node.isEnd)
        {
            words.push(prefix)
        }
        for(let char in node.children)
        {
            this.display(node.children[char],prefix+char,words)
        }
        return words
    }
    startswith(prefix)
    {
        let node=this.root;
        for(let char of prefix)
        {
            if(!node.children[char])
            {
                return []
            }
            node=node.children[char]
        }
        let result=[];
        function dfs(current,path)
        {
            if(current.isEnd)
            {
                result.push(prefix+path)
            }
            for(let char in current.children )
            {
                dfs(current.children[char],path+char)
            }
        }
        dfs(node,'')
        return result
    }
    longestPrefix()
    {
        let prefix='';
        let node=this.root;
        while(node)
        {
            let keys=Object.keys(node.children);
            if(keys.length!==1||node.isEnd)
            {
                break;
            }
            let char=keys[0]
            prefix+=char;
            node=node.children[char]
        }
        return prefix;
    }


    // another method

     longestprefix(node=this.root)
    {
        let words=this.display()
        if(words.length==0) return ''
        words.sort()
        let first=words[0];
        let last=words[words.length-1];
        let i=0;
        while(i<first.length&&first[i]==last[i])
        {
            i++;
        }
        return first.slice(0,i)
    }
    
    
}

const trie = new Trei();
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("cab");
trie.insert("dog");

console.log(trie.search("cat"));   // true
console.log(trie.search("cap"));   // false

console.log(trie.startswith("ca"));   // [ 'cat', 'car', 'cart', 'cab' ]
console.log(trie.startswith("car"));  // [ 'car', 'cart' ]
console.log(trie.startswith("cab"));  // [ 'cab' ]
console.log(trie.startswith("do"));   // [ 'dog' ]
console.log(trie.startswith("z"));

const trie2 = new Trei();
trie2.insert("flower");
trie2.insert("flow");
trie2.insert("flight");
console.log("Longest Prefix:", trie2.longestPrefix());
