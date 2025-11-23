# Table of Contents

* [Magic Item Crafting](#magic-item-crafting)
	* [Base Magic Cost](#base-magic-cost)
    * [Spell Use](#spell-use)
* [Scrolls](#scrolls)
* [Limited Use Items](#limited-use-items)
    * [Potions](#potions)
    * [Spellstones](#spellstones)
    * [Magic Gear](#magic-gear)
* [Daily Use Items](#daily-use-items)
    * [Potions](#potions-1)
    * [Spellstones](#spellstones-1)
    * [Magic Gear](#magic-gear-1)
* [Continuous Use Items](#continuous-use-items)
* [Modified Effects](#modified-effects)
    * [Spell Effectiveness](#spell-effectiveness)
    * [Metamagics](#metamagics)
* [Multiple Effects and Bonus Effects](#multiple-effects-and-bonus-effects)
    * [Triggers](#triggers)
    * [Curses](#curses)
    * [Harmonization](#harmonization)
    * [Catalyzation](#catalyzation)

Click [here](/Basic/ItemCrafting.md) for the basic rules of item crafting.  
Click [here](/Fantasy/MagicEquipment.md) for examples of low cost magic equipment.  
Click [here](/Fantasy/ArtifactEquipment.md) for examples of high cost magic equipment.

# Magic Item Crafting

Crafting magic items requires the use of the [downtime crafting](/Basic/ItemCrafting.md#downtime-crafting) rules as magic items are far too complicated to improvise without the use of a special ability like the [arcane synthesis](/Fantasy/Talents.md#arcane-synthesis) talent.

With the right preparation any magic item may be created. You may create any of the many predetermined [magic items](/Fantasy/MagicEquipment.md), or you may create entirely custom magic items.

When creating predetermined magic items, you simply follow the same rules as normal crafting, but you (or an assistant) must be capable of casting any spells used in that item. For custom magic items the process is the same, but the cost must be calculated depending on what type of magic item it is and what spells are used.

## Base Magic Cost

The cost for a magic items is found by combining two values together: the *base item cost* and the *base magic cost*. The base item cost is simply the cost of the item including any adjustments from [equipment properties](/Basic/Equipment.md#equipment-properties)), that will be given magic effects. The base magic cost is determined by the spell chosen for an effect and how it is used.

In its simplest form the base magic cost of an item is the focus cost of the spell chosen multiplied by its spell difficulty value.

For example: if you choose the spell *darkness*, this would be 2 multiplied by 14, for a total of 28.

This value is then modified depending on how that spell is used in that item: as a *limited use*, *daily use*, or *continuous use* magic item.

For both limited and daily use magic items, you multiply this value further by the number of uses. Limited use items get a discount, cutting the total in half. Daily use items cost even more, multiplying the total by a further multiple of 5.

For example: for a *limited use* item that uses the spell *darkness* a total of 5 times, the previous total of 28 is multiplied by 5 then divided by 2. The new total becomes 70. If it was a *daily use* item usable 2 times a day, it would be 28 multiplied by 2 then multiplied by 5 again for a total of 280.

Continuous use items instead take the first total and multiply it by 25.

For example: for a *continuous use* item that uses the spell *darkness*, the previous total of 28 is multiplied by 25 for a new total of 700.

##### Table: Magical Item Costs
| Modifier | Cost Formula |
|:-|:-|
| Base Magic Cost | Focus Cost × Spell Difficulty |
| Scrolls | Base Magic Cost × 2 |
| Limited Use | Base Magic Cost × Uses ÷ 2 |
| Daily Use | Base Magic Cost × Uses × 5 |
| Continuous Use | Base Magic Cost × 25 |
| Multiple<br/>Effects | Combined Magic Costs<br/>× (½ + (Number of Effects × ½)) |

## Spell Use

In part of determining the magic effect, you must also make any decisions that the spell must normally make. This includes decisions that alter the cost and difficulty to cast the spell, and any modal or elemental decisions that the spell requires.

For example: you may create a magic weapon using the spell *magic weapon*, but when you do you must choose an element. When the item itself is used it can only generate that effect.

Any other modifers from talents or any unique features of spellcasting skills cannot be used to alter spells crafted onto items except for the [metamagic](/Fantasy/Talents.md#metamagic) talent.

For more advanced use cases of spell use, see the section on [modified effects](#modified-effects).

# Scrolls

Scrolls cost the same to craft as they do to purchase. While this is true, making good craft rolls can result in a discount on the price. Since the main purpose of a scroll is to provide the ability to cast a new spell, they are not useful to craft for oneself since crafting them requires the ability to cast the chosen spell. They are only useful for providing others the ability to cast a new spell.

##### Table: Scrolls Cost
| Tier | Tier Name | Price |
|:-:|:-:|:-:|
| 1 | Cantrip | 20sp |
| 2 | Lesser | 56sp |
| 3 | Greater | 114sp |
| 4 | Heroic | 200sp |

# Limited Use Items

The most common form of limited use items are *potions* and *spellstones*. While limited use effects can be placed on other items, most other items are more useful with *daily use* or *continuous use* effects. Potions and spellstones are small and cheap, making them effective limited use items.

## Potions

Potions are limited to certain types of spells, and as limited use items can only be used once. Only spells that can target a creature or a point, regardless of their other targeting options, can be made into potions. The spellcasting difficulty chosen pre-determines the spellcasting roll made when applying the effects of potions. The base item cost is 1 silver (or an alchemical base) to create potions.

> ##### Potion Crafting Example
> **Item:** Potion of Mending
>___
> **Base Item:** Alchemical Base  
> **Base Cost:** 1
>___
> **Spell:** Mend  
> **Focus Cost:** 2  
> **Spell Difficulty:** 14  
> **Uses:** 1  
> **Type:** Limited Use (÷2)  
> **Magic Cost:** 14 = 2×14×1÷2
>___
> **Combined Cost:** 15 = 1+14  
> **Difficulty:** 10  
> **Time:** 2 days

## Spellstones

Any spell can be chosen when crafting spellstones, but you must be able to cast it to craft it. Spellstones come in several different qualities: 2 silver for a rough gemstone, 10 silver for a fine gemstone, 50 silver for an exceptional gemstone, and 100 silver for a magnificent gemstone.

> ##### Spellstone Crafting Example
> **Item:** Spellstone of Ignition (5 uses)
>___
> **Base Item:** Rough Gemstone  
> **Base Cost:** 2
>___
> **Spell:** Ignite  
> **Focus Cost:** 1  
> **Spell Difficulty:** 10  
> **Uses:** 5  
> **Type:** Limited Use (÷2)  
> **Magic Cost:** 25 = 1×10×5÷2
>___
> **Combined Cost:** 27 = 2+25  
> **Difficulty:** 11  
> **Time:** 3 days

Spellstones can also be socketed into another item (such as a ring), allowing that item to cast spells from the spellstone. No crafting check is necessary to socket spellstones into other items.

## Magic Gear

While most forms of magic gear (like magic weapons) typically appear as daily use items, they can be made as limited use items. They function similarly but with a limited number of uses and a duration for each use as long they are attuned to.

> ##### Magic Gear Crafting Example
> **Item:** Flaming Longsword (1 use)
>___
> **Base Item:** Longsword  
> **Base Cost:** 10
>___
> **Spell:** Magic Weapon (fire)  
> **Focus Cost:** 2  
> **Spell Difficulty:** 14  
> **Uses:** 1  
> **Type:** Limited Use (÷2)  
> **Magic Cost:** 14 = 2×14×1÷2
>___
> **Combined Cost:** 24 = 10+14  
> **Difficulty:** 11  
> **Time:** 3 days

Magic gear with these types of effects are not destroyed at the end of their use, but simply lose their effects.

# Daily Use Items

Daily use items are very similar to limited use items, but are given a limited number of uses per day. They are common as a cheap alternative to reusable magic gear instead of continuous use items.

## Potions

Daily use potions are slightly different from limited use potions. They are called refilling potions and can only be used once per day.

> ##### Refilling Potion Crafting Example
> **Item:** Refilling Potion of Mending
>___
> **Base Item:** Alchemical Base  
> **Base Cost:** 1
>___
> **Spell:** Mend  
> **Focus Cost:** 2  
> **Spell Difficulty:** 14  
> **Uses:** 1  
> **Type:** Daily Use (×5)  
> **Magic Cost:** 140 = 2×14×1×5
>___
> **Combined Cost:** 141 = 1+140  
> **Difficulty:** 14  
> **Time:** 7 days

## Spellstones

Like limited use spellstones, you may choose any number of uses for daily use spellstones. Spellstones with more than one use per day can be very expensive.

> ##### Reusable Spellstone Crafting Example
> **Item:** Spellstone of Ignition (1/day)
>___
> **Base Item:** Rough Gemstone  
> **Base Cost:** 2
>___
> **Spell:** Ignite  
> **Focus Cost:** 1  
> **Spell Difficulty:** 10  
> **Uses:** 1  
> **Type:** Daily Use (×5)  
> **Magic Cost:** 50 = 1×10×1×5
>___
> **Combined Cost:** 52 = 2+100  
> **Difficulty:** 12  
> **Time:** 4 days

## Magic Gear

Most magic gear is crafted as a daily use item simply because it is much cheaper than a continuous use magic item. Many magic items are situational enough that they don't need to be used regularly, but even in cases where daily use items that can be used just 2 or 3 times are still cheaper than continuous use items.

> ##### Reusable Magic Gear Crafting Example
> **Item:** Flaming Longsword (1/day)
>___
> **Base Item:** Longsword  
> **Base Cost:** 10
>___
> **Spell:** Magic Weapon (fire)  
> **Focus Cost:** 2  
> **Spell Difficulty:** 14  
> **Uses:** 1  
> **Type:** Daily Use (×5)  
> **Magic Cost:** 140 = 2×14×1×5
>___
> **Combined Cost:** 150 = 10+140  
> **Difficulty:** 14  
> **Time:** 7 days

# Continuous Use Items

The most expensive form of magic items are also the most powerful. Only magic gear (not potions or spellstones) can be crafted as continuous use items. These items can be both be used any number of times and with no fixed duration, they simply require attunement.

> ##### Continuous Magic Gear Crafting Example
> **Item:** Flaming Longsword
>___
> **Base Item:** Longsword  
> **Base Cost:** 10
>___
> **Spell:** Magic Weapon (fire)  
> **Focus Cost:** 2  
> **Spell Difficulty:** 14  
> **Type:** Continuous Use (×25)  
> **Magic Cost:** 700 = 2×14×25
>___
> **Combined Cost:** 710 = 10+700  
> **Difficulty:** 18  
> **Time:** 17 days

# Modified Effects

Some spells like *alter size* and *feather fall* have modifiers to how they are used which alter their focus cost and spellcasting difficulty. These effects must be considered during the crafting of the item the same as other choices like elemental type for *magic weapon*.

For example: if you wanted to make an item that uses *feather fall* that is capable of targeting two characters you would treat its focus cost as 2 (instead of 1) and its spellcasting difficulty as 11 (instead of 10). The base magic cost would be 2 multiplied by 11, for a total of 22.

## Spell Effectiveness

Potions and magic items that require attunement provide their magical effects at a fixed effectiveness when used. This number can be improved by treating that spell as having a higher desired spell difficulty when crafted, allowing them to have an effectiveness of a critical or of that matching higher tier spells.

For example: if you wanted to make an item that uses *mend* with a critical effect you would treat its spellcasting difficulty as 21 instead of 14. The base magic cost would be 2 multiplied by 21, for a total of 42.

## Metamagics

Those who can both cast spells and are trained in [metamagics](/Fantasy/Talents.md#metamagic) can cast those spells in a modified way. Metamagics can be used in the same way to modify spells as they are applied to the creation of magic items. They cannot be used to modify the casting of spells directly from spellstones, but can be used to modify the spell that would be cast from a spellstone when crafted.

Crafting items using metamagics has a few restrictions. Adjustments made by metamagics cannot reduce the focus cost below its base focus cost, and it cannot reduce the spellcasting difficulty to zero. This restriction does not prevent those metamagics from being applied, it only prevents them from reducing these values in this way. Similar to the normal application of metamagics, crafted items cannot have metamagics applied that would generate no change in their use.

Magic effects that require a trigger are considered to have a [bonus effect](#bonus-effects) which is a [trigger](#triggers) instead of using the triggered metamagic.

# Multiple Effects and Bonus Effects

Magic items are not limited to a single magic effect. If an item is desired to have multiple effects, add the costs of all effects together, then multiply that total by a multiplier determined by the number of effects. This multiplier is equal to one half plus one half for *each* effect.

For example: an item with 2 effects would have the combined costs multiplied by 1½, but an item with 5 effects would have the combined costs multiplied by 3.

Magic items can also be given one or more of several bonus effects: *triggers*, *curses*, *harmonization*, and *catalyzation*. These effects are not spells themselves, but alter how other effects of that item work. Bonus effects themselves do not have a base magic cost, but do count as an additional effect which increases the multiplier for the number of effects present on an item.

For example: an item with a single spell effect and the triggered bonus effect would have the cost of the single spell effect multiplied by 1½ for having two total effects.

## Triggers

Any type of spell effect application can become triggered. The trigger sets a condition for it to be activated, and it must be activated in this way to be used.

Most metamagics provide small adjustments to spells in terms of focus cost and spell difficulty. Spells modified by the *triggered* metamagic are different. Rather than applying the cost of the triggered metamagic to the focus cost and spell difficulty, treat the trigger as a bonus magic effect. This means it has no base focus cost, but still increases the multiplier for having multiple effects.

Triggers that apply under conditions outside of the user's control simply happen and do not require the use of actions. Any triggers that require user activation are considered swift actions. Once an item is triggered, if it requires attunement, the item's user is alerted (if it happened outside of their control) and they must decide in that moment if they want to attune to it. They may choose to manually attune to it so long as the condition for that trigger is met.

Triggers on items follow the same rules as usual for triggered metamagics with one bonus rule: any condition is valid so long as it is knowable by the user, provided by the context of the spell, or involves detection of details within 100m from the user's location (even if not otherwise known). A magic item can only perform one trigger at a time.

> ##### Triggered Magic Gear Crafting Example
> **Item:** Straight Sword of Orc Detection
>___
> **Base Item:** Straight Sword  
> **Base Cost:** 5
>___
> **Spell:** Light (blue light)  
> **Focus Cost:** 1  
> **Spell Difficulty:** 10  
> **Type:** Continuous Use (×25)  
> **Effects:** 2 (×1½)  
> **Magic Cost:** 375 = 1×10×25×1½
>___
> **Combined Cost:** 380 = 5+375  
> **Difficulty:** 16  
> **Time:** 11 days

## Curses

Curses are a special type of triggered effect. They are applied to items in the same way as normal triggered effects. The condition specified by a curse does not trigger a spell, instead it provides context for a drawback. There are two types of curses: *limitation* curses and *shackling* curses. An item can have both kinds of curses, but only one of each.

Limitation curses provide restrictions how on the item is allowed to be used. These limitations can either prevent the item from providing magical effects or by directly influencing the actions of their users. This includes forcing the user to attune to the item when a different triggered effect occurs, essentially forcing the item to activate.

Shackling curses are much more prohibitive than limitation curses. Once attuned to an item with a shackling curse, the item cannot be removed or deattuned except by a spell that removes or disables the curse, or by meeting the conditions of the curse.

All cursed items have conditions, even if they are not always known to their user.

Curses follow similar conditions to triggered effects: any condition is valid so long as it is knowable by the user, provided by the context of the curse, or involves detection of details within 100m from the user's location (even if not otherwise known).

## Harmonization

The purpose of harmonization is to unify the collective pool of uses on spellstones. For example, if a spellstone can cast the spells *inspire* and *suggestion* each once a day. After that spellstone is harmonized, it can cast either of them, collectively, twice a day. So one day it could be used to cast inspire twice, then the next day suggestion twice.

This effect applies to all spells in that spellstone that are of the same category of spell usage (limited use *or* daily use), even if those spells have a different focus cost or spell difficulty.

For example: A harmonized spellstone with limited uses of jolt but per day uses of inspire and suggestion, could interchangably use inspire and suggestion. It could not use its per day uses to cast jolt, and vice versa.

## Catalyzation

This effect, like harmonization, increases the versatility of spellstones. Spellstones with this effect are no longer limited by their per day uses, but in order to cast spells exceeding their per day limit those spells will cost focus instead. Casting spells in this way is only possible for characters who have a skill appropriate to cast those spells, even if they do not have that spell learned.

Limited use magic items gain no bonus from catalyzation.