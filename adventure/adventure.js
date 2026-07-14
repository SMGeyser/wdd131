const spellbook = [
  {
    id: "acid_splash",
    name: "Acid Splash",
    level: 0,
    school: "Conjuration",
    range: "60 feet",
    classes: ["Sorcerer", "Wizard"],
    desc: "You hurl a bubble of acid. Choose a creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 Acid damage."
  },
  {
    id: "aid",
    name: "Aid",
    level: 2,
    school: "Abjuration",
    range: "30 feet",
    classes: ["Cleric", "Paladin"],
    desc: "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration of 8 hours."
  },
  {
    id: "alarm",
    name: "Alarm",
    level: 1,
    school: "Abjuration",
    range: "30 feet",
    classes: ["Ranger", "Wizard"],
    desc: "You set a ward to alert you to intruders. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area."
  },
  {
    id: "animal_messenger",
    name: "Animal Messenger",
    level: 2,
    school: "Enchantment",
    range: "30 feet",
    classes: ["Bard", "Druid", "Ranger"],
    desc: "By means of this spell, you use a Tiny beast to deliver a message. You specify a location, which you must have visited, and a recipient. The beast travels for the duration of 24 hours toward the specified location."
  },
  {
    id: "bane",
    name: "Bane",
    level: 1,
    school: "Enchantment",
    range: "30 feet",
    classes: ["Bard", "Cleric"],
    desc: "Up to three creatures of your choice that you can see within range must make a Charisma saving throw. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled."
  },
  {
    id: "banishment",
    name: "Banishment",
    level: 4,
    school: "Abjuration",
    range: "60 feet",
    classes: ["Cleric", "Paladin", "Sorcerer", "Warlock", "Wizard"],
    desc: "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane."
  },
  {
    id: "barkskin",
    name: "Barkskin",
    level: 2,
    school: "Transmutation",
    range: "Touch",
    classes: ["Druid", "Ranger"],
    desc: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."
  },
  {
    id: "bless",
    name: "Bless",
    level: 1,
    school: "Enchantment",
    range: "30 feet",
    classes: ["Cleric", "Paladin"],
    desc: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the total."
  },
  {
    id: "blight",
    name: "Blight",
    level: 4,
    school: "Necromancy",
    range: "30 feet",
    classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
    desc: "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw, taking 8d8 Necrotic damage on a failed save, or half as much on a successful one."
  },
  {
    id: "burning_hands",
    name: "Burning Hands",
    level: 1,
    school: "Evocation",
    range: "Self (15-foot cone)",
    classes: ["Sorcerer", "Wizard"],
    desc: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw, taking 3d6 Fire damage on a failed save."
  },
  {
    id: "charm_person",
    name: "Charm Person",
    level: 1,
    school: "Enchantment",
    range: "30 feet",
    classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"],
    desc: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails, it is Charmed by you until the spell ends."
  },
  {
    id: "chill_touch",
    name: "Chill Touch",
    level: 0,
    school: "Necromancy",
    range: "120 feet",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    desc: "You create a ghostly, skeletal hand in the space of a creature within range to assail it with the chill of the grave. Make a ranged spell attack against the creature. On a hit, the target takes 1d8 Necrotic damage, and it can't regain hit points until the start of your next turn."
  },
  {
    id: "color_spray",
    name: "Color Spray",
    level: 1,
    school: "Illusion",
    range: "Self (15-foot cone)",
    classes: ["Sorcerer", "Wizard"],
    desc: "A vivid array of flashing, colored lights springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can affect. Creatures in a 15-foot cone are affected in ascending order of their current hit points, becoming Blinded until the end of your next turn."
  },
  {
    id: "command",
    name: "Command",
    level: 1,
    school: "Enchantment",
    range: "60 feet",
    classes: ["Cleric", "Paladin"],
    desc: "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Common commands include Approach, Drop, Flee, Grovel, or Halt."
  },
  {
    id: "comprehend_languages",
    name: "Comprehend Languages",
    level: 1,
    school: "Divination",
    range: "Self",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    desc: "For the duration of 1 hour, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written."
  },
  {
    id: "counterspell",
    name: "Counterspell",
    level: 3,
    school: "Abjuration",
    range: "60 feet",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    desc: "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability (DC equals 10 + the spell's level)."
  },
  {
    id: "cure_wounds",
    name: "Cure Wounds",
    level: 1,
    school: "Abjuration",
    range: "Touch",
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
    desc: "A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier. This spell has no effect on undead or constructs."
  },
  {
    id: "dancing_lights",
    name: "Dancing Lights",
    level: 0,
    school: "Illusion",
    range: "120 feet",
    classes: ["Bard", "Sorcerer", "Wizard"],
    desc: "You create up to four torch-sized lights within range, making them appear as lanterns, torches, or glowing orbs. The lights dim after 1 minute. As a bonus action on your turn, you can move them up to 60 feet to a new spot within range."
  },
  {
    id: "darkvision",
    name: "Darkvision",
    level: 2,
    school: "Transmutation",
    range: "Touch",
    classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
    desc: "You touch a willing creature to grant it the ability to see in the dark. For the duration of 8 hours, that creature has darkvision out to a distance of 60 feet."
  },
  {
    id: "daylight",
    name: "Daylight",
    level: 3,
    school: "Evocation",
    range: "60 feet",
    classes: ["Cleric", "Druid", "Paladin", "Ranger"],
    desc: "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled."
  },
  {
    id: "detect_magic",
    name: "Detect Magic",
    level: 1,
    school: "Divination",
    range: "Self",
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
    desc: "For the duration of 10 minutes, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic."
  },
  {
    id: "dimension_door",
    name: "Dimension Door",
    level: 4,
    school: "Conjuration",
    range: "500 feet",
    classes: ["Bard", "Warlock", "Wizard"],
    desc: "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. You can bring along objects as long as their weight doesn't exceed what you can carry, plus one willing creature of your size or smaller."
  },
  {
    id: "disguise_self",
    name: "Disguise Self",
    level: 1,
    school: "Illusion",
    range: "Self",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    desc: "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends 1 hour later. You can seem 1 foot shorter or taller and can appear thin, fat, or in between."
  },
  {
    id: "disintegrate",
    name: "Disintegrate",
    level: 6,
    school: "Transmutation",
    range: "60 feet",
    classes: ["Sorcerer", "Wizard"],
    desc: "A thin green ray springs from your pointing finger to a target that you can see within range. A target must succeed on a Dexterity saving throw or take 10d6 + 40 Force damage. If this damage reduces the target to 0 hit points, it is entirely disintegrated."
  },
  {
    id: "divine_favor",
    name: "Divine Favor",
    level: 1,
    school: "Evocation",
    range: "Self",
    classes: ["Paladin"],
    desc: "Your prayer empowers you with divine radiance. Until the spell ends 1 minute later, your weapon attacks deal an extra 1d4 Radiant damage on a hit."
  },
  {
    id: "eldritch_blast",
    name: "Eldritch Blast",
    level: 0,
    school: "Evocation",
    range: "120 feet",
    classes: ["Warlock"],
    desc: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Force damage."
  },
  {
    id: "entangle",
    name: "Entangle",
    level: 1,
    school: "Conjuration",
    range: "90 feet",
    classes: ["Druid", "Ranger"],
    desc: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration of 1 minute, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be Restrained."
  },
  {
    id: "expeditious_retreat",
    name: "Expeditious Retreat",
    level: 1,
    school: "Transmutation",
    range: "Self",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    desc: "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends 10 minutes later, you can take the Dash action."
  },
  {
    id: "faerie_fire",
    name: "Faerie Fire",
    level: 1,
    school: "Illusion",
    range: "60 feet",
    classes: ["Bard", "Druid"],
    desc: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light. Any creature in the area when the spell is cast is also outlined if it fails a Dexterity saving throw. Attacks against an outlined target have advantage."
  },
  {
    id: "feather_fall",
    name: "Feather Fall",
    level: 1,
    school: "Transmutation",
    range: "60 feet",
    classes: ["Bard", "Sorcerer", "Wizard"],
    desc: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends 1 minute later. If the creature lands before the spell ends, it takes no falling damage and can land on its feet."
  },
  {
    id: "fire_bolt",
    name: "Fire Bolt",
    level: 0,
    school: "Evocation",
    range: "120 feet",
    classes: ["Sorcerer", "Wizard"],
    desc: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried."
  },
  {
    id: "fireball",
    name: "Fireball",
    level: 3,
    school: "Evocation",
    range: "150 feet",
    classes: ["Sorcerer", "Wizard"],
    desc: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw, taking 8d6 Fire damage on a failed save."
  },
  {
    id: "fly",
    name: "Fly",
    level: 3,
    school: "Transmutation",
    range: "Touch",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    desc: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration of 10 minutes. When the spell ends, the target falls if it is still aloft, unless it has another way of staying airborne."
  },
  {
    id: "guidance",
    name: "Guidance",
    level: 0,
    school: "Divination",
    range: "Touch",
    classes: ["Cleric", "Druid"],
    desc: "You touch one willing creature. Once before the spell ends 1 minute later, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check."
  },
  {
    id: "guiding_bolt",
    name: "Guiding Bolt",
    level: 1,
    school: "Evocation",
    range: "120 feet",
    classes: ["Cleric"],
    desc: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 Radiant damage, and the next attack roll made against this target before the end of your next turn has advantage."
  },
  {
    id: "haste",
    name: "Haste",
    level: 3,
    school: "Transmutation",
    range: "30 feet",
    classes: ["Sorcerer", "Wizard"],
    desc: "Choose a willing creature that you can see within range. Until the spell ends 1 minute later, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns."
  },
  {
    id: "healing_word",
    name: "Healing Word",
    level: 1,
    school: "Abjuration",
    range: "60 feet",
    classes: ["Bard", "Cleric", "Druid"],
    desc: "A creature of your choice that you can see within range regains hit points equal to 2d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
  },
  {
    id: "hold_person",
    name: "Hold Person",
    level: 2,
    school: "Enchantment",
    range: "60 feet",
    classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
    desc: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be Paralyzed for the duration of 1 minute. At the end of each of its turns, the target can make another Wisdom saving throw to break the effect."
  },
  {
    id: "hunter_mark",
    name: "Hunter's Mark",
    level: 1,
    school: "Divination",
    range: "90 feet",
    classes: ["Ranger"],
    desc: "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom check you make to find it."
  },
  {
    id: "inflict_wounds",
    name: "Inflict Wounds",
    level: 1,
    school: "Necromancy",
    range: "Touch",
    classes: ["Cleric"],
    desc: "Make a melee spell attack against a creature you can touch. On a hit, the target takes 3d10 Necrotic damage."
  },
  {
    id: "invisibility",
    name: "Invisibility",
    level: 2,
    school: "Illusion",
    range: "Touch",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    desc: "A creature you touch becomes Invisible until the spell ends 1 hour later. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends early if the target attacks or casts a spell."
  },
  {
    id: "lesser_restoration",
    name: "Lesser Restoration",
    level: 2,
    school: "Abjuration",
    range: "Touch",
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
    desc: "You touch a creature and can end one disease or one condition afflicting it. The condition can be Blinded, Deafened, Paralyzed, or Poisoned."
  },
  {
    id: "lightning_bolt",
    name: "Lightning Bolt",
    level: 3,
    school: "Evocation",
    range: "Self (100-foot line)",
    classes: ["Sorcerer", "Wizard"],
    desc: "A stroke of electrical energy forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw, taking 8d6 Lightning damage on a failed save."
  },
  {
    id: "mage_armor",
    name: "Mage Armor",
    level: 1,
    school: "Abjuration",
    range: "Touch",
    classes: ["Sorcerer", "Wizard"],
    desc: "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss it."
  },
  {
    id: "mage_hand",
    name: "Mage Hand",
    level: 0,
    school: "Conjuration",
    range: "30 feet",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    desc: "A spectral, floating hand appears at a point you choose within range. The hand lasts for 1 minute or until you dismiss it as an action. You can use your action to control the hand to manipulate an object, open an unlocked door, or stow an item."
  },
  {
    id: "magic_missile",
    name: "Magic Missile",
    level: 1,
    school: "Evocation",
    range: "120 feet",
    classes: ["Sorcerer", "Wizard"],
    desc: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several."
  },
  {
    id: "minor_illusion",
    name: "Minor Illusion",
    level: 0,
    school: "Illusion",
    range: "30 feet",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    desc: "You create a sound or an image of an object within range that lasts for 1 minute. If you create a sound, its volume can range from a whisper to a scream. If you create an image, it must be no larger than a 5-foot cube."
  },
  {
    id: "misty_step",
    name: "Misty Step",
    level: 2,
    school: "Conjuration",
    range: "Self",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    desc: "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see."
  },
  {
    id: "pass_without_trace",
    name: "Pass Without Trace",
    level: 2,
    school: "Abjuration",
    range: "Self",
    classes: ["Druid", "Ranger"],
    desc: "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration of 1 hour, each creature you choose within 30 feet of you has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means."
  },
  {
    id: "ray_of_frost",
    name: "Ray of Frost",
    level: 0,
    school: "Evocation",
    range: "60 feet",
    classes: ["Sorcerer", "Wizard"],
    desc: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 Cold damage, and its speed is reduced by 10 feet until the start of your next turn."
  },
  {
    id: "sacred_flame",
    name: "Sacred Flame",
    level: 0,
    school: "Evocation",
    range: "60 feet",
    classes: ["Cleric"],
    desc: "Bright radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 Radiant damage. The target gains no benefit from cover for this saving throw."
  },
  {
    id: "shatter",
    name: "Shatter",
    level: 2,
    school: "Evocation",
    range: "60 feet",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    desc: "A sudden loud, ringing noise, painfully intense, rips from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw, taking 3d8 Thunder damage on a failure."
  },
  {
    id: "shield",
    name: "Shield",
    level: 1,
    school: "Abjuration",
    range: "Self",
    classes: ["Sorcerer", "Wizard"],
    desc: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile."
  },
  {
    id: "sleep",
    name: "Sleep",
    level: 1,
    school: "Enchantment",
    range: "90 feet",
    classes: ["Bard", "Sorcerer", "Wizard"],
    desc: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose are affected in ascending order of their current hit points."
  },
  {
    id: "spider_climb",
    name: "Spider Climb",
    level: 2,
    school: "Transmutation",
    range: "Touch",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    desc: "Until the spell ends 1 hour later, a willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed."
  },
  {
    id: "spiritual_weapon",
    name: "Spiritual Weapon",
    level: 2,
    school: "Evocation",
    range: "60 feet",
    classes: ["Cleric"],
    desc: "You create a floating, spectral weapon within range that lasts for 1 minute. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes Force damage equal to 1d8 + your spellcasting ability modifier."
  },
  {
    id: "suggestion",
    name: "Suggestion",
    level: 2,
    school: "Enchantment",
    range: "30 feet",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    desc: "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range. The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described for up to 8 hours."
  },
  {
    id: "thunderwave",
    name: "Thunderwave",
    level: 1,
    school: "Evocation",
    range: "Self (15-foot cube)",
    classes: ["Bard", "Druid", "Sorcerer", "Wizard"],
    desc: "A wave of thunderous force sweeps from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 10 feet away from you."
  },
  {
    id: "vicious_mockery",
    name: "Vicious Mockery",
    level: 0,
    school: "Enchantment",
    range: "60 feet",
    classes: ["Bard"],
    desc: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you, it must succeed on a Wisdom saving throw or take 1d4 Psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn."
  },
  {
    id: "web",
    name: "Web",
    level: 2,
    school: "Conjuration",
    range: "60 feet",
    classes: ["Sorcerer", "Wizard"],
    desc: "You create a mass of thick, sticky webbing in a 20-foot cube starting from a point within range. The webs layer difficult terrain and last for up to 1 hour. Creatures standing in the webs when cast must pass a Dexterity saving throw or be Restrained."
  }
];

