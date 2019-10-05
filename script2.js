const board = document.getElementById('board')
for (i = 0; i < 200; i++) {
    const newSquares = document.createElement('div')
    newSquares.className = "square"
    board.appendChild(newSquares)
}

const tetrisShapes = [[4, 5, 14, 15], [5, 15, 25, 35], [5, 4, 6, 15], [5, 6, 14, 15], [4, 5, 15, 16], [4, 14, 24, 25], [5, 15, 24, 25]]
const boardArr = document.getElementsByClassName('square')
let shapeIndex

const fall = () => {
    for (let i = boardArr.length - 1; i >= 0; i--) {
        if (boardArr[i].className === "square occupied") {
            if (boardArr[i + 10].className !== "square occupied dead") {
                boardArr[i + 10].classList.add("occupied")
                boardArr[i].classList.remove("occupied")
            }
        }
    }
}

const stop = () => {
    for (let i = boardArr.length - 1; i >= 0; i--) {
        if (boardArr[i].className === "square occupied") {
            if ((i + 11 > 200) || (boardArr[i + 10].className === "square occupied dead")) {
                for (let i = boardArr.length - 1; i >= 0; i--) {
                    if (boardArr[i].className === "square occupied") {
                        boardArr[i].classList.add("dead")
                    }
                }
            }
        }
    }
}

const moveRight = () => {
    let movableBlockCount = 0
    for (let i = boardArr.length - 1; i >= 0; i--) {
        if (boardArr[i].className === "square occupied") {
            if (((i + 1) % 10 != 0) && (boardArr[i + 1].className != "square occupied dead")) {
                movableBlockCount = movableBlockCount + 1
            }
        }
    }
    if (movableBlockCount === 4) {
        for (let i = boardArr.length - 1; i >= 0; i--) {
            if (boardArr[i].className === "square occupied") {
                boardArr[i + 1].classList.add("occupied")
                boardArr[i].classList.remove("occupied")
            }
        }
        stop()
    }
}

const moveLeft = () => {
    let movableBlockCount = 0
    for (let i = 0; i < boardArr.length; i++) {
        if (boardArr[i].className === "square occupied") {
            if ((i % 10 != 0) && (boardArr[i - 1].className != "square occupied dead")) {
                movableBlockCount = movableBlockCount + 1
            }
        }
    }
    if (movableBlockCount === 4) {
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                boardArr[i - 1].classList.add("occupied")
                boardArr[i].classList.remove("occupied")
            }
        }
        stop()
    }
}

