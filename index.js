class SortedLinkedList {
    constructor() {
        this.head;
        this.length=0;
    }
    add(value) {
        let newNode = { value: value, next: undefined };
        if (this.head=== undefined ) {
            newNode.next=this.head;
              this.head=newNode;
        }
        else if(this.head.value > newNode.value){
            let tempNode=this.head;
            this.head=newNode;
            newNode.next=tempNode;
        }else {
            let current = this.head;
                while (current.next !== undefined && current.next.value <= value) {
                current = current.next;
            }
                newNode.next = current.next;
                current.next = newNode;
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
            linkedListString += currentNode.value.toString() + ", ";
            currentNode = currentNode.next;
        }
        linkedListString += currentNode.value.toString();
        linkedListString += "]";
        return linkedListString;
    }
    remove(value) {
        if (this.head.value=== value ){
            this.head=this.head.next;
            this.length--;
            return true;
        }
       let currentNode=this.head;
        let previousNode;
       while(currentNode.value!==value){
           previousNode=currentNode;
           currentNode=currentNode.next;
           if(currentNode===undefined){
               return false;
           }
       }
       previousNode.next=currentNode.next;
       this.length--;
       return true;
    }
}
let list1 = new SortedLinkedList();
list1.add(2);
 list1.add(3);
   list1.add(4);
    list1.add(7);
    list1.add(5);
    list1.add(1);
list1.add(6);
list1.add(9);
list1.add(8);
 console.log(list1.toString());
console.log(list1.remove(1));
console.log(list1.toString());
 console.log(list1.remove(7));
 console.log(list1.toString());
console.log(list1.remove(9));
console.log(list1.toString());
console.log(`${list1}`);
let scores = new SortedLinkedList();
scores.add(54);
scores.add(33);
scores.add(91);
scores.add(44);
console.log(`${scores}`); // Should print [33, 44, 54, 91];
console.log(scores.remove(44)); // Should print true
console.log(`${scores}`); // Should print [33, 54, 91];
console.log(scores.remove(70)); // Should print false
let list2 = new SortedLinkedList();
list2.add(2);
console.log(list2.remove(2));
console.log(`${list2}`);
let list3 = new SortedLinkedList();

list3.add(1);
list3.add(1);
list3.add(2);
list3.add(2);
list3.add(3);
list3.add(3);
console.log(`${list3}`);
list3.remove(3);
console.log(`${list3}`);
