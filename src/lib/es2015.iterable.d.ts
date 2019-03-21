/// <reference lib="es2015.symbol" />

interface SymbolConstructor {
    /**
     * A method that returns the default iterator for an object. Called by the semantics of the
     * for-of statement.
     */
    readonly iterator: symbol;
}

interface IteratorYieldResult<TYield> {
    done: false;
    value: TYield;
}

interface IteratorReturnResult<TReturn> {
    done: true;
    value: TReturn;
}

type IteratorResult<T, TReturn = T | void> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;

interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
}

interface ArrayIterator<T> {
    next(): IteratorResult<T, void>;
    [Symbol.iterator](): ArrayIterator<T>;
    [Symbol.toStringTag]: string;
}

interface Array<T> {
    /** Iterator */
    [Symbol.iterator](): ArrayIterator<T>;

    /**
     * Returns an iterable of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, T]>;

    /**
     * Returns an iterable of keys in the array
     */
    keys(): ArrayIterator<number>;

    /**
     * Returns an iterable of values in the array
     */
    values(): ArrayIterator<T>;
}

interface ArrayConstructor {
    /**
     * Creates an array from an iterable object.
     * @param iterable An iterable object to convert to an array.
     */
    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];

    /**
     * Creates an array from an iterable object.
     * @param iterable An iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
}

interface ReadonlyArray<T> {
    /** Iterator of values in the array. */
    [Symbol.iterator](): ArrayIterator<T>;

    /**
     * Returns an iterable of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, T]>;

    /**
     * Returns an iterable of keys in the array
     */
    keys(): ArrayIterator<number>;

    /**
     * Returns an iterable of values in the array
     */
    values(): ArrayIterator<T>;
}

interface IArguments {
    /** Iterator */
    [Symbol.iterator](): IterableIterator<any>;
}

interface MapIterator<T> {
    next(): IteratorResult<T, void>;
    [Symbol.iterator](): MapIterator<T>;
    [Symbol.toStringTag]: string;
}

interface Map<K, V> {
    /** Returns an iterable of entries in the map. */
    [Symbol.iterator](): MapIterator<[K, V]>;

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */
    entries(): MapIterator<[K, V]>;

    /**
     * Returns an iterable of keys in the map
     */
    keys(): MapIterator<K>;

    /**
     * Returns an iterable of values in the map
     */
    values(): MapIterator<V>;
}

interface ReadonlyMap<K, V> {
    /** Returns an iterable of entries in the map. */
    [Symbol.iterator](): MapIterator<[K, V]>;

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */
    entries(): MapIterator<[K, V]>;

    /**
     * Returns an iterable of keys in the map
     */
    keys(): MapIterator<K>;

    /**
     * Returns an iterable of values in the map
     */
    values(): MapIterator<V>;
}

interface MapConstructor {
    new <K, V>(iterable: Iterable<readonly [K, V]>): Map<K, V>;
}

interface WeakMap<K extends object, V> { }

interface WeakMapConstructor {
    new <K extends object, V>(iterable: Iterable<[K, V]>): WeakMap<K, V>;
}

interface SetIterator<T> {
    next(): IteratorResult<T, void>;
    [Symbol.iterator](): SetIterator<T>;
    [Symbol.toStringTag]: string;
}

interface Set<T> {
    /** Iterates over values in the set. */
    [Symbol.iterator](): SetIterator<T>;
    /**
     * Returns an iterable of [v,v] pairs for every value `v` in the set.
     */
    entries(): SetIterator<[T, T]>;
    /**
     * Despite its name, returns an iterable of the values in the set,
     */
    keys(): SetIterator<T>;

    /**
     * Returns an iterable of values in the set.
     */
    values(): SetIterator<T>;
}

interface ReadonlySet<T> {
    /** Iterates over values in the set. */
    [Symbol.iterator](): SetIterator<T>;

    /**
     * Returns an iterable of [v,v] pairs for every value `v` in the set.
     */
    entries(): SetIterator<[T, T]>;

    /**
     * Despite its name, returns an iterable of the values in the set,
     */
    keys(): SetIterator<T>;

    /**
     * Returns an iterable of values in the set.
     */
    values(): SetIterator<T>;
}

interface SetConstructor {
    new <T>(iterable: Iterable<T>): Set<T>;
}

interface WeakSet<T extends object> { }

interface WeakSetConstructor {
    new <T extends object = object>(iterable: Iterable<T>): WeakSet<T>;
}

interface Promise<T> { }

interface PromiseConstructor {
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<TAll>(values: Iterable<TAll | PromiseLike<TAll>>): Promise<TAll[]>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T>(values: Iterable<T | PromiseLike<T>>): Promise<T>;
}

declare namespace Reflect {
    function enumerate(target: object): IterableIterator<any>;
}

interface StringIterator {
    next(): IteratorResult<string, void>;
    [Symbol.iterator](): StringIterator;
    [Symbol.toStringTag]: string;
}

interface String {
    /** Iterator */
    [Symbol.iterator](): StringIterator;
}

interface Int8Array {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;
    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;
    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Int8ArrayConstructor {
    new (elements: Iterable<number>): Int8Array;

    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int8Array;
}

interface Uint8Array {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;
    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;
    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Uint8ArrayConstructor {
    new (elements: Iterable<number>): Uint8Array;

    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8Array;
}

interface Uint8ClampedArray {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;

    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;

    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Uint8ClampedArrayConstructor {
    new (elements: Iterable<number>): Uint8ClampedArray;


    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8ClampedArray;
}

interface Int16Array {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;

    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;

    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Int16ArrayConstructor {
    new (elements: Iterable<number>): Int16Array;

    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int16Array;
}

interface Uint16Array {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;
    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;
    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Uint16ArrayConstructor {
    new (elements: Iterable<number>): Uint16Array;

    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint16Array;
}

interface Int32Array {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;
    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;
    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Int32ArrayConstructor {
    new (elements: Iterable<number>): Int32Array;

    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int32Array;
}

interface Uint32Array {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;
    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;
    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Uint32ArrayConstructor {
    new (elements: Iterable<number>): Uint32Array;

    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint32Array;
}

interface Float32Array {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;
    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;
    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Float32ArrayConstructor {
    new (elements: Iterable<number>): Float32Array;

    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float32Array;
}

interface Float64Array {
    [Symbol.iterator](): ArrayIterator<number>;
    /**
     * Returns an array of key, value pairs for every entry in the array
     */
    entries(): ArrayIterator<[number, number]>;
    /**
     * Returns an list of keys in the array
     */
    keys(): ArrayIterator<number>;
    /**
     * Returns an list of values in the array
     */
    values(): ArrayIterator<number>;
}

interface Float64ArrayConstructor {
    new (elements: Iterable<number>): Float64Array;

    /**
     * Creates an array from an array-like or iterable object.
     * @param arrayLike An array-like or iterable object to convert to an array.
     * @param mapfn A mapping function to call on every element of the array.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float64Array;
}
