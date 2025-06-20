### Week: 1  
### Skill: Data Structures and Algorithms  
### Exercise Number: 7  
### Question: Financial Forecasting

---

### Step 1: Understand Recursive Algorithms

Recursion is a technique where a method calls itself to solve a smaller version of the same problem.  
It helps simplify logic in problems that involve repetitive or sequential steps, such as calculating future values year by year.  

In financial forecasting, the value for the next year is dependent on the current year’s value.  
This makes recursion a natural fit for modeling such problems.

---

### Step 4: Analysis

**Time Complexity**:  
- O(n), where `n` is the number of years — because one recursive call happens per year.

**Space Complexity**:  
- O(n), due to the recursion stack that holds each call.

**Optimizations**:
- Use an **iterative approach** to avoid recursion stack overhead.
- Or, apply the **compound interest formula**:  
  `Future Value = currentValue × (1 + growthRate)^years`  
  This approach is faster and uses constant space — O(1).

---

### Conclusion

While recursion is easy to understand and implement for small input sizes,  
in real-world financial applications, it’s better to use **iterative** or **mathematical** approaches for better performance and scalability.
