class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //   Set method to add a key-value pair
  set(key, value) {
    const index = this._hash(key);
    // Check if there is already something at this index (Handle collisions)
    if (!this.data[index]) {
      this.data[index] = [];
    }
    // Push the key-value pair to the array at this index
    this.data[index].push([key, value]);
    return this.data;
  }

  //   Get method to retrieve a value by key
  get(key) {
    const index = this._hash(key);
    const currentBucket = this.data[index];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined; // if the key is not found
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
console.log(myHashTable.set("apples", 54));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
