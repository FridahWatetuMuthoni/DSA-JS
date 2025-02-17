class Node {
  constructor(value) {
    this.value = value;
    this.edgeList = [];
  }

  connect(node) {
    this.edgeList.push(node);
    node.edgeList.push(this);
  }

  adjacent_list() {
    return this.adjacent_list.map((edge) => edge.value);
  }

  isConnected(node) {
    return this.edgeList.map((edge) => edge.value.indexOf(node.value) > -1);
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addNode(node) {
    this.nodes.push(node);
  }
}

const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

// console.log("node A", nodeA);
// console.log("graph", graph);

nodeA.isConnected(nodeB);
nodeA.isConnected(nodeC);
