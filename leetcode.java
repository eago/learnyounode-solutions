/**
 * 226. Invert Binary Tree
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root != null && root.left != null && root.right != null) {
            TreeNode tmp = root.left;
            root.left = root.right;
            root.right = tmp;
            invertTree(root.left);
            invertTree(root.right);
        }
        
        return root;
        
    }
}

/**
* 1. Two Sum
* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice
 */
// O(n^2)
 class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        if (nums.length == 0) {
            return new int[]{};
        }
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    res[0] = i;
                    res[1] = j;
                    return res;
                }
            }
        }
        
        return new int[]{};
        
    }
}

// O(n)
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hashTable = new HashMap<Integer, Integer>();
        
        for (int i = 0; i < nums.length; i++) {
            if (hashTable.containsKey(target - nums[i])) {
                return new int[] {hashTable.get(target - nums[i]), i};
            }
            
            hashTable.put(nums[i], i);
        }
                
        throw new IllegalArgumentException("No two sum solution");
        
    }
}

//167. Two Sum II - Input array is sorted
// O(log(n)*n)
public class Solution {
    public static int[] twoSum(int[] numbers, int target) {
      int length = numbers.length;
      for (int i = 0; i < length; i++) {
        int[] subNumbers = Arrays.copyOfRange(numbers, i + 1, length);
        int index = Arrays.binarySearch(subNumbers, target - numbers[i]);
        if (index >= 0) {
          return new int[] { i + 1, index + 1 + i + 1};
        }
      }
      throw new IllegalArgumentException("Can't find two sum !");
    }
  // O(n) https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/51239/
  public class Solution {
    public static int[] twoSum(int[] numbers, int target) {
      int[] res = new int[2];
      int left = 0;
      int right = numbers.length - 1;
      while (left < right) {
        int value = numbers[left] + numbers[right];
        if (value == target) {
          res[0] = left + 1;
          res[1] = right + 1;
          return res;
        }
        else if (value < target) {
          left++;
        } else {
          right--;
        }
      
      }
      throw new IllegalArgumentException("Can't find two sum !");
    }
      
  }

  // reverse linked list
  // Java program for reversing the Linked list
 
class LinkedList {
 
    static Node head;
 
    static class Node {
 
        int data;
        Node next;
 
        Node(int d) {
            data = d;
            next = null;
        }
    }
 
    // A simple and tail recursive function to reverse
    // a linked list.  prev is passed as NULL initially.
    Node reverseUtil(Node curr, Node prev) {
 
        /* If last node mark it head*/
        if (curr.next == null) {
            head = curr;
 
            /* Update next to prev node */
            curr.next = prev;
            return null;
        }
 
        /* Save curr->next node for recursive call */
        Node next1 = curr.next;
 
        /* and update next ..*/
        curr.next = prev;
 
        reverseUtil(next1, curr);
        return head;
    }
 
    // prints content of double linked list
    void printList(Node node) {
        while (node != null) {
            System.out.print(node.data + " ");
            node = node.next;
        }
    }
 
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.head = new Node(1);
        list.head.next = new Node(2);
        list.head.next.next = new Node(3);
        list.head.next.next.next = new Node(4);
        list.head.next.next.next.next = new Node(5);
        list.head.next.next.next.next.next = new Node(6);
        list.head.next.next.next.next.next.next = new Node(7);
        list.head.next.next.next.next.next.next.next = new Node(8);
 
        System.out.println("Original Linked list ");
        list.printList(head);
        Node res = list.reverseUtil(head, null);
        System.out.println("");
        System.out.println("");
        System.out.println("Reversed linked list ");
        list.printList(res);
    }
}