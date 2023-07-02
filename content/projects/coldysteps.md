<h1 align="center">
  <img width=800 height=400 src="https://raw.githubusercontent.com/NubilumDev/ColdySteps/master/.github/coldysteps.png"  alt=""/>
  <br>ColdySteps<br>
</h1>

<p align="center">
  <b>A plugin for <code>SpigotMC 1.18 and above</code> that adding a cold system in various biomes</b><br><br>

  <a href="https://app.codacy.com/gh/NubilumDev/ColdySteps/dashboard">
    <img src="https://app.codacy.com/project/badge/Grade/04669f7c982b4ec8ba4783493dfb1ca9" alt="codacy"/>
  </a>

  <a href="https://github.com/NubilumDev/ColdySteps/releases">
    <img src="https://img.shields.io/github/v/release/NubilumDev/ColdySteps?include_prereleases&style=flat-square" alt="release">
  </a>
  <a href="https://github.com/NubilumDev/ColdySteps">
    <img src="https://img.shields.io/github/repo-size/NubilumDev/ColdySteps?style=flat-square" alt="size"> 
  </a>
  <a href="https://github.com/NubilumDev/ColdySteps/releases">
    <img src="https://img.shields.io/github/downloads/NubilumDev/ColdySteps/total?style=flat-square" alt="downloads"> 
  </a>
  <a href="https://github.com/NubilumDev/ColdySteps/issues">
    <img src="https://img.shields.io/github/issues/NubilumDev/ColdySteps?style=flat-square" alt="issues"> 
  </a>
  <a href="https://github.com/NubilumDev/ColdySteps/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/NubilumDev/ColdySteps?style=flat-square" alt="licence"> 
  </a><br><br>
  <a href="#support">Support</a> •
  <a href="#features">Features</a> •
  <a href="#download">Download</a> •
  <a href="#config">Config</a>
</p>

### This plugin requires the [DarkWaterAPI](https://github.com/kiinse/DarkWaterAPI/releases) library version 3.1.0 or higher!

## Donations

If you want to support the project, then
star this repository and tell your friends about ColdySteps =3

## Support

Join the [Discord](https://discord.gg/ec7y5NY82b) if you have any questions.
Please **don't** open an issue just for the sake of questions.

## Features

- Now the player freezes in cold biomes
- The player can keep warm using food
- Player can warm up by standing near hot blocks
- There is a localization system thanks to DarkWaterAPI
- There is support for placeholders
- There is also a well customizable config

## Download

The latest version can be downloaded on the <a href="https://github.com/NubilumDev/ColdySteps/releases">releases
page.</a><br>

## Installation

In order for ColdySteps to work, it must be placed in the **plugins' folder**.

## Placeholders

| Placeholder               | Description                                     |
|---------------------------|-------------------------------------------------|
| %coldy_cold%              | The word "Cold" in the player's language        |
| %coldy_numeric%           | The status of the player's cold as a percentage |
| %coldy_status%            | The status of the player's cold in words        |
| %coldy_indicator%         | Cold indicator                                  |
| %coldy_indicator_simple%  | Cold indicator (simplified)                     |

## Permissions

| Permissions   | Description                                                                                            |
|---------------|--------------------------------------------------------------------------------------------------------|
| coldy.vip     | Reducing the cold added to the player and increasing his speed is beautiful (Indicated in the config)  |
| coldy.premium | Reducing the cold added to the player and increasing his speed is beautiful (Indicated in the config)  |
| coldy.deluxe  | Reducing the cold added to the player and increasing his speed is beautiful (Indicated in the config)  |

## Config

```yaml
# Postgresql | First you need to manually create a database, the plugin will create the tables itself.
pg.enabled: false
pg.host: localhost
pg.port: 5432
pg.login: postgres
pg.password: postgres
pg.dbname: coldysteps

# By what percentage to reduce the received cold and increase its disappearance for certain rights
permission.vip: 0.15
permission.premium: 0.30
permission.deluxe: 0.45

# Amount of damage per second when the player is 100% cold
damage: 2.5

# How many percent of cold is removed per second in various situations
remove.outbiome: 0.2 # Outside the cold biome (Cold biomes are specified in the biomes.yml file)
remove.fire: 5.0 # In Fire
remove.lava: 20.0 # In Lava
remove.leather: 0.02 # How much cold is removed for ONE worn leather armor
remove.food: true # Remove the cold when the player eats certain food (Specified in the food.yml file)
remove.radius: 3 # Within a radius of how many blocks around the removing block (in the blocks.yml file) the cold is removed

# How many percent of cold is added per second in various situations
add.inbiome: 1.0 # Inside the cold biome (biomes.yml)
add.water: 6.0 # In water in cold biome
add.thunder: 3.0 # In thunder in cold biome
add.leather: 0.2 # How much cold is added when ONE worn leather armor
add.effects.enable: true # Whether to add effects when the player has a certain percentage of cold (They are specified in the effects.yml file)
add.effects.cold: 90 # At what percentage of cold to add effects to the player

# Indicator settings
indicator.actionbar: true
indicator.full: "&6&l[&4##########&6&l]"
indicator.char.first: "&f#"
indicator.char.second: "&8-"
indicator.format: "&6&l[{INDICATOR}&6&l]"
```
