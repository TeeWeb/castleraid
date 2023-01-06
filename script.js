const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

const KING_WIDTH = 15
const KING_HEIGHT = 15
const UNIT_WIDTH = 10
const UNIT_HEIGHT = 10
const CASTLE_WIDTH = KING_WIDTH * 8

const PLAYER1_ORIGIN_X = 0
const PLAYER1_ORIGIN_Y = 0
const PLAYER1_KING_X = PLAYER1_ORIGIN_X + KING_WIDTH + 10
const PLAYER1_KING_Y = PLAYER1_ORIGIN_Y + KING_HEIGHT + 10
const PLAYER1_CASTLE_LEFT_END = PLAYER1_ORIGIN_X + KING_HEIGHT * 2
const PLAYER1_CASTLE_RIGHT_END = PLAYER1_ORIGIN_Y + KING_WIDTH * 2

const PLAYER2_ORIGIN_X = canvas.width
const PLAYER2_ORIGIN_Y = canvas.height
const PLAYER2_KING_X = PLAYER2_ORIGIN_X - KING_WIDTH - 10
const PLAYER2_KING_Y = PLAYER2_ORIGIN_Y - KING_HEIGHT - 10
const PLAYER2_CASTLE_LEFT_END = PLAYER2_ORIGIN_X - KING_HEIGHT * 2
const PLAYER2_CASTLE_RIGHT_END = PLAYER2_ORIGIN_Y - KING_HEIGHT * 2

const players = {
    player1: {
        name: "player1",
        color: "#0000FF"
    },
    player2: {
        name: "player2",
        color: "#FF0000"
    }
}

const kings = [
    {
        playerName: players.player1.name,
        xCoord: PLAYER1_KING_X,
        yCoord: PLAYER1_KING_Y,
        color: players.player1.color
    },
    {
        playerName: players.player2.name,
        xCoord: PLAYER2_KING_X,
        yCoord: PLAYER2_KING_Y,
        color: players.player2.color
    }
]

const castles = [
    { 
        playerName: "player1",
        origin: {
            x: PLAYER1_ORIGIN_X,
            y: PLAYER1_ORIGIN_Y
        },
        leftWall: {
            start: Math.PI / 3,
            end: Math.PI / 2
        },
        rightWall: {
            start: 0,
            end: Math.PI / 6
        },
        corridorLeft: {
            
        }
    },
    {
        playerName: "player2",
        origin: {
            x: PLAYER2_ORIGIN_X,
            y: PLAYER2_ORIGIN_Y
        },
        leftWall: {
            start: Math.PI,
            end: Math.PI + Math.PI / 6
        },
        rightWall: {
            start: Math.PI + Math.PI / 3,
            end: 1.5 * Math.PI
        }
    }
]

const units = [
    {
        playerColor: players.player1.color,
        x: 100,
        y: 100
    },
    {
        playerColor: players.player1.color,
        x: 250,
        y: 200
    },
    {
        playerColor: players.player2.color,
        x: 275,
        y: 400
    },
    {
        playerColor: players.player2.color,
        x: 400,
        y: 400
    }
]

console.log(ctx)

const drawCastles = () => {
    castles.forEach(castle => {
        // Left Wall
        ctx.beginPath()
        ctx.arc(castle.origin.x, castle.origin.y, CASTLE_WIDTH, castle.leftWall.start, castle.leftWall.end)
        ctx.stroke()
        // Right Wall
        ctx.beginPath()
        ctx.arc(castle.origin.x, castle.origin.y, CASTLE_WIDTH, castle.rightWall.start, castle.rightWall.end)
        ctx.stroke()
    })
}

const drawKings = () => {
    kings.forEach(king => {
        ctx.moveTo(king.xCoord, king.yCoord)
        ctx.beginPath()
        ctx.arc(king.xCoord, king.yCoord, KING_WIDTH, 0, 2 * Math.PI)
        ctx.fillStyle = king.color
        ctx.fill()
        ctx.stroke()
    })
}

const drawUnit = (playerColor, x, y) => {
    ctx.beginPath()
    ctx.arc(x, y, UNIT_WIDTH, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fillStyle = playerColor
    ctx.fill()
}

function drawField() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);
    drawCastles()
    drawKings()
    console.log(units)
    units.forEach(unit => {drawUnit(unit.playerColor, unit.x, unit.y)})
}

drawField();