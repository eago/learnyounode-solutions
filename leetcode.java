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