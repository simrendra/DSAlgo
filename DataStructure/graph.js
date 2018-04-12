function Graph() {
    var graph = {};
    return {
        addVertex: addVertex,
        hasVertex: hasVertex    
        // addVertice: ,
        //     addEdge: ,
        //     getValue: ,
        //     removeVertices:
        //     removeEdge:
    

    }

    function addVertex(vertex) {        
        if(!hasVertex(vertex)) {
            graph[vertex] = [];
        } else {
            throw "Vertex already exist";
        }

        console.log(graph);
    }

    function isDefined(v) {
        return typeof v !== 'undefined' && v !== null;
    }

    function hasVertex(vertex) {
        return !!graph[vertex];
    }

}


// //
// var g = new Graph();

// g.addVertex(1);
// g.addVertex(2);
// g.addVertex(3);
// g.addVertex(4);
// g.addVertex(5);
// g.addVertex(6);



