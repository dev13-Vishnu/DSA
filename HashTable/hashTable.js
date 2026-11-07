class HashTable{
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }
    _hash(key){
        let hash = 0;
        for(let i=0; i < key.length; i++) {
            // CharCodeAt gives the numeric value of the letter (e.g., 'a' is 97)
            // We multiply by a prime number (23) to randomize it
            // Modulo (%) this.dataMap.length guarantees the result is a valid index!
            hash = (hash * 23 + key.charCodeAt(i)) % this.dataMap.length;
        }
        return hash;
    }
    set(key,value){
        let index = this._hash(key); //1. Run the key through  a hash function to get an index.
        console.log("index:",index);
        if(!this.dataMap[index]) { // 2. Look at this.dataMap[index]. If it is empty (undefined),
            this.dataMap[index] = []; //    create an empty array there.
        }
        this.dataMap[index].push([key,value]) // 3. Push a new array containing [key, value] into that space.
        return this; // 4. Return this
    }
    get(key) {
        let index = this._hash(key);
        if(this.dataMap[index]) {
            for(let [keyI,valueI] of this.dataMap[index]) {
                if(keyI === key ) {
                    return valueI
                }
            }
        }
        return undefined;

    }
    key() {
        let allKey = [];
        if(this.dataMap.length === 0) {
            return []
        }
        for(let bucket of this.dataMap) {
            if(bucket) {
                for(let[key,value] of bucket) {
                    allKey.push(key);
                }
            }
            continue;
        }
        return allKey;
    }
}

const ht = new HashTable();

ht.set("rat",1);
ht.set("tar",2);
ht.set("art",3);

console.log(ht.get("rat"));
console.log(ht.get("tar"));
console.log(ht.get("art"));
console.log(ht.key());

