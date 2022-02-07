export function printToFile(text: string, callback: () => void) :void {
    console.log(text);
    callback()
}

export type MutationFunction = (v:number) => number

export function arrayMutate(numbers: number[], mutate: MutationFunction) {
    return numbers.map(mutate)
}

console.log(arrayMutate([1,2,3], (x) => x * 10));

const myNewMutateFunc: MutationFunction = (v) => v * 100

export type AdderFunction = (v:number) => number;

export function createAdder(num: number) : AdderFunction {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));

