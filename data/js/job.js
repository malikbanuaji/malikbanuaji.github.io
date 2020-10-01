const jobChangeLevel = [20, 40, 75, 105];

const jobChangePath = {
  fighter: {
    guard: {
      name: "Guard",
      passive: "paladin",
      minimum_level: 0,
      race: "all",
    },
    warrior: {
      name: "Warrior",
      passive: "swordmaster",
      minimum_level: 0,
      race: "all",
    },
    infantryman: {
      name: "Infantryman",
      passive: "paladin",
      minimum_level: 1,
      race: "all",
    },
    swordsman: {
      name: "Swordsman",
      passive: "swordmaster",
      minimum_level: 1,
      race: "all",
    },
    mercenary: {
      name: "Mercenary",
      passive: "destroyer",
      minimum_level: 1,
      race: "human",
    },
    phalanx: {
      name: "Phalanx",
      passive: "paladin",
      minimum_level: 2,
      race: "all",
    },
    knight: {
      name: "Knight",
      passive: "swordmaster",
      minimum_level: 2,
      race: "all",
    },
    gladiator: {
      name: "Gladiator",
      passive: "destroyer",
      minimum_level: 2,
      race: "human",
    },
    runeknight: {
      name: "Rune Knight",
      passive: "magnus",
      minimum_level: 2,
      race: "elf",
    },
    paladin: {
      name: "Paladin",
      passive: "paladin",
      minimum_level: 3,
      race: "all",
    },
    swordmaster: {
      name: "Sword Master",
      passive: "swordmaster",
      minimum_level: 3,
      race: "all",
    },
    destroyer: {
      name: "Destroyer",
      passive: "destroyer",
      minimum_level: 3,
      race: "human",
    },
    magnus: {
      name: "Magnus",
      passive: "magnus",
      minimum_level: 3,
      race: "elf",
    },
    panzer: {
      name: "Panzer",
      passive: "panzer",
      minimum_level: 3,
      race: "all",
    },
    crusader: {
      name: "Crusader",
      passive: "crusader",
      minimum_level: 3,
      race: "all",
    },
  },
  rogue: {
    // 20
    voyager: {
      minimum_level: 0,
      name: "Voyager",
      passive: "arch_ranger",
      race: "all",
    },
    ruffian: {
      minimum_level: 0,
      name: "Ruffian",
      passive: "entrapper",
      race: "all",
    },
    // 40
    archer: {
      minimum_level: 1,
      name: "Archer",
      passive: "arch_ranger",
      race: "all",
    },
    scout: {
      minimum_level: 1,
      name: "Scout",
      passive: "entrapper",
      race: "all",
    },
    thief: {
      minimum_level: 1,
      name: "Thief",
      passive: "blade_taker",
      race: "human",
    },
    // 75
    ranger: {
      minimum_level: 2,
      name: "Ranger",
      passive: "arch_ranger",
      race: "all",
    },
    treasure_hunter: {
      minimum_level: 2,
      name: "Treasure Hunter",
      passive: "entrapper",
      race: "all",
    },
    assassin: {
      minimum_level: 2,
      name: "Assassin",
      passive: "blade_taker",
      race: "human",
    },
    rune_walker: {
      minimum_level: 2,
      name: "Rune Walker",
      passive: "temper_master",
      race: "elf",
    },
    // 105
    arch_ranger: {
      minimum_level: 3,
      name: "Arch Ranger",
      passive: "arch_ranger",
      race: "all",
    },
    entrapper: {
      minimum_level: 3,
      name: "Entrapper",
      passive: "entrapper",
      race: "all",
    },
    blade_taker: {
      minimum_level: 3,
      name: "Blade Taker",
      passive: "blade_taker",
      race: "human",
    },
    temper_master: {
      minimum_level: 3,
      name: "Temper Master",
      passive: "temper_master",
      race: "elf",
    },
    sniper: {
      minimum_level: 3,
      name: "Sniper",
      passive: "sniper",
      race: "all",
    },
  },

  // Mage

  mage: {
    // 20
    cleric: {
      minimum_level: 0,
      name: "Cleric",
      passive: "cardinal",
      race: "all",
    },
    wizard: {
      minimum_level: 0,
      name: "Wizard",
      passive: "grand_master",
      race: "all",
    },

    // 40
    priest: {
      minimum_level: 1,
      name: "Priest",
      passive: "cardinal",
      race: "all",
    },
    sorcerer: {
      minimum_level: 1,
      name: "Sorcerer",
      passive: "grand_master",
      race: "all",
    },
    monk: {
      minimum_level: 1,
      name: "Monk",
      passive: "soul_arbiter",
      race: "human",
    },
    // 75
    bishop: {
      minimum_level: 2,
      name: "Bishop",
      passive: "cardinal",
      race: "all",
    },
    warlock: {
      minimum_level: 2,
      name: "Warlock",
      passive: "grand_master",
      race: "all",
    },
    inquirer: {
      minimum_level: 2,
      name: "Inquirer",
      passive: "soul_arbiter",
      race: "human",
    },
    elemental_master: {
      minimum_level: 2,
      name: "Elemental Master",
      passive: "rune_master",
      race: "elf",
    },
    // 105
    cardinal: {
      minimum_level: 3,
      name: "Cardinal",
      passive: "cardinal",
      race: "all",
    },
    grand_master: {
      minimum_level: 3,
      name: "Grand Master",
      passive: "grand_master",
      race: "all",
    },
    soul_arbiter: {
      minimum_level: 3,
      name: "Soul Arbiter",
      passive: "soul_arbiter",
      race: "human",
    },
    rune_master: {
      minimum_level: 3,
      name: "Rune Master",
      passive: "rune_master",
      race: "elf",
    },
    necromancer: {
      minimum_level: 3,
      name: "Necromancer",
      passive: "necromancer",
      race: "all",
    },
  },
};

const Job = {
  jobChangeLevel,
  jobChangePath,
};
