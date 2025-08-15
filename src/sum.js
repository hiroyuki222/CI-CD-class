function main(a, b) {
    return Sum(a, b);
}

function Sum(a, b) {
    return a + b;
}

module.exports = main;

if (require.main === module) {
    console.log(main(10, 20));
} 