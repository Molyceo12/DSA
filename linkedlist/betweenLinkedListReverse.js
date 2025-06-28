// Definition for singly-linked list node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to reverse a sublist between positions left and right
function reverseBetween(head, left, right) {
  if (!head || left === right) return head;

  const dummy = new ListNode(0, head); // dummy node before the head
  let prev = dummy;

  // Move prev to the node before `left`
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // Start reversing the sublist
  let curr = prev.next;
  for (let i = 0; i < right - left; i++) {
    let temp = curr.next;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }

  return dummy.next;
}

// Helper function to create a linked list from array
function buildLinkedList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

// Helper function to convert linked list back to array
function linkedListToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test Example
let head = buildLinkedList([1, 2, 3, 4, 5]);
let newHead = reverseBetween(head, 2, 4);
console.log(linkedListToArray(newHead)); // Output: [1, 4, 3, 2, 5]
