### Week: 1  
### Skill: Data Structures and Algorithms
### Exercise Number: 2  
### Question: E-commerce Platform Search Function


### What is Big O Notation?

Big O notation is a mathematical representation used to describe the performance or complexity of an algorithm in terms of input size. It helps us analyze how an algorithm scales and behaves as the size of the input grows.

#### Common Time Complexities:
- O(1) – Constant Time
- O(log n) – Logarithmic Time
- O(n) – Linear Time
- O(n log n) – Linearithmic Time
- O(n²) – Quadratic Time

### Best, Average, and Worst Case for Search

**Linear Search (Unsorted Array)**
- Best: O(1) – First element is the match
- Average: O(n/2) → O(n)
- Worst: O(n) – Match is last or not present

**Binary Search (Sorted Array)**
- Best: O(1) – Middle element is the match
- Average: O(log n)
- Worst: O(log n) – Match found at one of the ends or not present


### Linear Search
- Time Complexity: O(n)
- Does **not** require sorting
- Good for **small datasets** or unsorted data

### Binary Search
- Time Complexity: O(log n)
- Requires data to be **sorted**
- Best for **large datasets** with frequent search operations

### Conclusion:
For an e-commerce platform with thousands of products, **binary search** is more suitable due to its faster performance. However, it requires keeping the product list sorted, which adds some overhead.

A **real-world implementation** would typically use **search indexes**, **hash maps**, or even **search engines** like **Elasticsearch** for optimal performance.
