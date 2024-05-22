export function generateMappings(tileType) {
  return {
    0: () => [
      sprite(`${tileType}-tileset`, { anim: "tl" }),
      area(),
      body({ isStatic: true }),
      offscreen(),
    ],
    1: () => [
      sprite(`${tileType}-tileset`, { anim: "tm" }),
      area(),
      body({ isStatic: true }),
      offscreen(),
    ],
    2: () => [
      sprite(`${tileType}-tileset`, { anim: "tr" }),
      area(),
      body({ isStatic: true }),
      offscreen(),
    ],
    3: () => [
      sprite(`${tileType}-tileset`, { anim: "ml" }),
      area(),
      body({ isStatic: true }),
      offscreen(),
    ],
    4: () => [sprite(`${tileType}-tileset`, { anim: "mm" }), offscreen()],
    5: () => [
      sprite(`${tileType}-tileset`, { anim: "mr" }),
      area(),
      body({ isStatic: true }),
      offscreen(),
    ],
    6: () => [sprite(`${tileType}-tileset`, { anim: "bl" }), offscreen()],
    7: () => [sprite(`${tileType}-tileset`, { anim: "bm" }), offscreen()],
    8: () => [sprite(`${tileType}-tileset`, { anim: "br" }), offscreen()],
    9: () => [
      sprite(`${tileType}-oneway-tileset`, { anim: "tl" }),
      area({ shape: new Rect(vec2(0), 16, 3) }), // hitbox custom
      "passthrough", // è un tag
      body({ isStatic: true }),
      offscreen(),
    ],
    a: () => [
      sprite(`${tileType}-oneway-tileset`, { anim: "tm" }),
      area({ shape: new Rect(vec2(0), 16, 3) }), //rect indica rettangolo
      "passthrough",
      body({ isStatic: true }),
      offscreen(),
    ],
    b: () => [
      sprite(`${tileType}-oneway-tileset`, { anim: "tr" }),
      area({ shape: new Rect(vec2(0), 16, 3) }),
      "passthrough",
      body({ isStatic: true }),
      offscreen(),
    ],
    c: () => [
      sprite(`${tileType}-oneway-tileset`, { anim: "ml" }),
      offscreen(),
    ],
    d: () => [
      sprite(`${tileType}-oneway-tileset`, { anim: "mm" }),
      offscreen(),
    ],
    e: () => [
      sprite(`${tileType}-oneway-tileset`, { anim: "mr" }),
      offscreen(),
    ],
    o: () => [sprite("bridge"), area(), body({ isStatic: true }), offscreen()],
    "@": () => [sprite("coin"), area(), "coin", offscreen()],
    n: () =>[ //*blocco invisibile su cui si può stare
      area({ shape: new Rect(vec2(0), 16, 12) }),
      body({isStatic:true}),
      offscreen(),
      "invisible"
    ], //* un blocco normale su cui puoi camminare è un rettangolo lungo 16 e alto 12
    p:()=>[ //portale segreto viola
      sprite("portalePurple", {anim: "idle" }),
      pos(),
      area({shape: new Rect(vec2(0),16,49)}),
      anchor("bot"),
      offscreen(),
      "Portals"
    ],
    i: () =>[ //*blocco invisibile su cui di passaggio
      area({ shape: new Rect(vec2(0), 16, 12) }),
      body({isStatic:true}),
      offscreen(),
      anchor("right"),
      "Portales"
    ],
    f:()=>[
      sprite("platform", {anim:"l"}),
      area(),
      body({isStatic:true}),
      "piattaforma"
    ],
    g:()=>[
      sprite("platform", {anim:"m"}),
      area(),
      body({isStatic:true}),
      "piattaforma"
    ],
    h:()=>[
      sprite("platform", {anim:"r"}),
      area(),
      body({isStatic:true}),
      "piattaforma"
    ],
    k:()=>[ //portale segreto verde
      sprite("portaleGreen", {anim: "idle" }),
      
      pos(),
      area({shape: new Rect(vec2(0),16,49)}),
      anchor("bot"),
      offscreen(),
      "GPortals"
    ],
    j: () =>[ //*blocco invisibile su cui di passaggio portale verde
      area({ shape: new Rect(vec2(0), 16, 12) }),
      body({isStatic:true}),
      offscreen(),
      anchor("left"),
      "GPortales"
    ],
    z:()=>[
      sprite("button"),
      area(),
      scale(0.04)
    ],
    
  }
}
