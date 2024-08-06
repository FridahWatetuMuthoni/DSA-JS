/*
A 2-D array is filled out with 1s and 0s where each array represents a node and each index in the
subarray represents a potential connection to another node.
The array length =  the length of the vertices
finding a node o(v)=>o(n)
is connected = o(1)
space complexity = o(v^2)
*/

//data in the graph
const vertices = ["A", "B", "C", "D", "E"];

//connections in the graph
const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

const verticesIndexes = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

function find_adjcent_nodes(node) {
  let results = [];
  let indexOfNode = verticesIndexes[node];
  let arrayToCheck = adjacencyMatrix[indexOfNode];
  for (let i = 0; i < vertices.length; i++) {
    if (arrayToCheck[i] === 1) {
      results.push(vertices[i]);
    }
  }

  return results;
}

console.log(find_adjcent_nodes("C"));

// Given two nodes is there a connection between them

function is_connected(node1, node2) {
  let indexOfNodeA = verticesIndexes[node1];
  let indexOfNodeB = verticesIndexes[node2];
  let arrayToCheck = adjacencyMatrix[indexOfNodeA];
  if (arrayToCheck[indexOfNodeB] === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(is_connected("C", "E"));
