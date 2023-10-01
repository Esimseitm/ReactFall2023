var expect = function(val) {
    const param = val
    return {
        toBe: (value) => (value===param)? true: (() => { throw new Error("Not Equal"); })(),
        notToBe: (value) => (value!==param)? true: (() => { throw new Error("Equal"); })(),
    }
};