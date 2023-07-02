<h1 align="center">
  <img width=800 height=400 src="https://raw.githubusercontent.com/NubilumDev/ThirstForWater/master/.github/thirstforwater.png"  alt=""/>
  <br>ThirstForWater<br>
</h1>

<p align="center">
  <b>A plugin for <code>SpigotMC 1.18 and above</code> that adding a thirst system</b><br><br>

  <a href="https://app.codacy.com/gh/NubilumDev/ThirstForWater/dashboard">
    <img src="https://app.codacy.com/project/badge/Grade/04669f7c982b4ec8ba4783493dfb1ca9" alt="codacy"/>
  </a>

  <a href="https://github.com/NubilumDev/ThirstForWater/releases">
    <img src="https://img.shields.io/github/v/release/NubilumDev/ThirstForWater?include_prereleases&style=flat-square" alt="release">
  </a>
  <a href="https://github.com/NubilumDev/ThirstForWater">
    <img src="https://img.shields.io/github/repo-size/NubilumDev/ThirstForWater?style=flat-square" alt="size"> 
  </a>
  <a href="https://github.com/NubilumDev/ThirstForWater/releases">
    <img src="https://img.shields.io/github/downloads/NubilumDev/ThirstForWater/total?style=flat-square" alt="downloads"> 
  </a>
  <a href="https://github.com/NubilumDev/ThirstForWater/issues">
    <img src="https://img.shields.io/github/issues/NubilumDev/ThirstForWater?style=flat-square" alt="issues"> 
  </a>
  <a href="https://github.com/NubilumDev/ThirstForWater/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/NubilumDev/ThirstForWater?style=flat-square" alt="licence"> 
  </a><br><br>
  <a href="#support">Support</a> •
  <a href="#features">Features</a> •
  <a href="#download">Download</a> •
  <a href="#config">Config</a>
</p>

### This plugin requires the [DarkWaterAPI](https://github.com/kiinse/DarkWaterAPI/releases) library version 3.1.0 or higher!

## Donations

If you want to support the project, then
star this repository and tell your friends about ThirstForWater =3

## Support

Join the [Discord](https://discord.gg/ec7y5NY82b) if you have any questions.
Please **don't** open an issue just for the sake of questions.

## Features

- Now the player can experience dehydration for themselves! Wow!
- To restore thirst - you need to drink water. This can be done from a block of water (Highly undesirable), from a water bottle (Also undesirable), or from a bottle of purified water (Desirable)
- Purified water can be made by boiling a bottle of water in the stove or combine a bottle of water and a filter in a workbench.
- To make a filter - just put three papers and three coals in a row in a workbench.
- Also added a new craft water bottles. Just combine the snowball and the empty bottle.
- Now you can collect water in a bottle with the help of rain!
- There is a localization system thanks to DarkWaterAPI
- There is support for placeholders
- There is also a well customizable config

## Download

The latest version can be downloaded on the <a href="https://github.com/NubilumDev/ThirstForWater/releases">releases
page.</a><br>

## Installation

In order for ThirstForWater to work, it must be placed in the **plugins' folder**.

## Placeholders

| Placeholder            | Description                                       |
|------------------------|---------------------------------------------------|
| %tfw_thirst%           | The word "Thirst" in the player's language        |
| %tfw_numeric%          | The status of the player's thirst as a percentage |
| %tfw_status%           | The status of the player's thirst in words        |
| %tfw_indicator%        | Thirst indicator                                  |
| %tfw_indicator_simple% | Thirst indicator (simplified)                     |

## Permissions

| Permissions             | Description                                                               |
|-------------------------|---------------------------------------------------------------------------|
| tfw.consumption.vip     | Reducing the amount of water leaving the player (Indicated in the config) |
| tfw.consumption.premium | Reducing the amount of water leaving the player (Indicated in the config) |
| tfw.consumption.deluxe  | Reducing the amount of water leaving the player (Indicated in the config) |

## Config

```yaml
pg.enabled: false # If enabled, then instead of json, all data will be saved in postgresql
pg.host: localhost # Postgresql host
pg.port: 5432 # Postgresql port
pg.login: postgres # Postgresql login
pg.password: postgres # Postgresql password
pg.dbname: thirstforwater # Postgresql database name

poisoning.bottle.chance: 50 # Chance of poisoning when drinking from a vial of water
poisoning.block.chance: 90 # Chance of being poisoned when drinking from a block of water
poisoning.duration: 20 # Poison duration in seconds
poisoning.remove.seconds: 0.7 # How much thirst is removed when poisoned in seconds

recovery.block: 20.0 #Recovery from water block
recovery.bottle.default: 20.0 # Recovery from a bottle of water
recovery.bottle.clean: 35.0 # Recovery from a clean bottle of water

remove.thirst.walk: 0.75 # How much thirst is added when walking
remove.thirst.action: 1.0 # How much thirst is added when running, jumping, etc.

permission.consumption.vip: 0.15 # By what percentage is consumption reduced for players with 'tfw.consumption.vip' permissions (Default: 15%)
permission.consumption.premium: 0.30 # By what percentage is consumption reduced for players with 'tfw.consumption.premium' permissions (Default: 30%)
permission.consumption.deluxe: 0.45 # By what percentage is consumption reduced for players with 'tfw.consumption.deluxe' permissions (Default: 45%)

cooking.time: 140 # Cooking time for a bottle of water in the oven
cooking.experience: 0.35 #H ow much experience a player gains when cooking in an oven

damage: 3 # Damage when the player has no water left

recipe.filter: true # filter recipe
recipe.bottle.clean: true # Pure water bottle recipe
recipe.bottle.snow: true # Snow water bottle recipe

first.join.give.bottle: true
first.join.give.filter: true
first.join.amount.bottle: 1
first.join.amount.filter: 3

add.effects.enable: true # Whether to give effects to the player when he has too much thirst
add.effects.thirst: 20 # When to give effects to the player (At what percentage of his water)

indicator.actionbar: true
indicator.full: "&6&l[&1##########&6&l]"
indicator.empty: "&6&l[&4----------&6&l]"
indicator.char.first: "&b#"
indicator.char.second: "&8-"
indicator.format: "&6&l[{INDICATOR}&6&l]"



config.version: 1 # Don't touch this
```
