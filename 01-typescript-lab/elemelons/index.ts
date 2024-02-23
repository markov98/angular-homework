abstract class Melon {
    public weight: number;
    public melonSort: string;
    public element: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        return `Element: ${this.element} \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`;
    }
}

class Watermelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
    }
}

class Airmelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Air';
    }
}

class Firemelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

class Earthmelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

class Melolemonmelon extends Watermelon {
    private elements: Array<string> = ['Water', 'Fire', 'Earth', 'Air'];
    private index: number = 0;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = '';
    }

    morph(): void {
        this.element = this.elements[this.index];

        this.index = (this.index + 1) % this.elements.length;
    }
}

