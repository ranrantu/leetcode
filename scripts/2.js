/**
 * 两数相加
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function array2ListNode(arr) {
    let head = new ListNode(null);
    let head_tmp = head;

    while(arr && arr.length) {
        head_tmp.next = new ListNode(arr[0]);
        head_tmp = head_tmp.next;
        arr.shift();
    }

    return head;
}

function list2Array(list) {
    let result = [];
    let head_tmp = list;
    let index = 0;

    while(head_tmp || index === 0) {
        result.push(head_tmp.val);
        head_tmp = head_tmp.next;
        index ++;
    }

    return result;
}

function addTwoNumbers(l1, l2) {
    l1 = array2ListNode(l1).next;
    l2 = array2ListNode(l2).next;
    let result = new ListNode(null);
    let nextRst = result;
    // 进位
    let curry = 0; // 传给下一个层级的值
    let val = 0; //传给当前层级的值

    while(l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;

        val = (x + y + curry) % 10;
        curry = Math.floor((x + y + curry) / 10);
        nextRst.next = new ListNode(val);
        nextRst = nextRst.next;

        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }

    if(curry) {
        nextRst.next = new ListNode(curry);
    }
    
    return list2Array(result.next);
}

let l1 = [2,4,3];
let l2 = [5,6,4];
console.log(addTwoNumbers(l1, l2));