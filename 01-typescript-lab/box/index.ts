class Box<T> {
    private _boxes: Array<T> = [];

    public add(el: T) {
        this._boxes.unshift(el);
    }

    public remove() {
        this._boxes.shift()
    }

    get count(): number {
        return this._boxes.length;
    }
}