sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 250, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy()
    info.changeLifeBy(-1)
})
let dart: Sprite = null
let bogey: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . a . . a . . . . . . . . . 
. . . a a . a a 9 . . . . . . . 
. . . a a a a a a a . . . . . . 
. . . . a . . a . . . . . . . . 
. . . . . . a a . . . . . . . . 
. . . . . . a . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(30)
controller.moveSprite(spacePlane)
spacePlane.setVelocity(200, 200)
spacePlane.setPosition(63, 20)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . . 
. . . . . . . . . . f b b b b b b b f f c b b b b f . . . . . . . . . . 
. . . . . . . . . . f b b 1 1 1 b b b b b f f b f . . . . . . . . . . . 
. . . . . . . . . . f b 1 1 1 1 1 f f b b b b f f . . . . . . . . . . . 
. . . . . . . . . . f 1 c c c c 1 f f b b b b b c f f . . . . . . . . . 
. . . . . . . . . . f f c 1 c 1 c 1 b b c b c b c c c f . . . . . . . . 
. . . . . . . . . . . f c c 3 3 3 1 b b b c b c b c c c f . . c c c c c 
. . . . . . . . . . . . c 3 3 3 c 1 b b b c b c b c c c c f c d d b b c 
. . . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c d d b c c . 
. . . . . . . . . . . . c 3 3 3 c 1 1 b b b b b c c c c c c b b c c . . 
. . . . . . . . . . . c c 3 3 1 c 1 1 b b b b c c c c c c f b c c f . . 
. . . . . . . . . . . c c 1 3 c 1 1 c b b b c c c c c b b c f c c f . . 
. . . . . . . . . . . c 1 1 1 1 1 1 c b b b f d d d d d c . f b b c f . 
. . . . . . . . . . . . c c 1 1 1 1 f b d b b f d d d c . . . f b b f . 
. . . . . . . . . . . . . . c c c f f f b d b b f c c . . . . . f b b f 
. . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f 
`, SpriteKind.Enemy)
    bogey.setVelocity(-50, 0)
    bogey.setPosition(180, Math.randomRange(10, 110))
})
