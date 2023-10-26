function formatCurr(value) {
    let curr = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value)

    return curr
}

// console.log(formatCurr(123123123123));

module.exports = formatCurr