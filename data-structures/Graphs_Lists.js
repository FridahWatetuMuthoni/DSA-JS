// vertices is the same as nodes
const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

// FIND ADJECENT NODES -> given a node return all the nodes that its connected to
// O(e)=> O(n) time complexity
// O(e + v) space complexity
function find_adjcent_nodes(node) {
  let results = [];
  for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (node == edges[i][j]) {
        let indexOfNode = edges[i].indexOf(node);
        if (indexOfNode == 0) {
          results.push(edges[i][1]);
        } else {
          results.push(edges[i][0]);
        }
      }
    }
  }
  return results;
}

console.log(find_adjcent_nodes("D"));

// Given two nodes is there a connection between them

function is_connected(node1, node2) {
  for (let i = 0; i < edges.length; i++) {
    if (edges[i].indexOf(node1) > -1 && edges[i].indexOf(node2) > -1) {
      return true;
    }
  }
  return false;
}

console.log(is_connected("D", "E"));
