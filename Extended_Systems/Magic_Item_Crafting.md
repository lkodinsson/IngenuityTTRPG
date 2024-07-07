# Magic Item Crafting

During [downtime crafting](/Extended_Systems/Item_Crafting#downtime-crafting) you may also create any [existing magic items](/Equipment/Magic_Items) or you may create entirely new magic items. If the item is being made from scratch, the requirements are the same as making it normally with the addition that at least one participant in the craft must be able to use any relevant spell powers. If only a magic effect is being added to an item, then the only requirement is the ability to use that spell power.

## Item Cost

A magic item is made of two parts: its *base item* and its *magic effects*. These parts may be crafted separately or together. When applying magic effects to an already existing item, the only cost that matters for determining difficulty and time required is just the cost of the magic effects. When creating that item from scratch these two values are added together.

Magic item effects fall into several different categories each of which determines both their use and cost: *limited use*, *daily use*, *continuous use*, or *spell catalyst*. In addition to these effects there are also *scrolls*, but scrolls are items that provide information to casts spells rather than being actual magic effects that can be applied to items. The cost of each type first requires finding the *base magic cost* as determined by the chosen spell power's tier.

If a magic effect requires a material, the cost of that material is considered part of the magic cost rather than as an additional cost. If a magic effect is applied to an item, you either require that item in advance or it is considered an additional cost to create the item.

##### Table: Base Magic Cost
| Tier | Tier Name | Cost |
|:-:|:-:|:-:|
| 1 | Lesser | 5 |
| 2 | Greater | 25 |
| 3 | Epic | 125 |

After finding the base magic cost each magic effect type is multiplied or divided further.

##### Table: Magic Effect Costs
| Modifier | Cost Formula |
|:-|:-|
| Base Magic Cost (BMC) | 5 ^ Tier |
| Scrolls | BMC × 2 |
| Limited Use | BMC × Uses |
| Daily Use | BMC × Uses × 5 |
| Continuous Use | BMC × 25 |
| Spell Catalyst | BMC × 2 |
| Modified Effect | BMC × (New Focus Cost ÷ Old Focus Cost) × (New Difficulty ÷ Old Difficulty) |
| Multiple Effects | Combined Magic Costs × (1 + Number of Effects) ÷ 2 |

> ##### Crafting Example: Various Magic Costs
> **Tier:** 2  
> **Base Magic Cost:** 25 = 5 ^ 2
> ___
> **Limited Uses:** 5  
> **Limited Use Cost:** 125 = 25 × 5
> ___
> **Daily Uses:** 2  
> **Daily Use Cost:** 250 = 25 × 2 × 5
> ___
> **Continuous Use Cost:** 625 = 25 × 25
> ___
> **Spell Catalyst Cost:** 50 = 25 × 2

### Making Choices

After deciding which spell power to use for the magic effect you must also make any decisions that the spell normally requests. This includes decisions that alter the focus cost and difficulty to cast the spell and any modal or elemental choices. Any other modifiers from talents, traits, or spellcasting skills cannot be used to modify spells crafted onto items except for the [metapower](/Features/Talents#metapowers) talent. Modifying spells in this way can never reduce the focus cost or difficulty to less than 1.

> ##### Crafting Example: Modified Effect
> **Spell:** Alter Size  
> **Tier:** 2  
> **Base Magic Cost:** 25 = 5 ^ 2
> ___
> **Choice:** Size increased by two steps  
> **Focus Cost:** 3 (from 2)  
> **Difficulty:** 9 (from 6)  
> **New Cost:** 56.3 = 25 × (3 ÷ 2) × (9 ÷ 6)

## Scrolls

The main purpose of a scroll is to provide the ability to cast a spell using the wizardry skill, so they are not useful to craft for oneself since crafting them already requires the ability to cast the spell. However they can be crafted to give to or sell to others. Scrolls are created from pieces of paper as their material.

##### Table: Scrolls Cost
| Tier | Tier Name | Price |
|:-:|:-:|:-:|
| 1 | Lesser | 10 |
| 2 | Greater | 50 |
| 3 | Epic | 250 |

## Limited and Daily Use Items

Both limited and daily use items are usable a predetermined number of times. Limited use items have an overall total limit and then they permanently lose their magic effect, while daily use items are reusable each day. There are several different forms that these items can take each with slightly different applications: *potions*, *charms*, and *spellstones*. When creating an item in this way, if it can be used multiple times the exact number of times it can be used is specified during that item's creation. Potions and charms are one use, but spellstones may be usable more than once.

#### Potions

Potions are typically one time limited use items, but they can also be created as once per day items which are called *refilling potions*. Potions are created from an alchemical base as their material.

> ##### Crafting Example: Limited Use Potion
> **Spell:** ?  
> **Tier:** 2  
> **Base Magic Cost:** 25 = 5 ^ 2
> ___
> **Type:** Limited Use Potion  
> **Uses:** 1  
> **Magic Effect Cost:** 25 = 25 × 1  
> **Difficulty:** 6  
> **Time:** 4 hours

#### Charms

Charms are one time limited use magic items which can be activated by attaching them to objects or reading them, destroying them in the process. Charms are created from pieces of paper as their material.

#### Spellstones

When gemstones are given limited or daily use effects they act as amplifiers for spells cast from them, which are called spellstones. Gemstones come in three different qualities: *rough*, *fine*, and *magnificent*. Each type provides an incrementally larger bonus to spells cast from them ranging from +1 to +3, but each quality costs significantly more than the last.

##### Table: Gemstones as Spellstones
| Quality | Cost | Bonus |
|:-|:-:|:-:|
| Rough | 10 | +1 |
| Fine | 100 | +2 |
| Magnificent | 500 | +3 |

Gemstones used to make spellstones are not considered materials; they are items that have magic effects applied to them. This means that you must have access to gemstones or a marketplace to purchase them.

> ##### Crafting Example: Daily Use Spellstone
> **Spell:** ?  
> **Tier:** 1  
> **Base Magic Cost:** 5 = 5 ^ 1
> ___
> **Type:** Daily Use Spellstone  
> **Uses:** 1  
> **Magic Effect Cost:** 25 = 5 × 1 × 5  
> **Difficulty:** 6  
> **Time:** 4 hours

## Magic Equipment

Any magic items that provide effects with a duration are called magic equipment and are usually worn in your equipment slots similar to armour. Any magic items that provide effects with a duration also require attunement, which is done by taking the interact action with that item (taking one action). This can include magic equipment with limited use or daily use magic effects and are crafted the same way.

Magic equipment of any variety are items that have magic effects applied to them, which requires that the item be crafted in addition to the magic effect rather than as a material for the craft.

#### Continuous Use Items

Unlike the other item types, continuous use items can be used any number of tiems and with no fixed duration. These types of magic items can only be made with magic effects that have a duration and similar to other magic equipment: they require attunement. Continuous use items are typically the most expensive magic items to make as they are the most flexible and reusable. 

> ##### Crafting Example: Daily Use Spellstone
> **Spell:** ?  
> **Tier:** 2  
> **Base Magic Cost:** 25 = 5 ^ 2
> ___
> **Type:** Continuous Use Magic Equipment  
> **Magic Effect Cost:** 625 = 25 × 25  
> **Difficulty:** 11  
> **Time:** 7 days

## Spell Catalysts

Gemstones can be made into spell catalysts which allow you to cast spells through them. Similar to spellstones, the quality of the gemstone used will provide a bonus to the spell that is cast. When making a spell catalyst you still choose a specific spell to use for the effect. This means that each spell catalyst effect is used for casting one specific spell. Unlike other magic items, casting spells from spell catalysts costs focus as they do not provide uses themselves, they only modify the casting of a spell.

Like spellstones, gemstones used to make spell catalysts are not considered materials; they are items that have magic effects applied to them. This means that you must have access to gemstones or a marketplace to purchase them.

> ##### Crafting Example: Spell Catalyst
> **Spell:** ?  
> **Tier:** 3  
> **Base Magic Cost:** 125 = 5 ^ 3
> ___
> **Type:** Spell Catalyst  
> **Magic Effect Cost:** 250 = 125 × 2  
> **Difficulty:** 10  
> **Time:** 5 days

## Modified Effects

?

## Multiple Effects

Magic items are not limited to a single magic effect. If an item is desired to have multiple effects (such as to attune to a single item and activate all of its effects), this can be done by adding the costs together then applying a multiplier based on the total number of effects.

> ##### Crafting Example: Multiple Magic Effects
> **Magic Effect Costs:** 25, 125, 250, 500  
> **Combined Cost:** 900 = 25 + 125 + 250 + 500
___
> **Number of Effects:** 4  
> **Multiplier:** 2.5 = (1 + 4) ÷ 2
> ___
> **Total Magic Cost:** 2250 = 900 × 2.5  
> **Difficulty:** 13  
> **Time:** 14 days

## Upgrading

Existing magic items that already have magic effects can be upgraded add multiple effects or improve existing effects. In this case, treat the initial and new magic costs the same as you would the initial and new item costs for upgrading a normal item.

##### Crafting Example: Upgrading Magic Items
> **Initial Magic Effect Cost:** 125  
> **New Magic Effect Cost:** 250  
> **Difficulty:** 10
> ___
> **Upgrade Cost:** 125 = 250 - 125  
> **Upgrade Time:** 3 days