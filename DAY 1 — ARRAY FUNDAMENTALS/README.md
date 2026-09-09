# Array Fundamentals

## 📌 What is an Array?

An **array** is a data structure that stores multiple values in an **ordered collection**.

Each element in an array is stored at a specific **index**.

```javascript
const arr = [1, 2, 3, 4, 5];
```

### Array Indexing

Array indexing starts from **0**.

| Index | Value | Access   |
| ----: | ----: | -------- |
|     0 |     1 | `arr[0]` |
|     1 |     2 | `arr[1]` |
|     2 |     3 | `arr[2]` |
|     3 |     4 | `arr[3]` |
|     4 |     5 | `arr[4]` |

For example:

```javascript
arr[0]; // 1
arr[1]; // 2
```

### Array Length

The `length` property tells us the number of elements present in an array.

```javascript
arr.length; // 5
```

> **Note:** The correct property is `length`, not `lenght`.

---

# 🔑 Fundamental Array Operations

There are **4 fundamental operations** to understand when working with arrays:

1. Access
2. Update
3. Length
4. Traversal

---

## 1. Access

**Access** means retrieving an element from an array using its index.

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr[1]);
```

### Output

```text
2
```

### Time Complexity

```text
O(1)
```

Accessing an element by its index takes constant time.

---

## 2. Update

**Update** means changing the value stored at a particular index.

```javascript
const arr = [1, 2, 3, 4, 5];

arr[3] = 7;

console.log(arr);
```

### Output

```text
[1, 2, 3, 7, 5]
```

### Time Complexity

```text
O(1)
```

Updating an element using its index takes constant time.

---

## 3. Length

The `length` property returns the number of elements in the array.

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.length);
```

### Output

```text
5
```

### Time Complexity

```text
O(1)
```

---

## 4. Traversal

**Traversal** means visiting every element of an array, usually one by one.

```javascript
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### Output

```text
1
2
3
4
5
```

### How it works

```text
i = 0 → arr[0] → 1
i = 1 → arr[1] → 2
i = 2 → arr[2] → 3
i = 3 → arr[3] → 4
i = 4 → arr[4] → 5
```

### Time Complexity

```text
O(n)
```

If the array contains `n` elements, traversal visits all `n` elements.

---

# 📊 Summary

| Operation | Example      | Time Complexity |
| --------- | ------------ | --------------- |
| Access    | `arr[1]`     | `O(1)`          |
| Update    | `arr[3] = 7` | `O(1)`          |
| Length    | `arr.length` | `O(1)`          |
| Traversal | `for` loop   | `O(n)`          |

---

# 🧠 Key Points to Remember

* Array stores multiple values in an **ordered collection**.
* Array indexing starts from **0**.
* `arr[index]` is used to access an element.
* `arr[index] = value` is used to update an element.
* `arr.length` gives the number of elements.
* Traversal means visiting each element.
* Access and update by index are generally **O(1)**.
* Traversing the complete array takes **O(n)**.

## Example

```javascript
const arr = [1, 2, 3, 4, 5];

// Access
console.log(arr[1]); // 2

// Update
arr[3] = 7;

// Length
console.log(arr.length); // 5

// Traversal
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


                    ARRAY PROBLEM
                         │
                 Is it sorted?
                   /          \
                 YES           NO
                  │             │
          ┌───────┼───────┐     │
          ↓       ↓       ↓     ↓
       Target    Pair   Duplicates
          │       │       │
        Binary  Two Ptr  Adjacent
        Search           comparison
                            │
                       if unsorted
                            ↓
                           Set




```


