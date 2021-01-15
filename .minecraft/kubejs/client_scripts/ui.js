events.listen('ui.main_menu', event => {
	console.info('Setting main menu!')
    //event.forcedScale = 0
    event.replace(ui => {
        ui.background('uimenu:textures/bg.png')
        // ui.shaderBackground('uimenu:main_menu')
        ui.widgetTexture = 'uimenu:textures/widgets.png'

        //Shader toggle
        //ui.label(l => {
        //    l.height = 5
        //    l.name = Text.of(['Visuals: ', ui.useShaders ? Text.green('✔') : Text.red('✘')])
        //    l.x = 5
        //    l.y = 5
        //    l.action = 'kubejsui:toggle_shaders'
        //    l.hoverText = [
        //      'Toggle visual background'
        //    ]
        //})

        //Singleplayer
        ui.button(b => {
            b.name = text.translate('menu.singleplayer')
            b.width = 150
            b.x = ui.width / 2 - (ui.width / 2.5 * 0.095 + b.width)
            b.y = ui.height / 2 - 48
            b.action = 'minecraft:singleplayer'
            b.shadow = false
        })

        //multiplayer
        ui.button(b => {
            b.name = text.translate('menu.multiplayer')
            b.width = 150
            b.x = ui.width - (ui.width * 2 * 0.095 + b.width)
            b.y = ui.height / 2 - 48
            b.action = 'minecraft:multiplayer'
            b.shadow = false
        })

        //Mods
        ui.button(b => {
            b.name = text.translate('fml.menu.mods')
            b.width = 150
            b.x = ui.width / 2 - (ui.width / 2.5 * 0.095 + b.width)
            b.y = ui.height / 2 - 16
            b.action = 'forge:mod_list'
            b.shadow = false
        })

        //Issue tracker
        //ui.button(b => {
        //    b.name = text.of('Support')
        //    b.width = 75
        //    b.x = ui.width - (ui.width * 0.095 + b.width - 1)
        //    b.y = ui.height / 2 + 4
        //    b.action = 'https://github.com/
        //    b.shadow = false
        //})

        //Options
        ui.button(b => {
            b.name = text.translate('menu.options')
            b.width = 75
            b.x = ui.width - (ui.width * 2 * 0.095 + (b.width * 2))
            b.y = ui.height / 2 - 16
            b.action = 'minecraft:options'
            b.shadow = false
        })

        //Quit
        ui.button(b => {
            b.name = text.of('Quit')
            b.width = 75
            b.x = ui.width - (ui.width * 2 * 0.095 + b.width - 1)
            b.y = ui.height / 2 - 16
            b.action = 'minecraft:quit'
            b.shadow = false
        })

        //Pack name
        //ui.image(i => {
        //    i.height = 169 * 0.244
        //    i.width = 895 * 0.244
        //    i.x = ui.width - (ui.width * 0.12 + i.width - 40)
        //    i.y = ui.height / 2 - 94
        //    i.texture = 'uimenu:textures/packname.png'
        //    i.uv = [1, 1, 254, 254]
        //})

        //Forge version
        ui.label(l => {
            l.height = 10
            l.name = 'Forge Version: ' + mod.getInfo('forge').version
            l.x = ui.width - l.width - 2
            l.y = ui.height - 31
        })

        //Mods loaded
        ui.label(l => {
            l.height = 10
            l.name = mod.list.size() + ' Mods Loaded'
            l.x = ui.width - l.width - 2
            l.y = ui.height - 21
        })

        //Mojang
        ui.label(l => {
            l.height = 10
            l.name = 'Copyright Mojang AB'
            l.x = ui.width - l.width - 2
            l.y = ui.height - 11
        })
    })
})