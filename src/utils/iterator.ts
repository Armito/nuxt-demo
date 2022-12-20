export function makeIterator(arr: unknown[]) {
    let nextIndex = 0;
    return {
        next() {
            return nextIndex < arr.length
                ? { value: arr[nextIndex++], done: false }
                : { value: undefined, done: true };
        },
    };
}

export function asyncIterator(arr: unknown[]) {
    let nextIndex = 0;
    return {
        [Symbol.asyncIterator]() {
            return {
                next() {
                    if (nextIndex < arr.length) {
                        return new Promise((resolve) => {
                            setTimeout(
                                () =>
                                    resolve({
                                        value: arr[nextIndex++],
                                        done: false,
                                    }),
                                1000,
                            );
                        });
                    } else {
                        return { value: undefined, done: true };
                    }
                },
            };
        },
    };
}

function promise(data: string, delay: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}
function printHello() {
    return promise('Hello', 1000);
}
function printWorld() {
    return promise('World', 1000);
}
export async function* gene() {
    yield printHello();
    yield printWorld();
}
