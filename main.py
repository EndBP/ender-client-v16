# if you see this, Hi!

def on_on_chat(num1):
    player.teleport(pos(num1, 0, 0))
player.on_chat("cx", on_on_chat)

def on_on_chat2(num1):
    player.teleport(pos(0, num1, 0))
player.on_chat("cy", on_on_chat2)

def on_on_chat3():
    player.say("cx number - teleport on the x axis ")
    player.say("cy number - same as cx but on the y axis")
    player.say("cz number - same as cx but on the z axis")
    player.say("scaffold - places blocks under you")
    player.say("day - sets time to day")
    player.say("dia - gives you 10 diamonds")
    player.say("deez -  nuts")
    player.say("type help2 for next page")
player.on_chat("help", on_on_chat3)

def on_on_chat4():
    global Scaffoldhack
    if Scaffoldhack == 1:
        Scaffoldhack = 0
        player.say("Scaffold off")
    else:
        Scaffoldhack = 1
        player.say("Scaffold on.")
player.on_chat("scaffold", on_on_chat4)

def on_on_chat5():
    player.say("Gave you 16 steak.")
    mobs.give(mobs.target(NEAREST_PLAYER), COOKED_BEEF, 16)
player.on_chat("food", on_on_chat5)

def on_on_chat6():
    player.say("nuts")
    mobs.give(mobs.target(NEAREST_PLAYER), POTATO, 1)
player.on_chat("deez", on_on_chat6)

def on_on_chat7(num1):
    player.teleport(pos(0, 0, num1))
player.on_chat("cz", on_on_chat7)

def on_forever():
    if Scaffoldhack == 1:
        blocks.place(DIRT, pos(0, -1, 0))
loops.forever(on_forever)

def on_on_chat8():
    player.say("Gave you 10 diamonds.")
    mobs.give(mobs.target(NEAREST_PLAYER), DIAMOND, 10)
player.on_chat("dia", on_on_chat8)

def on_on_chat9():
    player.say("Set time to day.")
    gameplay.time_set(gameplay.time(DAY))
player.on_chat("day", on_on_chat9)

def on_on_chat10():
    player.say("food - gives you 16 cooked beef")
player.on_chat("help2", on_on_chat10)

Scaffoldhack = 0
player.say("EDU CLIENT V1.1")
player.say("type help for a list of commands")