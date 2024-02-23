class KeyValuePair<T, U> {
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U) {
        this.key = key;
        this.val = val;
    }

    display() {
        console.log(`key: ${this.key}, value: ${this.val}`);
    }
}