const vertices = ["a", "b", "c", "d", "e"];

//adjacent nodes => 0(1)
//connected => 0(v)

const adjacency_list = [
  ["b", "d"],
  ["a", "c"],
  ["b", "d", "e"],
  ["a", "c", "e"],
  ["c", "d"],
];

function find_adjcent_nodes(node) {
  let indexOfNode = vertices.indexOf(node);
  return adjacency_list[indexOfNode];
}

console.log(find_adjcent_nodes("d"));

// Given two nodes is there a connection between them

function is_connected(node1, node2) {
  let indexOfNodeA = vertices.indexOf(node1);
  let arrayToCheck = adjacency_list[indexOfNodeA];
  if (arrayToCheck.indexOf(node2) > -1) {
    return true;
  } else {
    return false;
  }
}

console.log(is_connected("b", "d"));
