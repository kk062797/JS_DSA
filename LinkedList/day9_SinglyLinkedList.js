// Defination of node in Singly Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(node) {
        if (this.head) {
            //only if your list is not empty
            this.tail.next = node;
            this.tail = node;

        } else {
            //if list is empty, it will point head & tail to the same node & length initialy 0;
            this.head = node;
            this.tail = node;
        }
        this.length++;
    }

    printList() {
        if (this.length === 0) {
            console.log(`Current Head is: ${this.head}`);
            console.log(`Current Tail is: ${this.tail}`);
            console.log(`Current Length is: ${this.length}`);
        } else {
            console.log(`Current Head is: ${this.head.value}`);
            console.log(`Current Tail is: ${this.tail.value}`);
            console.log(`Current Length is: ${this.length}`);
        }
        if (this.head) {
            let tempNode = this.head;
            while (tempNode != null) {
                console.log(`[${tempNode.value}] -->`);
                tempNode = tempNode.next;
            }
        } else {
            console.log("SinglyLinked list is currently empty, Nothing to print here.")
        }
    }

    pop() {
        if (this.length === 1) { //if your list 1 item
            this.tail = null;
        }
        if (this.head) { //if your list has 2 or more items
            const nodeToBeRemoved = this.head;
            this.head = this.head.next;
            this.length--;
            nodeToBeRemoved.next = null;
        } else {
            //head is null, list is empty
            console.log("nothing to delete");
        }
    }

    searchNode(node) {
        let tempNode = this.head;
        let position = 0;
        while (tempNode != null) {
            if (tempNode.value === node) {
                console.log(`Node ${node} is present at ${position}.`);
                return;
            }
            tempNode = tempNode.next;
            position++;
        }
        console.log(`Node ${node} is not found.`);
    }

    printNode(position) {
        let tempNode = this.head;
        let count = 0;
        while (tempNode != null) {
            if (count === position) {
                console.log(`Node at position ${position}: ${tempNode.value}`);
                return;
            }
            tempNode = tempNode.next;
            count++;
        }
        console.log("Position out of range");
    }

    insertAtStart(node) {
        if (this.head) {
            let tempNode = this.head;
            node.next = tempNode;
            this.head = node;
        } else {
            this.head = node;
        }
        this.length++;
    }
}

//create the list 
const singlyLinkedList = new SinglyLinkedList();  //empty

console.log("-------------Search---------------");
//craete a node
const n0 = new Node("Rahul");
singlyLinkedList.push(n0);
const n1 = new Node("Kanishk");
singlyLinkedList.push(n1);
const n2 = new Node("Mahi");
singlyLinkedList.push(n2);
const n3 = new Node("Radhika");
singlyLinkedList.push(n3);
const n4 = new Node("Anant");
singlyLinkedList.push(n4);
const n5 = new Node("Kakku");
singlyLinkedList.push(n5);
// Print the List
singlyLinkedList.printList();
// Search a particular node
singlyLinkedList.searchNode("Rahul");
// Search node at particular index
singlyLinkedList.printNode(0);

console.log("----------Insertion At Start--------")
const n6 = new Node("Kritika");
singlyLinkedList.insertAtStart(n6);
// Print the List
singlyLinkedList.printList();
// Search a particular node
singlyLinkedList.searchNode("Rahul");

// Search node at particular index
singlyLinkedList.printNode(0);


/*
console.log("-------------INITIAL---------------");
singlyLinkedList.printList();

singlyLinkedList.pop();
singlyLinkedList.printList();
*/
/*
console.log("--------------Deletion with Only one Node --------------");
const n1 = new Node("Rahul");
singlyLinkedList.push(n1);

singlyLinkedList.printList();

singlyLinkedList.pop();
singlyLinkedList.printList();
*/
/*
console.log("--------------Deletion with Only 2 Node --------------");
const n1 = new Node("Rahul");
singlyLinkedList.push(n1);
const n2 = new Node("Anant");
singlyLinkedList.push(n2);
singlyLinkedList.printList();

singlyLinkedList.pop();
singlyLinkedList.printList();
*/
/*
console.log("--------------Deletion with 3 ormore Node --------------");
const n1 = new Node("Rahul");
singlyLinkedList.push(n1);
const n2 = new Node("Anant");
singlyLinkedList.push(n2);
const n3 = new Node("Kanishk");
singlyLinkedList.push(n3);
const n4 = new Node("Radhika");
singlyLinkedList.push(n4);
singlyLinkedList.printList();

singlyLinkedList.pop();
singlyLinkedList.printList();
*/
/*
console.log("--------------First Insertion--------------");

//craete a node
const n1 = new Node("Rahul");
singlyLinkedList.push(n1);

singlyLinkedList.printList();

console.log("--------------Second Insertion--------------------");
const n2 = new Node("Anant");
singlyLinkedList.push(n2);

singlyLinkedList.printList();

console.log("--------------Third Insertion--------------------");
const n3 = new Node("Hasan");
singlyLinkedList.push(n3);

singlyLinkedList.printList();

console.log("--------------Fourth Insertion--------------------");
const n4 = new Node("Kanishk");
singlyLinkedList.push(n4);

singlyLinkedList.printList();
*/