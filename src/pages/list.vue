<template>
    <div>
        <h1>欢迎来到易师傅的列表页面</h1>
        <ListItem></ListItem>
    </div>
</template>

<script setup>
import { makeIterator, asyncIterator, gene } from '@/utils/iterator';

const Iter = makeIterator([1, 2, 3]);
console.log(Iter.next());
console.log(Iter.next());
console.log(Iter.next());
console.log(Iter.next());
console.log(Iter.next());

// const AsyncIter = asyncIterator([1, 2, 3])[Symbol.asyncIterator]();
// console.log(await AsyncIter.next());
// console.log(await AsyncIter.next());
// console.log(await AsyncIter.next());
// console.log(await AsyncIter.next());
// console.log(await AsyncIter.next());

// async function runner() {
//     for await (const i of asyncIterator([1, 2, 3])) {
//         console.log(i);
//     }
// }
// runner();

const iter = gene();
iter.next().then((val) => {
    console.log(val);
});
</script>
