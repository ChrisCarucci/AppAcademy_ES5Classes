// Your code here

Array.prototype.isEqual =  function(array) {
    return this.reduce((isTrue, el, i) =>
        isTrue && el === array[i], true)
}