const rotateShape = () => {
    if (shapeIndex === 1) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((tempArr[1] % 10 != 0) && (boardArr[tempArr[1] - 1].className != "square occupied") && (boardArr[tempArr[1] - 1].className != "square occupied dead") && (boardArr[tempArr[1] + 1].className != "square occupied") && (boardArr[tempArr[1] + 1].className != "square occupied dead") && (boardArr[tempArr[1] + 2].className != "square occupied") && (boardArr[tempArr[1] + 2].className != "square occupied dead") && ((tempArr[1] + 1) % 10 != 0) && ((tempArr[1] + 2) % 10 != 0)) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[1] - 1].classList.add('occupied')
            boardArr[tempArr[1] + 1].classList.add('occupied')
            boardArr[tempArr[1] + 2].classList.add('occupied')
            shapeIndex = 11
            return shapeIndex
        }
    }
    if (shapeIndex === 11) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] - 10].className != "square occupied") && (boardArr[tempArr[1] - 10].className != "square occupied dead") && (boardArr[tempArr[1] + 10].className != "square occupied") && (boardArr[tempArr[1] + 10].className != "square occupied dead") && (boardArr[tempArr[1] + 20].className != "square occupied") && (boardArr[tempArr[1] + 20].className != "square occupied dead")) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[1] - 10].classList.add('occupied')
            boardArr[tempArr[1] + 10].classList.add('occupied')
            boardArr[tempArr[1] + 20].classList.add('occupied')
            shapeIndex = 1
            return shapeIndex
        }
    }
    if (shapeIndex === 2) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] - 10].className != "square occupied") && (boardArr[tempArr[1] - 10].className != "square occupied dead")) {
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[1] - 10].classList.add('occupied')
            shapeIndex = 21
            return shapeIndex
        }
    }
    if (shapeIndex === 21) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[2] + 1].className != "square occupied") && (boardArr[tempArr[2] + 1].className != "square occupied dead") && ((tempArr[2] + 1) % 10 != 0)) {
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[2] + 1].classList.add('occupied')
            shapeIndex = 22
            return shapeIndex
        }
    }
    if (shapeIndex === 22) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[2] + 10].className != "square occupied") && (boardArr[tempArr[2] + 10].className != "square occupied dead")) {
            boardArr[tempArr[1]].classList.remove("occupied")
            boardArr[tempArr[2] + 10].classList.add('occupied')
            shapeIndex = 23
            return shapeIndex
        }
    }
    if (shapeIndex === 23) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] - 1].className != "square occupied") && (boardArr[tempArr[1] - 1].className != "square occupied dead") && (tempArr[1] % 10 != 0)) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[1] - 1].classList.add('occupied')
            shapeIndex = 2
            return shapeIndex
        }
    }
    if (shapeIndex === 3) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[0] - 10].className != "square occupied") && (boardArr[tempArr[0] - 10].className != "square occupied dead") && (boardArr[tempArr[0] + 11].className != "square occupied") && (boardArr[tempArr[0] + 11].className != "square occupied dead")) {
            boardArr[tempArr[1]].classList.remove("occupied")
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[0] - 10].classList.add('occupied')
            boardArr[tempArr[0] + 11].classList.add('occupied')
            boardArr[tempArr[0] + 1].classList.add('occupied')
            shapeIndex = 31
            return shapeIndex
        }
    }
    if (shapeIndex === 31) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] + 10].className != "square occupied") && (boardArr[tempArr[1] + 10].className != "square occupied dead") && (boardArr[tempArr[1] + 9].className != "square occupied") && (boardArr[tempArr[1] + 9].className != "square occupied dead") && (tempArr[1] % 10 != 0) && ((tempArr[2] + 1) % 10 != 0)) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[1] + 9].classList.add('occupied')
            boardArr[tempArr[1] + 10].classList.add('occupied')
            shapeIndex = 3
            return shapeIndex
        }
    }
    if (shapeIndex === 4) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] - 10].className != "square occupied") && (boardArr[tempArr[1] - 10].className != "square occupied dead") && (boardArr[tempArr[1] + 9].className != "square occupied") && (boardArr[tempArr[1] + 9].className != "square occupied dead")) {
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[1] + 9].classList.add('occupied')
            boardArr[tempArr[1] - 10].classList.add('occupied')
            shapeIndex = 41
            return shapeIndex
        }
    }
    if (shapeIndex === 41) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[2] + 10].className != "square occupied") && (boardArr[tempArr[2] + 10].className != "square occupied dead") && (boardArr[tempArr[2] + 11].className != "square occupied") && (boardArr[tempArr[2] + 11].className != "square occupied dead") && ((tempArr[2] + 1) % 10 != 0) && (tempArr[1] % 10 != 0)) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[2] + 11].classList.add('occupied')
            boardArr[tempArr[2] + 10].classList.add('occupied')
            shapeIndex = 4
            return shapeIndex
        }
    }
    if (shapeIndex === 5) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] + 1].className != "square occupied") && (boardArr[tempArr[1] + 1].className != "square occupied dead") && (boardArr[tempArr[1] - 1].className != "square occupied") && (boardArr[tempArr[1] - 1].className != "square occupied dead") && (boardArr[tempArr[1] + 9].className != "square occupied dead") && (boardArr[tempArr[1] + 9].className != "square occupied dead") && (tempArr[1] % 10 != 0)) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[1] + 1].classList.add('occupied')
            boardArr[tempArr[1] - 1].classList.add('occupied')
            boardArr[tempArr[1] + 9].classList.add('occupied')
            shapeIndex = 51
            return shapeIndex
        }
    }
    if (shapeIndex === 51) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] + 10].className != "square occupied") && (boardArr[tempArr[1] + 10].className != "square occupied dead") && (boardArr[tempArr[1] - 10].className != "square occupied") && (boardArr[tempArr[1] - 10].className != "square occupied dead") && (boardArr[tempArr[1] - 11].className != "square occupied dead") && (boardArr[tempArr[1] - 11].className != "square occupied dead")) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[1] + 10].classList.add('occupied')
            boardArr[tempArr[1] - 10].classList.add('occupied')
            boardArr[tempArr[1] - 11].classList.add('occupied')
            shapeIndex = 52
            return shapeIndex
        }
    }
    if (shapeIndex === 52) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[2] + 1].className != "square occupied") && (boardArr[tempArr[2] + 1].className != "square occupied dead") && (boardArr[tempArr[2] - 1].className != "square occupied") && (boardArr[tempArr[2] - 1].className != "square occupied dead") && (boardArr[tempArr[2] - 9].className != "square occupied dead") && (boardArr[tempArr[2] - 9].className != "square occupied dead") && ((tempArr[1] + 1) % 10 != 0)) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[1]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[2] + 1].classList.add('occupied')
            boardArr[tempArr[2] - 1].classList.add('occupied')
            boardArr[tempArr[2] - 9].classList.add('occupied')
            shapeIndex = 53
            return shapeIndex
        }
    }
    if (shapeIndex === 53) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[2] + 10].className != "square occupied") && (boardArr[tempArr[2] + 10].className != "square occupied dead") && (boardArr[tempArr[2] - 10].className != "square occupied") && (boardArr[tempArr[2] - 10].className != "square occupied dead") && (boardArr[tempArr[2] + 11].className != "square occupied dead") && (boardArr[tempArr[2] + 11].className != "square occupied dead")) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[1]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[2] + 10].classList.add('occupied')
            boardArr[tempArr[2] - 10].classList.add('occupied')
            boardArr[tempArr[2] + 11].classList.add('occupied')
            shapeIndex = 5
            return shapeIndex
        }
    }
    if (shapeIndex === 6) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] + 1].className != "square occupied") && (boardArr[tempArr[1] + 1].className != "square occupied dead") && (boardArr[tempArr[1] - 1].className != "square occupied") && (boardArr[tempArr[1] - 1].className != "square occupied dead") && (boardArr[tempArr[1] - 11].className != "square occupied dead") && (boardArr[tempArr[1] - 11].className != "square occupied dead") && ((tempArr[1] + 1) % 10 != 0)) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[1] + 1].classList.add('occupied')
            boardArr[tempArr[1] - 1].classList.add('occupied')
            boardArr[tempArr[1] - 11].classList.add('occupied')
            shapeIndex = 61
            return shapeIndex
        }
    }
    if (shapeIndex === 61) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[2] + 10].className != "square occupied") && (boardArr[tempArr[2] + 10].className != "square occupied dead") && (boardArr[tempArr[2] - 10].className != "square occupied") && (boardArr[tempArr[2] - 10].className != "square occupied dead") && (boardArr[tempArr[2] - 9].className != "square occupied dead") && (boardArr[tempArr[2] - 9].className != "square occupied dead")) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[1]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[2] + 10].classList.add('occupied')
            boardArr[tempArr[2] - 10].classList.add('occupied')
            boardArr[tempArr[2] - 9].classList.add('occupied')
            shapeIndex = 62
            return shapeIndex
        }
    }
    if (shapeIndex === 62) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[2] + 1].className != "square occupied") && (boardArr[tempArr[2] + 1].className != "square occupied dead") && (boardArr[tempArr[2] - 1].className != "square occupied") && (boardArr[tempArr[2] - 1].className != "square occupied dead") && (boardArr[tempArr[2] + 11].className != "square occupied dead") && (boardArr[tempArr[2] + 11].className != "square occupied dead") && (tempArr[2] % 10 != 0)) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[1]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[2] + 1].classList.add('occupied')
            boardArr[tempArr[2] - 1].classList.add('occupied')
            boardArr[tempArr[2] + 11].classList.add('occupied')
            shapeIndex = 63
            return shapeIndex
        }
    }
    if (shapeIndex === 63) {
        let tempArr = []
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i].className === "square occupied") {
                tempArr.push(i)
            }
        }
        if ((boardArr[tempArr[1] + 10].className != "square occupied") && (boardArr[tempArr[1] + 10].className != "square occupied dead") && (boardArr[tempArr[1] - 10].className != "square occupied") && (boardArr[tempArr[1] - 10].className != "square occupied dead") && (boardArr[tempArr[1] + 9].className != "square occupied dead") && (boardArr[tempArr[1] + 99].className != "square occupied dead")) {
            boardArr[tempArr[0]].classList.remove("occupied")
            boardArr[tempArr[2]].classList.remove("occupied")
            boardArr[tempArr[3]].classList.remove("occupied")
            boardArr[tempArr[1] + 10].classList.add('occupied')
            boardArr[tempArr[1] - 10].classList.add('occupied')
            boardArr[tempArr[1] + 9].classList.add('occupied')
            shapeIndex = 6
            return shapeIndex
        }
    }
}

