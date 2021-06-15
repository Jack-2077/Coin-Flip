function choice(arr) {
    let randIndx = Math.floor(Math.random() * arr.length)
    return arr[randIndx]
}

export {choice}