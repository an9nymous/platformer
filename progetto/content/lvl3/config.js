export const level3Config = {
    gravity:1400,
    playerSpeed: 400,
    jumpForce: 650,
    nlive:5,
    startPosX: 1500,
    startPosY:100,

    birdRanges: [200, 250, 300, 100, 150, 100],
    birdPositions: [
        () => vec2(2200, 200),
        () => vec2(3000, 100),
        () => vec2(3500, 700),
        () => vec2(4000, 100),
        () => vec2(6000, 200),
        () => vec2(6300, 150),
    ],
}