const removeFromArray = function (arr,...toDelete) {

    const newArr = arr.filter(el=> !toDelete.includes(el))
    return newArr
}

removeFromArray([1, 22], 13, 22, 13)
// Do not edit below this line
module.exports = removeFromArray