const spawnBlock = () => {
    let activeBlockCount = 0
    for (let i = 0; i < boardArr.length; i++) {
        if (boardArr[i].className === "square occupied") {
            activeBlockCount = activeBlockCount + 1
        }
    }
    if (activeBlockCount === 0) {
        shapeIndex = Math.floor(Math.random() * 7)
        for (let i = 0; i < tetrisShapes[shapeIndex].length; i++) {
            boardArr[tetrisShapes[shapeIndex][i]].classList.add("occupied")
        }
        console.log(shapeIndex)
    }
    return shapeIndex
}

const removeRows = () => {
    for (let i = 0; i < 20; i++) {
        let tempArr = []
        for (let j = 0; j < 10; j++) {
            if (boardArr[(i * 10) + j].className === "square occupied dead") {
                tempArr.push((i * 10) + j)
            }
        }
        if (tempArr.length === 10) {
            for (let i = 0; i < tempArr.length; i++) {
                board.removeChild(boardArr[tempArr[i]])
                const newSquare = document.createElement('div')
                newSquare.className = "square"
                board.insertBefore(newSquare, board.firstChild)
            }
        }
    }
}

const fallFaster = () => {
    fall()
    stop()
    removeRows()
    spawnBlock()
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowDown') {
        fallFaster()
    }
})
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowUp') {
        rotateShape()
    }
})
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight') {
        moveRight()
    }
})
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowLeft') {
        moveLeft()
    }
})


mainLoop = () => {
    fall()
    stop()
    removeRows()
    spawnBlock()
    setTimeout(mainLoop, 600)
}

mainLoop()