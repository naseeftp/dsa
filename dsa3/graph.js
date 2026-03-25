class Graph{
    constructor()
    {
        this.adjacencyList={}
    }
    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2)
    {
        if(!this.adjacencyList[vertex1])
        {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2])
        {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display()
    {
        for(let vertex in this.adjacencyList)
        {
            console.log(vertex+'-->'+[...this.adjacencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2)
    {
        return this.adjacencyList[vertex1].has(vertex2)&& this.adjacencyList[vertex2].has(vertex1)
    }
    removeEdge(vertex1,vertex2)
    {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            return
        }
        for(let adjvertex of this.adjacencyList[vertex])
        {
            this.removeEdge(vertex,adjvertex )
        }
        delete this.adjacencyList[vertex]
    }
    dfs(start,visited=new Set())
    {
        if(!start) return ;
        console.log(start)
        visited.add(start);
        for(let value of this.adjacencyList[start])
         {
            if(!visited.has(value))
            {
                this.dfs(value,visited)
            }
        }
    }
    bfs(start)
    {
       let queue=[start]
       let visited=new Set([start]);
       while(queue.length)
       {
           let  vertex=queue.shift();
           console.log(vertex)
           for(let adjvertex of this.adjacencyList[vertex])
           {
               if(!visited.has(adjvertex))
               {
                   visited.add(adjvertex)
                   queue.push(adjvertex)
               }
           }
       }
    }
    shortestPath(start, end) {
        let queue = [start];
        let visited = new Set([start]);
        let parent = {};
        parent[start] = null;
    
        while (queue.length) {
            let vertex = queue.shift();
    
            if (vertex === end) {
                let path = [];
                let current = end;
                while (current !== null) {
                    path.push(current);
                    current = parent[current];
                }
                return path.reverse();
            }
    
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    parent[neighbor] = vertex;
                    queue.push(neighbor);
                }
            }
        }
    
        return null;
    }
    
    hascycle()
    {
        let visited=new Set();
        const dfs=(vertex,parent)=>
        {
            visited.add(vertex);
            for(let value of this.adjacencyList[vertex])
            {
                if(!visited.has(value))
                {
                    if(dfs(value,vertex)) return true
                }
                else if (value!=parent)
                {
                    return true
                }
            }
            return false
        }
        for(let vertex in this.adjacencyList)
        {
            if(!visited.has(vertex))
            {
                if(dfs(vertex,null))
                {
                    return true
                }
            }
        }
        
        
        return false
    }


}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");



g.display()
console.log(g.hasEdge('A','B'))
console.log(g.hasEdge('A','C'))
g.dfs('B')
console.log('-----------------')
g.bfs('A')
