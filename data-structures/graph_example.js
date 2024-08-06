const airports = [
  "PHX",
  "BKK",
  "OKC",
  "JFK",
  "LAX",
  "MEX",
  "EZE",
  "HEL",
  "LOS",
  "LAP",
  "LIM",
];

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

//ADJENCENY MATRIX
function createMatrix(vertices, connections) {
  //create a 2d array
  let len = vertices.length;
  let adjacencyMatrix = [];
  for (let i = 0; i < len; i++) {
    adjacencyMatrix.push(new Array(len).fill(0));
  }

  // add the connections
  for (let i = 0; i < connections.length; i++) {
    let [A, B] = connections[i];
    let indexA = vertices.indexOf(A);
    let indexB = vertices.indexOf(B);
    adjacencyMatrix[indexA][indexB] = 1;
    adjacencyMatrix[indexB][indexA] = 1;
  }

  console.log(adjacencyMatrix);
}
createMatrix(airports, routes);

const vertices = ["A", "B", "C", "D", "E"];
const connections = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

createMatrix(vertices, connections);
//ADJENCENY LIST

function createList(vertices, connections) {
  const adjacencyList = {};

  // add the vertices to the list
  vertices.forEach((element) => {
    adjacencyList[element] = [];
  });

  //add the co

  console.log(adjacencyList);
}

createList(airports, routes);
