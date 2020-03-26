// Make the Node constructor 

function Node(data) {
    this.data = data;
    this.next = null;
};

// Make SinglyList constructor for Single-Linked-List

function SinglyList() {
    this._length = 0;
    this.head = null;
}

// Function to add node to list

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
	currentNode = this.head;

    // 1st use case - empty list
    if (!currentNode) {
	this.head = node;
	this._length++;

	return node;
    }

    // 2nd use case - a non-empty list
    while (currentNode.next) {
	currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

// Function to search for a Node at position given

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
	length = this._lenghth,
	count = 1,
	message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use case: an invalid position
    if (length === 0 || position < 1 || position > length) {
	throw new Error(message.failure);
    }

    // 2nd use case : a valid position
    while (count < position) {
	currentNode = currentNode.next;
	count++;
    }

    return currentNode;
}

// Function to remove Node from list at position given

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
	length = this._length,
	count = o,
	message = {failure: 'Failure: non-existent node in this list.'},
	beforeNodeToDelete = null,
	nodeToDelete = null,
	deletedNode = null;

    // 1st use case - an invalid position
    if (position < 0 || position > length) {
	throw new Error(message.failure);
    }

    // 2nd use case - the first Node is removed
    if (position === 1) {
	this.head = currentNode.next;
	deletedNode = currentNode;
	currentNode = null;
	this._length--;

	return deletedNode;
    }

    // 3rd use case - any other Node is removed
    while (count < position) {
	beforeNodeToDelete = currentNode;
	nodeToDelete = currentNode.next;
	count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};
