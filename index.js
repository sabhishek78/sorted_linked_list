class sortedLinkedList {
    constructor() {
        this.head;
        this.tail;
        this.length=0;
    }
    add(value) {
        let newNode = { value: value, next: undefined };
        if (this.head === undefined && this.tail === undefined) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail.value <= value) {
                this.tail.next = newNode;
                this.tail = this.tail.next;
                this.length++;
                return;
            }
            if (this.head.value > value) {
                let tempNode = this.head;
                this.head = newNode;
                newNode.next = tempNode;
            }
            let currentNode = this.head;
            while (currentNode.next.value <= value) {
                currentNode = currentNode.next;
            }
            let tempNode = currentNode.next;
            currentNode.next = newNode;
            newNode.next = tempNode;
        }
        this.length++;
        return;
    }
    toString() {
        if (this.length===0) {
            return '[]';
        }
        let linkedListString = "[";
        let currentNode = this.head;
        while (currentNode.next !== undefined) {
            linkedListString += currentNode.value.toString() + ",";
            currentNode = currentNode.next;
        }
        linkedListString += currentNode.value.toString();
        linkedListString += "]";
        return linkedListString;
    }
    remove(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        }
        let currentNode = this.head;
        while (currentNode.next.value !== value) {
            currentNode = currentNode.next;
            if (this.tail === currentNode) {
                if (currentNode.value !== value) {
                    return false;
                }
            }
        }
        if (currentNode.next.next === undefined) {
            //tail
            currentNode.next = undefined;
            this.tail = currentNode;
            this.length--;
            return true;
        } else if (currentNode.next.next !== undefined) {
            //not tail
            let value = currentNode.next.value;
            currentNode.next = currentNode.next.next;
            this.length--;
            return true;
        }
    }
}
let list1 = new sortedLinkedList();
list1.add(2);
list1.add(3);
list1.add(4);
list1.add(7);
list1.add(5);
list1.add(1);
console.log(list1.toString());
console.log(list1.remove(1));
console.log(list1.remove(7));
console.log(list1.toString());
console.log(`${list1}`);
let scores = new sortedLinkedList();
scores.add(54);
scores.add(33);
scores.add(91);
scores.add(44);
console.log(`${scores}`); // Should print [33, 44, 54, 91];
console.log(scores.remove(44)); // Should print true
console.log(`${scores}`); // Should print [33, 54, 91];
console.log(scores.remove(70)); // Should print false
let list2 = new sortedLinkedList();
list2.add(2);
console.log(list2.remove(2));
console.log(`${list2}`);
