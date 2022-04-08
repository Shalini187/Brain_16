import { useRef } from "react";

export const alpha = Array.from(Array(8)).map((e, i) => String.fromCharCode(i + 65));

export function removeDuplicates(arr: any, key: string, setRandomArray: Function) {
    let val = arr.map((i: any) => {
        if (i?.value !== key) return i;
    });
    setRandomArray(val);
}

export function randomizeArray(setRandomArray: Function) {
    let randomIndex;
    let array: any = [...alpha, ...alpha];
    for (let i = (array?.length - 1); i > 1; i--) {
        randomIndex = Math.floor(Math.random() * i);
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    let val = array?.map((i: any, n: number) => {
        let obj = { value: i, key: n };
        return obj;
    });
    setRandomArray(val);
};

export function falsyArray(arr: any, setVisible: Function) {
    arr?.map((i: any, k: number) => {
        if (i) setVisible({ [k]: false });
    });
}