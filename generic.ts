class Storage<T> {
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// Example usage
const stringStorage = new Storage<string>();
stringStorage.add("TypeScript");
stringStorage.add("Generics");
stringStorage.add(42);

console.log(stringStorage.getAll());
