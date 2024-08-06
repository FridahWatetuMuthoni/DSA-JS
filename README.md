# Data Structures and Algorithms

## Algorithms

An algorithm is a set of steps a program takes to finish a task
An algorithm has to have a clearly defined problem statement, input and output
The steps in an algorithm need to be in a very specific order
The steps also need to be distinct
The algotirhm should produce a result
The algorithm should complete in a finite amount of time

## STACKS

A stack is a data structure that stores data, similar to a stack of plates in a kitchen. You can put
a plate on the top of the stack, and when you need a plate, you take it from the top of the stack.
The last plate that was added to the stack will be the first to be picked up from the stack:
Stacks uses the Last In , First Out principle or First In , Last Out principle.
A good use case is the browser history
We use the push method to add to the end of the stack and the pop method to remove from the end of the stack and peek is used to display the top element of a stack.

### STACKS OPERATIONS

#### PUSH

push is used to place data to a stack

#### POP

pop is used to remove the top element of a stack

#### PEEK

peek is used to display the top element of a stack

## QUEUES

The queue data structure is very similar to the regular queue you are accustomed to in real life. It is just like a line of people waiting to be served in sequential order at a shop. Queues are a fundamentally important concept to grasp since many other data structures are built on them.
A queue works as follows. The first person to join the queue usually gets served first, and everyone will be served in the order in which they joined the queue. The acronym FIFO best explains the concept of a queue. FIFO stands for first in, first out.
Therefore, people are dequeued from the front of the queue and enqueued from the back where they wait their turn.
The operation to add an element to the queue is known as enqueue. Deleting an element from the queue uses the dequeue operation. Whenever an element is enqueued, the length or size of the
queue increments by 1, and dequeuing an item reduces the number of elements in the queue by 1.

### QUEUES OPERATIONS

#### ENQUEUE

elements are added at the end of the queue

#### DEQUEUE

elements are removed from the front of the queue

#### FRONT

front is used to display the first element of the queue

## Priority Queues

In the course of normal queue operations, when an element is removed from a queue,that element is always the first element that was inserted into the queue. There are certain applications of queues, however, that require that elements be removed in an order other than first-in, first-out. When we need to simulate such an application, we need to create a data structure called a priority queue.
A priority queue is one where elements are removed from the queue based on a priority constraint. For example, the waiting room at a hospital’s emergency department (ED) operates using a priority queue. When a patient enters the ED, he or she is seen by a
triage nurse. This nurse’s job is to assess the severity of the patient’s condition and assign the patient a priorty code. Patients with a high priority code are seen before patients
with a lower priority code, and patients that have the same priority code are seen on a first-come, first-served, or first-in, first-out, basis.

## Graphs

The maximum number of edges is n \* (n-1) => n is the number of nodes
The maximum number of edges in a undirected graph (n \* (n-1))/2 => n is the number of nodes

1. Dense graph - close to the maximum number of edges
2. Sparse graph - the number of egdes is close to the number of nodes in the graph
3. self loop - when an edge has just one vertex/node(like a webpage linking back to itself)
4. multi-edge graphs - there are multiple edges between two vertices
5. simple graph - a graph with no self loops and multi-edges
