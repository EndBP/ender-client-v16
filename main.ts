// This is a updated version of EDU Client
player.onChat("cx", function (item) {
    player.teleport(pos(item, 0, 0))
})
player.onChat("Speed", function () {
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 99999, 23)
})
player.onChat("night", function () {
    player.say("Set time to night.")
    gameplay.timeSet(gameplay.time(NIGHT))
})
player.onChat("give", function (item, Amount) {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    blocks.blockById(item),
    Amount
    )
})
player.onChat("Only in ohio sigma", function () {
    blocks.print(
    "Among us",
    RED_WOOL,
    pos(0, 0, 0),
    WEST
    )
})
player.onChat("Gstairs", function () {
    shapes.line(
    GLASS,
    pos(0, 0, 0),
    pos(10, 10, 10)
    )
})
player.onChat("NoEffects", function () {
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
})
player.onChat("xp", function (num1) {
    gameplay.xp(num1, mobs.target(LOCAL_PLAYER))
})
player.onChat("HPboost", function () {
    mobs.applyEffect(HEALTH_BOOST, mobs.target(NEAREST_PLAYER), 99999, 20)
})
player.onChat("NoEffect", function () {
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
})
player.onChat("Haste", function () {
    mobs.applyEffect(HASTE, mobs.target(NEAREST_PLAYER), 99999, 255)
})
player.onChat("tntX", function () {
    blocks.fill(
    TNT,
    pos(1, 1, 1),
    pos(10, 10, 10),
    FillOperation.Replace
    )
})
player.onChat("lorenz", function () {
    x2 = 10
    y = 0
    z = 10
    p = player.position()
    while (true) {
        ax = x2
        ay = y
        az = z
        x2 = sigma * (ay - ax) * deltat + ax
        y = (ax * (ro - az) - ay) * deltat + ay
        z = (ax * ay - beta * az) * deltat + az
        pb = positions.add(
        p,
        pos(x2 * 3, 10, z * 3)
        )
        blocks.place(block, pb)
    }
})
player.onChat("ObCircle", function () {
    shapes.circle(
    OBSIDIAN,
    pos(0, 0, 0),
    25,
    Axis.Y,
    ShapeOperation.Replace
    )
})
player.onChat("Gcircle", function () {
    shapes.circle(
    GLASS,
    pos(5, 0, 0),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
    player.onChat("Gcircle", function () {
        shapes.circle(
            GLASS,
            pos(0, 75, 0),
            15,
            Axis.Y,
            ShapeOperation.Replace
        )
    })
mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 90000, 255)
})
player.onChat("portal", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    OBSIDIAN,
    16
    )
    loops.pause(50)
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    FLINT_AND_STEEL,
    1
    )
})
player.onChat("EC2", function () {
    player.say("food - gives you 16 cooked beef")
    player.say("deez -  nuts")
    player.say("cw - clear weather")
    player.say("portal - gives you 16 obsidian and 1 flint and steel")
    player.say("kit - gives you full diamond armor and tools")
    player.say("gmc - sets gamemode to creative")
    player.say("gms - sets gamemode to survival")
    player.say("bedrock - gives you a stack of bedrock")
    player.say("barrier - gives you a stack of barrier blocks")
    player.say("type ec3 for next page")
})
player.onChat("Netherite", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_INGOT,
    10
    )
})
player.onChat("Grasscircle", function () {
    shapes.circle(
    GRASS,
    pos(5, 0, 0),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
})
player.onChat("killn", function () {
    mobs.kill(
    mobs.target(NEAREST_PLAYER)
    )
})
player.onChat("Invis", function () {
    mobs.applyEffect(INVISIBILITY, mobs.target(LOCAL_PLAYER), 99999, 255)
})
player.onChat("fullbright", function () {
    mobs.applyEffect(NIGHT_VISION, mobs.target(LOCAL_PLAYER), 90000, 255)
})
player.onChat("gms", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("stopscaffold", function () {
    Scaffoldhack = 0
    player.say("Scaffold off.")
})
player.onChat("Ateleport", function () {
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    pos(0, 150, 0)
    )
})
player.onChat("jump", function () {
    mobs.applyEffect(WATER_BREATHING, mobs.target(NEAREST_PLAYER), 10, 1)
})
player.onChat("cw", function () {
    gameplay.setWeather(CLEAR)
})
player.onChat("cy", function (item) {
    player.teleport(pos(0, item, 0))
})
player.onChat("scaffold", function () {
    if (Scaffoldhack == 1) {
        Scaffoldhack = 0
        player.say("Scaffold off")
    } else {
        Scaffoldhack = 1
        player.say("Scaffold on.")
    }
    while (Scaffoldhack == 1) {
        blocks.place(Blockid, pos(0, -1, 0))
    }
})
player.onChat("cz", function (item) {
    player.teleport(pos(0, 0, item))
})
player.onChat("wipeout", function () {
    blocks.fill(
    AIR,
    pos(-50, 0, -50),
    pos(50, 1, 50),
    FillOperation.Destroy
    )
})
player.onChat("food", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    COOKED_BEEF,
    16
    )
})
player.onChat("EC4", function () {
    player.say("§mxp (amount) - gives you xp")
    player.say("§mday - sets time to day")
    player.say("§mSpeed - makes you faster")
    player.say("§mHaste - Gives you haste (Breaks blocks faster)")
    player.say("§mwallx - improved version of gwall")
    player.say("§mObCircle - this places a extremely big circle")
    player.say("§mInvis - Makes you invisible")
    player.say("§mFireRes - Gives fire resistance")
    player.say("§mHPBoost - Gives you extra rows of hearts")
    player.say("§mNetherite - gives 10 netherite")
    player.say("§mjumpx - gives jump boost")
    player.say("§mstrength - hulk smash")
    player.say("type  ec5 for next page")
})
player.onChat("deez", function () {
    player.say("nuts")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    POTATO,
    1
    )
})
player.onChat("EC1", function () {
    player.say("cx number - teleport on the x axis ")
    player.say("cy number - same as cx but on the y axis")
    player.say("cz number - same as cx but on the z axis")
    player.say("scaffold - places blocks under you")
    player.say("stopscaffold - stops scaffold")
    player.say("give itemid amount - gives you any item")
    player.say("link to id list: https://www.digminecraft.com/lists/item_id_list_edu.php")
    player.say("sblock blockid - changes scaffold block")
    player.say("dia - gives you 10 diamonds")
    player.say("type ec2 for next page")
})
player.onChat("gmc", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("MaxKit", function () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "Received", "blud used maxkit lmao")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_HELMET,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_CHESTPLATE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_LEGGINGS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_BOOTS,
    1
    )
    mobs.enchant(
    mobs.target(LOCAL_PLAYER),
    "protection",
    4
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_SWORD,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ENCHANTED_APPLE,
    64
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    TOTEM,
    1
    )
})
// everything in EC4 is Ender Client 1.5
player.onChat("dia", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND,
    10
    )
})
player.onChat("earthquake", function () {
    center = positions.add(
    player.position(),
    pos(-30, 0, 0)
    )
    for (let index = 0; index < 30; index++) {
        center = positions.add(
        center,
        pos(1, 0, Math.randomRange(0, 2))
        )
        blocks.fill(
        AIR,
        positions.add(
        center,
        pos(0, 0, -1)
        ),
        positions.add(
        center,
        pos(0, -4, 1)
        ),
        FillOperation.Replace
        )
        blocks.place(LAVA, positions.add(
        center,
        pos(0, -3, 0)
        ))
    }
})
player.onChat("Strength", function () {
    mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 99999, 255)
})
player.onChat("Bsphere", function () {
    shapes.sphere(
    LIGHT_BLUE_CONCRETE,
    pos(0, 0, 0),
    4,
    ShapeOperation.Replace
    )
})
player.onChat("EC5", function () {
    player.say("tntX - spawns 1,000 tnt")
    player.say("earthquake - summons an earthquake")
    player.say("grid - Turns the ground into grids")
    player.say("wipeout - breaks any block that is within X50 and Z50")
    player.say("lorenzo - makes something in the air (I actually don't know)")
    player.say("fish - Gives you waterbreathing")
    player.say("This is mostly likely the last b")
})
player.onChat("sblock", function (num1) {
    Blockid = num1
})
player.onChat("day", function () {
    player.say("Set time to day.")
    gameplay.timeSet(gameplay.time(DAY))
})
player.onChat("Gwall", function () {
    shapes.line(
    GLASS,
    pos(0, 0, 0),
    pos(0, 10, 0)
    )
})
player.onChat("barrier", function () {
    player.execute(
    "give @s barrier 64"
    )
})
// https://www.youtube.com/watch?v=IIJM3S9H5m0
player.onChat("kit", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_CHESTPLATE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_HELMET,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_BOOTS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_LEGGINGS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_SWORD,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_PICKAXE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_AXE,
    1
    )
})
player.onChat("grid", function () {
    for (let index2 = 0; index2 <= 19; index2++) {
        x = index2 * 3
        blocks.fill(
        AIR,
        pos(x, -4, 0),
        pos(x, 5, 60),
        FillOperation.Replace
        )
        blocks.fill(
        AIR,
        pos(0, -4, x),
        pos(60, 5, x),
        FillOperation.Replace
        )
    }
})
player.onChat("wallx", function () {
    builder.teleportTo(pos(0, 0, 0))
    builder.raiseWall(BEDROCK, 100)
})
player.onChat("Gsphere", function () {
    shapes.sphere(
    GLASS,
    pos(0, 0, 0),
    5,
    ShapeOperation.Replace
    )
})
player.onChat("bedrock", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BEDROCK,
    64
    )
})
player.onChat("FireRes", function () {
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(LOCAL_PLAYER), 99999, 255)
})
player.onChat("jumpx", function () {
    mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 99999, 6)
})
player.onChat("EC3", function () {
    player.say("Killn - Kills nearest player")
    player.say("night - Turns time to night")
    player.say("gwall - Builds a wall")
    player.say("Gcircle - Makes a circle ")
    player.say("MaxKit - Netherite armor")
    player.say("Gsphere - glass sphere")
    player.say("Bsphere - Blue concrete sphere")
    player.say("Ateleport - Teleports everyone 150 blocks up. ")
    player.say("NoEffects - Clears all effects from you")
    player.say("Fullbright - gives you night vision for 600 seconds")
    player.say("Type ec4 for next page")
})
let x = 0
let center: Position = null
let pb: Position = null
let az = 0
let ay = 0
let ax = 0
let p: Position = null
let z = 0
let y = 0
let x2 = 0
let block = 0
let beta = 0
let ro = 0
let sigma = 0
let deltat = 0
let Scaffoldhack = 0
let Blockid = 0
let item = DIRT
Blockid = 3
Scaffoldhack = 0
player.say("type ec1 for a list of commands")
gameplay.title(mobs.target(LOCAL_PLAYER), "§uEnder Client 1.6 ", "§mMade by EndBP on Github")
deltat = 0.01
sigma = 10
ro = 28
beta = 2.6667
block = GLOWSTONE
player.onChat("Credits", function () {
    player.say("Discord:nbp.")
    player.say("Github: EndBP")
    player.say("")    
})