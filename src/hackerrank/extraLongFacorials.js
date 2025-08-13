const n = 10

function factorial(n) {
    const bigN= BigInt(n);
    if (bigN <= 1n) return 1n;
    return bigN * factorial(bigN - 1n);
}

console.log(factorial(n))