function superbowlWin(arrayOfObjects) {
 const fun = arrayOfObjects.find((object) => object.result === "W" )
 console.log(fun)
    if (fun === undefined) {
        return undefined
    } else {
        return fun.year
    }
}
