let A = 0
let B = 0
let C = 0
let D = 0
let Senha: Image = null
let senha1: Image = null
let senha2: Image = null
let senha3: Image = null
input.onButtonPressed(Button.A, function () {
    A = randint(1, 5)
    B = randint(1, 5)
    C = randint(1, 5)
    D = randint(1, 5)
})
input.onButtonPressed(Button.B, function () {
    Senha.scrollImage(1, 200)
    senha1.scrollImage(1, 200)
    senha2.scrollImage(1, 200)
    senha3.scrollImage(1, 200)
})
basic.forever(function () {
    if (A == 1) {
        Senha = images.createImage(`
            . # # # .
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            `)
    }
    if (A == 2) {
        Senha = images.createImage(`
            # # # # .
            # . . . #
            # # # # #
            # . . . #
            # # # # .
            `)
    }
    if (A == 3) {
        Senha = images.createImage(`
            . # # # #
            # . . . .
            # . . . .
            # . . . .
            . # # # #
            `)
    }
    if (A == 4) {
        Senha = images.createImage(`
            # # # # .
            # . . . #
            # . . . #
            # . . . #
            # # # # .
            `)
    }
    if (A == 4) {
        Senha = images.createImage(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
    }
})
basic.forever(function () {
    if (B == 1) {
        senha1 = images.createImage(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (B == 2) {
        senha1 = images.createImage(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
    if (B == 3) {
        senha1 = images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (B == 4) {
        senha1 = images.createImage(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (B == 4) {
        senha1 = images.createImage(`
            . . # # .
            . # . . .
            . # # # .
            . . . # .
            . # # . .
            `)
    }
})
basic.forever(function () {
    if (C == 1) {
        senha2 = images.createImage(`
            # # # # .
            # . . . .
            # # # # .
            # . . . .
            # . . . .
            `)
    }
    if (C == 2) {
        senha2 = images.createImage(`
            # # # # .
            # . . . .
            # . # # #
            # . . . #
            # # # # .
            `)
    }
    if (C == 3) {
        senha2 = images.createImage(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    }
    if (C == 4) {
        senha2 = images.createImage(`
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (C == 5) {
        senha2 = images.createImage(`
            . . # . .
            . . # . .
            . . # . .
            # . # . .
            # # # . .
            `)
    }
})
basic.forever(function () {
    if (D == 1) {
        senha3 = images.createImage(`
            . . . # .
            . . # . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (D == 2) {
        senha3 = images.createImage(`
            . # # # .
            . . . # .
            . # # # #
            . . . # .
            . . . # .
            `)
    }
    if (D == 3) {
        senha3 = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (D == 4) {
        senha3 = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (D == 4) {
        senha3 = images.createImage(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
})
