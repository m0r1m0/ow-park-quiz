// Overwatch 2 キャラクターとパークのデータ
// position: "left" または "right" でゲーム内の配置を示す

const heroData = {
  "heroes": {
    "tanks": [
      {
        "name": "D.Va",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/19/Icon-D.Va.png",
        "perks": {
          "minor": [
            {
              "name": "Bunny Power",
              "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/Perk-BunnyPower.png",
              "description": "Eject grants 75 temporary overhealth and Call Mech's damage radius is increased by 50%.",
              "position": "left"
            },
            {
              "name": "Extended Boosters",
              "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/Perk-ExtendedBoosters.png",
              "description": "Hitting an enemy with Boosters deals 100% increased damage and extends the duration by 0.5 seconds.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Shield System",
              "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/Perk-ShieldSystem.png",
              "description": "Convert 150 health to shields. Defense Matrix restores shields based on 25% of its damage absorbed.",
              "position": "left"
            },
            {
              "name": "Precision Fusion",
              "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/Perk-PrecisionFusion.png",
              "description": "Press Reload to reduce Fusion Cannons' Spread by 75% for 3 seconds.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Doomfist",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a1/Icon-Doomfist.png",
        "perks": {
          "minor": [
            {
              "name": "One-Two",
              "description": "Hitting an enemy into a wall with Rocket Punch reloads all Hand Cannon and overfills ammo by 2.",
              "position": "left"
            },
            {
              "name": "Survival of the Fittest",
              "description": "The Best Defense grants 25 overhealth from eliminations and its max overhealth is increased by 50.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Aftershock",
              "description": "Enemies hit by Seismic Slam are slowed by 40% for 2 seconds.",
              "position": "left"
            },
            {
              "name": "Power Matrix",
              "description": "Power Block absorbs projectiles for the first second of its duration.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Hazard",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/54/Icon-Hazard.png",
        "perks": {
          "minor": [
            {
              "name": "Deep Leap",
              "description": "Violent Leap's range is increased by 15%.",
              "position": "left"
            },
            {
              "name": "Anarchic Zeal",
              "description": "Spike Guard's spikes gain 30% Lifesteal.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Reconstitution",
              "description": "Jagged Wall hits charge Spike Guard with 25 energy, up to 50 extra.",
              "position": "left"
            },
            {
              "name": "Explosive Impalements",
              "description": "Bonespur hits mark targets with spikes. Quick Melee and Violent Leap's slash detonate them for 40 explosive damage.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Junker Queen",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2b/Icon-Junker_Queen.png",
        "perks": {
          "minor": [
            {
              "name": "Rampant Charge",
              "description": "Gain Unstoppable and refreshes all cooldowns by 6 seconds when using Rampage.",
              "position": "left"
            },
            {
              "name": "Battle Shout",
              "description": "Commanding Shout fully reloads Scatter Gun and increases allied reload speed by 50%.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Willy-Willy",
              "description": "When recalling Jagged Blade its radius is increased by 100% and it deals 30 additional impact damage.",
              "position": "left"
            },
            {
              "name": "Savage Satiation",
              "description": "Carnage's impact damage gains 100% lifesteal.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Mauga",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/39/Icon-Mauga.png",
        "perks": {
          "minor": [
            {
              "name": "Kinetic Bandolier",
              "description": "Overrun reloads up to 150 ammo while charging.",
              "position": "left"
            },
            {
              "name": "Pyromaniac",
              "description": "Igniting enemies with Incendiary Chaingun grants 50 overhealth.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Firewalker",
              "description": "Overrun ignites enemies hit.",
              "position": "left"
            },
            {
              "name": "Combat Fuel",
              "description": "Critical hits grant Mauga 3 temporary overhealth on Cardiac Overdrive's next use, up to 150 overhealth.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Orisa",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/11/Icon-Orisa.png",
        "perks": {
          "minor": [
            {
              "name": "Defense Protocol",
              "description": "Regenerate 100 health per second while charging Terra Surge.",
              "position": "left"
            },
            {
              "name": "Mobile Fortification",
              "description": "While Fortify is active, Orisa has no movement speed reduction and no heat generation.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Charged Javelin",
              "description": "Energy Javelin can be charged to increase projectile speed and knockback. Pierces enemies at full power.",
              "position": "left"
            },
            {
              "name": "Protective Barrier",
              "description": "Javelin Spin is replaced with a barrier.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Ramattra",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6f/Icon-Ramattra.png",
        "perks": {
          "minor": [
            {
              "name": "Void Surge",
              "description": "Void Accelerator periodically releases a burst of 6 additional projectiles during continuous fire.",
              "position": "left"
            },
            {
              "name": "Relentless Form",
              "description": "While Nemesis Form is active, eliminations extend the duration by 1 second.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Nanite Repair",
              "description": "Ramattra is healed for 75 health per second while within Ravenous Vortex.",
              "position": "left"
            },
            {
              "name": "Vengeful Vortex",
              "description": "While Ravenous Vortex is airborne, use E again to detonate it, dealing 50 damage and pulling enemies downward.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Reinhardt",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/83/Icon-Reinhardt.png",
        "perks": {
          "minor": [
            {
              "name": "Crusader's Fire",
              "description": "Refund a charge of Fire Strike When you stun an enemy, overfilling up to 3.",
              "position": "left"
            },
            {
              "name": "Barrier Re-charge",
              "description": "Distance travelled while using Charge regenerates your Barrier Field by 200 per second.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Shield Slam",
              "description": "While Barrier Field is active, use Primary Fire to damage and knockback enemies.",
              "position": "left"
            },
            {
              "name": "Ignited Fury",
              "description": "For each enemy you hit with Fire Strike, gain 2 seconds of 25% increased attack speed.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Roadhog",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/16/Icon-Roadhog.png",
        "perks": {
          "minor": [
            {
              "name": "Scrap Hook",
              "description": "Chain Hook hits reload 2 ammo.",
              "position": "left"
            },
            {
              "name": "Shrapnel Launcher",
              "description": "Extend the range of Scrap Gun's secondary fire by 50% and tighten its burst spread by 25%.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Invigorate",
              "description": "Take A Breather rapidly increases Roadhog's movement speed by 30%.",
              "position": "left"
            },
            {
              "name": "Pulled Pork",
              "description": "Gain overhealth based on how far you pull enemies with Chain Hook, up to 250.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Sigma",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e0/Icon-Sigma.png",
        "perks": {
          "minor": [
            {
              "name": "Kinetic Cycle",
              "description": "Absorbing projectiles with Kinetic Grasp also reduces Accretion's cooldown.",
              "position": "left"
            },
            {
              "name": "Hyper Regeneration",
              "description": "50% of Hyperspheres' damage restores Experimental Barrier's Health.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Hyper Strike",
              "description": "Every 5 direct hits with Hyperspheres, your next successful Quick Melee levitates and knocks away enemies.",
              "position": "left"
            },
            {
              "name": "Levitation",
              "description": "Activate and hold Double Jump to briefly levitate upward.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Winston",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f8/Icon-Winston.png",
        "perks": {
          "minor": [
            {
              "name": "Barrier Toss",
              "description": "Winston now throws his barrier forward when used.",
              "position": "left"
            },
            {
              "name": "Heavy Landing",
              "description": "During Primal Rage, Jump Pack's damage and area increase by up to 75% while airborne.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Chain Lightning",
              "description": "Fully charged Secondary Fire hits bounce to up to 2 additional targets.",
              "position": "left"
            },
            {
              "name": "Revitalizing Barrier",
              "description": "Barrier Projector heals allies within it for 30 health per second.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Wrecking Ball",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ca/Icon-Wrecking_Ball.png",
        "perks": {
          "minor": [
            {
              "name": "Steamroller",
              "description": "Roll impacts deal 100% more damage to Tanks.",
              "position": "left"
            },
            {
              "name": "Pack Rat",
              "description": "Health Packs heal an additional 100 health.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Hang Time",
              "description": "Piledriver winds up longer, gaining air control and dealing up to 50% more damage.",
              "position": "left"
            },
            {
              "name": "Adaptive Barrier",
              "description": "Adaptive Shield generates a 1.5 second barrier on activation.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Zarya",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/75/Icon-Zarya.png",
        "perks": {
          "minor": [
            {
              "name": "Energy Converter",
              "description": "Hits with Particle Cannon's secondary fire generate 2 energy.",
              "position": "left"
            },
            {
              "name": "Jump-Ups",
              "description": "Secondary Fire's self-knockback is increased by 75%.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Energy Lance",
              "description": "Particle Cannon's beam pierces enemies while over 50 energy.",
              "position": "left"
            },
            {
              "name": "Spotter",
              "description": "Projected Barrier activates ally health regeneration and increases their movement speed by 25%.",
              "position": "right"
            }
          ]
        }
      }
    ],
    "damage": [
      {
        "name": "Ashe",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/be/Icon-Ashe.png",
        "perks": {
          "minor": [
            {
              "name": "Remote Detonator",
              "description": "After using Dynamite, pressing Ability 2 again causes it to explode after a 0.5 second delay.",
              "position": "left"
            },
            {
              "name": "Sidewinder",
              "description": "Coach Gun pushes Ashe and enemies 12% farther.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Viper's Sting",
              "description": "Hitting 2 consecutive scoped shots on a target deals 25 extra damage and reloads 2 ammo.",
              "position": "left"
            },
            {
              "name": "Airburst",
              "description": "Dynamite has a 40% increased detonation radius while airborne and refunds 3 ammo when thrown.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Bastion",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/51/Icon-Bastion.png",
        "perks": {
          "minor": [
            {
              "name": "Configuration Reload",
              "description": "Refresh the cooldown of A-36 Tactical Grenade when changing configurations.",
              "position": "left"
            },
            {
              "name": "Armored Artillery",
              "description": "Configuration: Artillery grants 300 temporary overhealth.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Lindholm Explosives",
              "description": "Configuration: Assault's Weapon slowly fires explosive shells instead of a rotary cannon.",
              "position": "left"
            },
            {
              "name": "Self-Repair",
              "description": "Press E to rapidly heal yourself.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Cassidy",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/05/Icon-Cassidy.png",
        "perks": {
          "minor": [
            {
              "name": "Bang Bang",
              "description": "Cassidy throws a second Flashbang that travels farther, but both Flashbangs deal 40% reduced damage.",
              "position": "left"
            },
            {
              "name": "Even the Odds",
              "description": "Regenerate 30 health per second for each enemy targeted by Deadeye.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Gun Slingin'",
              "description": "Critical hits with Primary Fire reduce the cooldown of Combat Roll by 3 seconds.",
              "position": "left"
            },
            {
              "name": "Silver Bullet",
              "description": "Peacekeeper's secondary fire is replaced with a piercing shot that inflicts bleeding. Combat Roll and Deadeye reset its cooldown.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Echo",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d6/Icon-Echo.png",
        "perks": {
          "minor": [
            {
              "name": "Focused Rush",
              "description": "Focused Beam's range is increase by 4 meters and movement speed is increase by 10% when active.",
              "position": "left"
            },
            {
              "name": "Partial Scan",
              "description": "Duplicate starts with 50% of its ultimate charge.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Full Salvo",
              "description": "Sticky Bombs fires 50% more projectiles.",
              "position": "left"
            },
            {
              "name": "High Beams",
              "description": "Focusing Beam eliminations reset Flight's cooldown.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Freja",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/04/Icon-Freja.png",
        "perks": {
          "minor": [
            {
              "name": "Hunters Instinct",
              "description": "Direct hits with Take Aim reveal enemies to Freja for 3 seconds.",
              "position": "left"
            },
            {
              "name": "Momentum Boost",
              "description": "Quick Dash distance is increased by 20%.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Aerial Recovery",
              "description": "After using Updraft, heal for 30 health per second until Freja touches the ground.",
              "position": "left"
            },
            {
              "name": "Relentless Barrage",
              "description": "Direct hits with Take Aim refund 8 automatic bolt ammo.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Genji",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1c/Icon-Genji.png",
        "perks": {
          "minor": [
            {
              "name": "Swift Cuts",
              "description": "Quick Melee reduces the cooldown of Swift Strike by 3 seconds.",
              "position": "left"
            },
            {
              "name": "Dragon's Thirst",
              "description": "Dragonblade swings gain 30% lifesteal.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Blade Twisting",
              "description": "Swift Strike deals 25 additional damage over time if the enemy is below half health.",
              "position": "left"
            },
            {
              "name": "Meditation",
              "description": "Regenerate 35 health per second while Deflect is active.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Hanzo",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/71/Icon-Hanzo.png",
        "perks": {
          "minor": [
            {
              "name": "Sonic Disruption",
              "description": "Sonic Arrow hacks nearby Health Packs for 30 seconds.",
              "position": "left"
            },
            {
              "name": "Swift Lunge",
              "description": "Arrow hits reduce the cooldown of Lunge by up to 1 second, based on charge.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Dragon Fury",
              "description": "After hitting an enemy with Primary Fire, gain 25% attack speed for 2 seconds.",
              "position": "left"
            },
            {
              "name": "Scatter Arrows",
              "description": "On first ricochet, Storm Arrows split into 5 shots dealing 33% damage and bounce 1 extra time.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Junkrat",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/99/Icon-Junkrat.png",
        "perks": {
          "minor": [
            {
              "name": "Mine Recycling",
              "description": "Killing blows with Concussion Mine restore one charge.",
              "position": "left"
            },
            {
              "name": "Nitro Boost",
              "description": "During RIP-Tire, use (LSHIFT) to gain a quick boost of speed. Doing so reduces RIP-Tire's damage by 50%.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Frag Cannon",
              "description": "Frag Launcher's projectile speed is increased by 25%",
              "position": "left"
            },
            {
              "name": "Bomb Voyage",
              "description": "After launching with Concussion Mine, Junkrat gains 35% increased attack speed for 3 seconds.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Mei",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/99/Icon-Mei.png",
        "perks": {
          "minor": [
            {
              "name": "Skating Rink",
              "description": "Allies within Blizzard gain 25% increased movement speed and heal for 50 health per second.",
              "position": "left"
            },
            {
              "name": "Glacial Propulsion",
              "description": "Double jumping creates a small ice pillar that launches Mei into the air.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Deep Freeze",
              "description": "Continuously hitting enemies with primary fire freezes them for a short time.",
              "position": "left"
            },
            {
              "name": "Cryo-Storm",
              "description": "Cryo-Freeze slows and deals 70 damage per second to nearby enemies.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Pharah",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/29/Icon-Pharah.png",
        "perks": {
          "minor": [
            {
              "name": "Drift Thrusters",
              "description": "Pharah can move while Barrage is active.",
              "position": "left"
            },
            {
              "name": "Helix Shields",
              "description": "Convert 125 health to shields. Direct hits with the Rocket Launcher triggers passive shield regeneration.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Fuel Stores",
              "description": "Jet Dash grants 50% fuel. Maximum overfuel is increased by 100%.",
              "position": "left"
            },
            {
              "name": "Sky Spy",
              "description": "Concussive Blast reveals targets to Pharah for 3 seconds. During this, the next direct Rocket Launcher hit per target deals 30% extra damage.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Reaper",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a9/Icon-Reaper.png",
        "perks": {
          "minor": [
            {
              "name": "Lingering Wraith",
              "description": "Leaving Wraith Form grants 40% movement speed for 2 seconds.",
              "position": "left"
            },
            {
              "name": "Soul Reaving",
              "description": "Collect Soul Globes from dead enemies to restore 50 health.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Dire Triggers",
              "description": "Use (RMB) to fire a volley with long range accuracy from both Hellfire shotguns.",
              "position": "left"
            },
            {
              "name": "Shadow Blink",
              "description": "Shadow Step's cast time and cooldown are 25% faster, but the range is reduced by 25%.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Sojourn",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e0/Icon-Sojourn.png",
        "perks": {
          "minor": [
            {
              "name": "Deceleration Field",
              "description": "Enemies hit by Disruptor Shot are slowed by 25%.",
              "position": "left"
            },
            {
              "name": "Overcharged",
              "description": "Railgun's maximum energy is increased by 50 while Overclock is active.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Dual Thrusters",
              "description": "Power Slide gains an additional charge and its jump height shifts to lateral movement.",
              "position": "left"
            },
            {
              "name": "Friction Generators",
              "description": "While sliding, Power Slide generates up to 50 Energy.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Soldier: 76",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2b/Icon-Soldier_76.png",
        "perks": {
          "minor": [
            {
              "name": "Recycled Pulse Munitions",
              "description": "Helix Rockets reload 15 ammo if they damage an enemy.",
              "position": "left"
            },
            {
              "name": "Tactical Salvo",
              "description": "Helix Rockets cooldown is reduced by 80% during Tactical Visor.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Agility Training",
              "description": "Sprint's speed is increased by 20% and reload can be performed while sprint is active.",
              "position": "left"
            },
            {
              "name": "Stim Pack",
              "description": "Stim Pack replaces Biotic Field. On use, Soldier: 76 heals for 30 health per second and gains 20% increased attack speed for 5 seconds.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Sombra",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/70/Icon-Sombra.png",
        "perks": {
          "minor": [
            {
              "name": "Encrypted Upload",
              "description": "Hack can be used while invisible, successful hacks increase the duration of stealth by 3 seconds.",
              "position": "left"
            },
            {
              "name": "CTRL ALT ESC",
              "description": "Teleporting with Translocator while below half health initiates passive health regeneration.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Healthy Hacker",
              "description": "Hacked health packs provide up to 75 overhealth to Sombra.",
              "position": "left"
            },
            {
              "name": "Viral Replication",
              "description": "Hitting a hacked enemy with Virus spreads Virus to enemies within 8 meters.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Symmetra",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/06/Icon-Symmetra.png",
        "perks": {
          "minor": [
            {
              "name": "Sentry Capacity",
              "description": "Sentry Turret gains an additional charge.",
              "position": "left"
            },
            {
              "name": "Perfect Alignment",
              "description": "Increase the range of Photon Projector's primary fire by 20%.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Hovering Barrier",
              "description": "Teleporter gains the option to create a forward moving barrier instead. Pressing Ability 2 again slows down the barrier's movement.",
              "position": "left"
            },
            {
              "name": "Shield Battery",
              "description": "Symmetra regenerates 20 shields per second while within 10 meters of her teleporter.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Torbjörn",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ca/Icon-Torbjörn.png",
        "perks": {
          "minor": [
            {
              "name": "Hammer Time",
              "description": "Move 20% faster while Forge Hammer is equipped.",
              "position": "left"
            },
            {
              "name": "Fully Loaded",
              "description": "Activating Overload fully refills Rivet Gun's ammo.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Anchor Bolts",
              "description": "Deploy Turret's throw range is increased by 50% and it can now attach to walls and ceilings.",
              "position": "left"
            },
            {
              "name": "Overloaded Turret",
              "description": "Overload upgrades your Turret for 5 seconds, increasing its health and damage.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Tracer",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/29/Icon-Tracer.png",
        "perks": {
          "minor": [
            {
              "name": "Blink Packs",
              "description": "Health Packs restore 1 Blink charge.",
              "position": "left"
            },
            {
              "name": "Kinetic Reload",
              "description": "Melee hits grant 20 ammo.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Flashback",
              "description": "Recall increases Blink recovery rate by 150% for 3 seconds.",
              "position": "left"
            },
            {
              "name": "Quantum Entanglement",
              "description": "Recall grants 50 overhealth and 20 ammo that decays over time.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Vendetta",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dd/Icon-Vendetta.png",
        "perks": {
          "minor": [
            {
              "name": "Siphoning Strike",
              "description": "Overhead strikes gain 40% Lifesteal.",
              "position": "left"
            },
            {
              "name": "Relentless",
              "description": "Onslaught can stack 3 more times, increasing attack speed by 5% and movement speed by 4% per stack.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Swift Vengeance",
              "description": "Last player to land a killing blow on you becomes a target. Eliminate the target to gain 150 overhealth and reset cooldowns.",
              "position": "left"
            },
            {
              "name": "Raging Storm",
              "description": "Whirlwind Dash continues to spin, hitting 3 more times for 40 damage in a wide area.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Venture",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a0/Icon-Venture.png",
        "perks": {
          "minor": [
            {
              "name": "Deep Burrow",
              "description": "Drill Dash distance is 50% longer while while burrowing.",
              "position": "left"
            },
            {
              "name": "Excavation Exhilaration",
              "description": "While Tectonic Shock is active, cooldowns refresh 300% faster.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Smart Extender",
              "description": "Empower SMART Excavator with E to increase its maximum projectile range by 100% for 4 seconds.",
              "position": "left"
            },
            {
              "name": "Covered in Dirt",
              "description": "Dealing damage with Clobber grants up to 30 Explorer's Resolve shields.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Widowmaker",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/54/Icon-Widowmaker.png",
        "perks": {
          "minor": [
            {
              "name": "Scoped Efficiency",
              "description": "Scoped shots cost 3 ammo instead of 5.",
              "position": "left"
            },
            {
              "name": "Sniper's Instinct",
              "description": "Scoped shots charge 100% faster for 2 seconds after using Grappling Hook.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Escape Plan",
              "description": "Scoped shot hits reduce Grappling Hook's cooldown by up to 4 seconds.",
              "position": "left"
            },
            {
              "name": "Seeker Mine",
              "description": "Venom Mine now fires poison darts at enemies within 10 meters and remains active after triggered.",
              "position": "right"
            }
          ]
        }
      }
    ],
    "support": [
      {
        "name": "Ana",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3d/Icon-Ana.png",
        "perks": {
          "minor": [
            {
              "name": "Groggy",
              "description": "Enemies waking up from Sleep Dart are slowed and take 50 damage for 2 seconds.",
              "position": "left"
            },
            {
              "name": "Speed Serum",
              "description": "Nano Boost grants a 40% movement speed boost to both Ana and her target.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Headhunter",
              "description": "Biotic Rifle can crit enemies.",
              "position": "left"
            },
            {
              "name": "Biotic Bounce",
              "description": "After exploding, Biotic Grenade bounces and explodes again for 60 damage and healing.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Baptiste",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fb/Icon-Baptiste.png",
        "perks": {
          "minor": [
            {
              "name": "Biotic Reloader",
              "description": "Hitting an entire three-round burst reloads a healing projectile. Healing projectile direct hits reloads 3 primary fire ammo.",
              "position": "left"
            },
            {
              "name": "Automated Healing",
              "description": "Using any ability triggers Baptiste's Shoulder Turret, periodically firing up to 3 shots at allies, each restoring 25 health.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Assault Burst",
              "description": "Regenerative Burst now provides Baptiste with 25% increased attack speed for 4 seconds.",
              "position": "left"
            },
            {
              "name": "Rocket Boots",
              "description": "While airborne from Exo Boots, use (SPACE) to dash horizontally.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Brigitte",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a6/Icon-Brigitte.png",
        "perks": {
          "minor": [
            {
              "name": "Combat Medic",
              "description": "Melee attacks reduce the cooldown of Repair Pack by 0.5 seconds.",
              "position": "left"
            },
            {
              "name": "Morale Boost",
              "description": "Inspire lasts 3 seconds longer when activated by Whip Shot.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Inspiring Strike",
              "description": "Shield Bash grants 30% increased movement speed for 2 seconds. Inspire's healing is instant when activated by Shield Bash.",
              "position": "left"
            },
            {
              "name": "Whiplash",
              "description": "Whip Shot's knockback can slam enemies into walls, dealing 50 extra damage.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Illari",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Icon-Illari.png",
        "perks": {
          "minor": [
            {
              "name": "Rapid Construction",
              "description": "Healing Pylon builds 300% faster and its cooldown is reduced by 1.5 seconds.",
              "position": "left"
            },
            {
              "name": "Summer Solstice",
              "description": "Activating Captive Sun grants Illari 3 extra seconds of flight, 20% increased flight speed, and 30% increased attack speed.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Solar Flare",
              "description": "Press Primary Fire while using Solar Rifle's healing beam to consume 50% of energy, healing allies in front of Illari for 100 healing.",
              "position": "left"
            },
            {
              "name": "Sunburn",
              "description": "Outburst ignites enemies, dealing an additional 70 damage over 3 seconds.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Juno",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c7/Icon-Juno.png",
        "perks": {
          "minor": [
            {
              "name": "Familiar Vitals",
              "description": "Pulsar Torpedoes lock onto allies 35% faster.",
              "position": "left"
            },
            {
              "name": "Locked On",
              "description": "Reduce the cooldown of Pulsar Torpedoes by 1 second for each enemy hit.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Faster Blaster",
              "description": "While using Glide Boost, Mediblaster fires continuosly.",
              "position": "left"
            },
            {
              "name": "Lift Off",
              "description": "Martian Overboots can now triple jump.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Kiriko",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ca/Icon-kiriko.png",
        "perks": {
          "minor": [
            {
              "name": "Urgent Care",
              "description": "Healing Ofuda projectile speed is increased by 50% when seeking critical health allies.",
              "position": "left"
            },
            {
              "name": "Fortune Teller",
              "description": "Kunai hits launch 2 Healing Ofuda to an ally in front of you.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Ready Step",
              "description": "Swift Step grants Kiriko 40% increased attack and reload speed for 3 seconds.",
              "position": "left"
            },
            {
              "name": "Foxtrot",
              "description": "Protection Suzu grants allies 100% increased cooldown recovery and 30% increased movement speed for 2 seconds.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Lifeweaver",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Icon-Lifeweaver.png",
        "perks": {
          "minor": [
            {
              "name": "Cleansing Grasp",
              "description": "Life Grip cleanses negative effects. Cleansing a negative effect reduces Life Grip cooldown by 4 seconds.",
              "position": "left"
            },
            {
              "name": "Lifeweaving",
              "description": "Rejuvenating Dash adds 30 healing to your next Healing Blossom within 3 seconds.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Superbloom",
              "description": "Thorns detonate for 40 extra damage when enough stick within 2.5 seconds.",
              "position": "left"
            },
            {
              "name": "Petal Power",
              "description": "Allies gain 30% attack speed while standing on a raised Petal Platform.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Lúcio",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/51/Icon-Lúcio.png",
        "perks": {
          "minor": [
            {
              "name": "Soundwave Rider",
              "description": "Wall Riding empowers your next Soundwave, increasing its knockback by 25% and damage by 50%.",
              "position": "left"
            },
            {
              "name": "Beat Drop",
              "description": "Amp It Up is active during Sound Barrier.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Noise Violation",
              "description": "Crossfade's range is increased by 150% while Amp It Up is active.",
              "position": "left"
            },
            {
              "name": "Accelerando",
              "description": "Lucio's attack speed is increased by 50% while Amp It Up is active.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Mercy",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/03/Icon-Mercy.png",
        "perks": {
          "minor": [
            {
              "name": "Angelic Resurrection",
              "description": "Mercy gains 100 overhealth after casting Resurrect.",
              "position": "left"
            },
            {
              "name": "Divine Momentum",
              "description": "Increases Mercy's travel speed by 15% after cancelling Guardian Angel.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Chain Boost",
              "description": "Secondary fire links to a second nearby ally.",
              "position": "left"
            },
            {
              "name": "Flash Heal",
              "description": "Flash heal can be used on Caduceus Staff's active target to restore 50 health, tripled on allies below half health.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Moira",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/55/Icon-Moira.png",
        "perks": {
          "minor": [
            {
              "name": "Destruction's Divide",
              "description": "Coalescence can be toggled between pure healing or pure damage, with 25% greater effect.",
              "position": "left"
            },
            {
              "name": "Ethical Nourishment",
              "description": "Biotic Orb's first 30 healing is instant on each ally it encounters.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Reversal",
              "description": "Reactivating Biotic Orb reverses its direction.",
              "position": "left"
            },
            {
              "name": "Phantom Step",
              "description": "Fade lasts 0.5 seconds longer and boosts jump height by 50%.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Wuyang",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6c/Icon-Wuyang.png",
        "perks": {
          "minor": [
            {
              "name": "Overflow",
              "description": "Gain 10 ammo and 50% healing resource when Rushing Torrent is activated.",
              "position": "left"
            },
            {
              "name": "Balance",
              "description": "When you deal damage with water orbs, increase Restorative Stream's passive healing by 30% for 2 seconds.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Ebb and Flow",
              "description": "Guardian Wave rewinds to its starting location. Has 50% less effectiveness while rewinding.",
              "position": "left"
            },
            {
              "name": "Falling Rain",
              "description": "Simultaneously control 3 water orbs that deal 60% decreased damage and have have 25% decreased empowered explosion radius.",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Zenyatta",
        "icon": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f7/Icon-Zenyatta.png",
        "perks": {
          "minor": [
            {
              "name": "Transcendent Condemnation",
              "description": "While using Transcendence, apply Discord Orb to all enemies within range.",
              "position": "left"
            },
            {
              "name": "Ascendance",
              "description": "Activate and hold Double Jump to hover for up to 3 seconds.",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "Focused Destruction",
              "description": "Secondary fire charges 20% faster and can store 1 extra Orb of Destruction.",
              "position": "left"
            },
            {
              "name": "Dual Harmony",
              "description": "Gain a 2nd Harmony Orb but they both heal for 70% effectiveness.",
              "position": "right"
            }
          ]
        }
      }
    ]
  }
};
