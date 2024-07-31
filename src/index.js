module.exports = function reverse(n) {
    let str = Math.abs(n).toString().split("").reverse().join("");

    return parseInt(str, 10);
};
