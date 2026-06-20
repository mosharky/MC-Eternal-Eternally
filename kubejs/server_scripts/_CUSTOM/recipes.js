ServerEvents.recipes(e => {

    e.custom({
        type: 'tconstruct:alloy',
        inputs: [
            { amount: 250, fluid: 'constructs_casting:arcane_essence' },
            { amount: 100, fluid: 'thermal:redstone' },
            { amount: 90, tag: 'forge:molten_copper' }
        ],
        conditions: [
            { type: 'forge:mod_loaded', modid: 'cataclysm_spellbooks' }
        ],
        result: { amount: 250, fluid: 'constructs_casting:technomancy_essence' },
        temperature: 700
    }).id('constructs_casting:smeltery/alloys/technomancy_essence')

    e.remove({ id: /constructs_casting:smeltery\/melting\/.*redstone.*/ })

})