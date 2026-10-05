const originalPrice = [100,250,200,80]

const discountPrice = originalPrice.map((item) => {
    return item * 0.9
})

console.log(discountPrice)