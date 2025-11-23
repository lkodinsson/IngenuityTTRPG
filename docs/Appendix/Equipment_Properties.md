# Equipment Properties

##### Table: Equipment Properties
| Name | Description |
|:-|:-|
| Backswing | If you miss with this weapon, your next attack with it during the same turn gets a +2 bonus in addition to the multiple attack penalty. |
| Block | When you use this item to perform the [block](/Appendix/Actions#block) action, the amount of damage dealt to the shield is reduced by this amount. |
| Cleave | Additional attacks with this weapon made against new targets during the same turn get a +2 bonus in addition to the multiple attack penalty. |
| Durability | The item is capable of absorbing a limited amount of damage by performing the block and parry actions. Any spent durability must be repaired to be recovered. At zero durability the item becomes broken, rendering it unusable until repaired. |
| Gripping | You have advantage against attempts to disarm. |
| Guarding | ? |
| Guiding | Attacks can be made with one additional degree of range before suffering from any range penalties. |
| Limited Perception | You have a -2 penalty to perception. |
| Mechanical | This weapon must be preloaded before attacking with it. |
| Momentum | Attacks with this weapon get a +1 bonus against targets you have already hit during the same turn, including hits made with other weapons. |
| Noisy | Wearing any amount of noisy armour gives you disadvantage while trying to be stealthy. |
| Nonlethal | Enemies brought to zero health from excessive damage from this weapon do not immediately risk death. |
| Obscuring | Each piece of obscuring equipment you wear increases the difficulty to discern your identity by 6 (from a base difficulty of 3). This only works if you are not wearing any notable and visible personal items. |
| Parry | When you use this item to perform the [parry](/Appendix/Actions#block) action, you add the parry value to your deflection. |
| Projectile | To attack with the weapon it requires the listed ammunition as a projectile. Projectiles typically require direct line of sight to your target. |
| Ranged | Attacks made work normally up to the first given range. Attacks beyond that range get a -1 attack penalty for each additional multiple of that range between you and the target. Attacks can only be made up to a maximum of the second given range. If only one range parameter is given, then that is also the maximum range. |
| Reach | Functions like the [ranged](#ranged) property, but attacks are still considered melee. |
| Reload | Attacks can only be made by first taking the time to reload the weapon (as specified). Reloading the weapon in this way requires the use of both hands. |
| Risky | If your melee attack target is within 1m of other characters, and your luck test results in a 1 or less, then the attack targets a random adjacent character instead. |
| Swift | Additional attacks made with this weapon get a +1 bonus in addition to the multiple attack penalty. |
| Thrown | Attacks can be made as if the weapon was ranged, but the weapon must then be retrieved after use. |
| Trip | This weapon provides a bonus when using it to perform the [trip](/Features/Maneuvers#trip) maneuver. |
| Two-handed | If the weapon is melee: attacks get a +1 bonus when used with two hands or a -1 penalty when used with only one hand. If the weapon is ranged: it must be used with two hands. |
| Unfit | Attacks made at the given range or closer get disadvantage. |
| Versatile | Attacks may be made using two hands to receive a +1 bonus to damage. |
| Wide | This weapon is too wide to make attack while next to walls, ceiling, or obstacles within 1m or your unfit distance (whichever is larger). |

## Item Qualities

Various types of equipment can also be given qualities making them better or worse. Equipment may have multiple types of qualities simultaneously, modifying one or more of their statistics.

Qualities effect different types of equipment differently, and are limited to only those as specified below.

##### Table: Equipment Effectiveness Qualities
| Name | Cost<br/>Adjustment | Weapons | Body Armours | Shields |
|:-|:-:|:-|:-|:-|
| Ruined | ×½ | -2 damage | -2 deflection | -4 durability |
| Crude | ×¾ | -1 damage | -1 deflection | -2 durability |
| Fine | ×2 or +50 | +1 damage | +1 deflection | +2 durability |
| Superior | ×4 or +200 | +2 damage | +2 deflection | +4 durability |
| Exceptional | ×8 or +600 | +3 damage | +3 deflection | +6 durability |
| Masterwork | ×15 or +1200 | +4 damage | +4 deflection | +8 durability |

##### Table: Gemstone Qualities
| Name | Bonus |
|:-|:-:|
| Rough | +1 |
| Polished | +2 |
| Magnificent | +3 |
<!--This is put here to preserve the gemstone quality names for later use-->

When qualities apply changes to a cost, each quality applies only one of its two cost adjustments. The most expensive cost increases must be chosen (additive first, multiplicative second) before cost reductions.

##### Table: Weight Qualities
| Name | Cost<br/>Adjustment | Weight<br/>Adjustment |
|:-|:-:|:-:|
| Heavy | ×¾ | ×1¼ |
| Light | ×2 or +50 | ×¾ |

After multiplying the weight adjustment, round the weight to the nearest quarter.

##### Table: Armour Weight Adjustments
| Quality | Armour<br/>Rating | Damage<br/>Reduction | Strength<br/>Adjustment | Block | Parry |
|:-|:-:|:-:|:-:|:-:|:-:|
| Heavy | -1 | +1 | +1 | +1 | -1 |
| Light | +1 | -1 | -1 | -1 | +1 |

When melee weapons have their weight adjusted it also modifies some of their other properties depending on their original properties.

##### Table: Melee Weapon Weight Adjustments
| Starting<br/>Features | Heavy | Light |
|:-|:-|:-|
| Swift | Versatile | Swift, +1 to attack |
| None | Versatile | Swift |
| Versatile | Two-handed | Swift |
| Two-handed | Two-handed, -1 to attack, +1 to damage | Versatile |

When ranged weapons have their weights adjusted they are modified more simply; heavier ranged weapons get -1 to attack but +1 to damage, while lighter ranged weapons get +1 to attack.

##### Table: Example Modified Weapons
| Name | Qualities | Damage | Weight | Properties |
|:-|:-|:-:|:-:|:-|
| Club | Crude, Heavy | 2 | ? | Momentum, Versatile |
| Shortbow | Superior, Heavy | 6 | ? | Ranged 35/280m, Two-handed, -1 Attack |
| Staff | Fine | 5 | ? | Backswing, Trip, Versatile |
| Straight Sword | Exceptional, Light | 6 | ? | Parry 3, Swift, +1 Attack |
| Warhammer | Masterwork, Heavy | 8 | ? | Momentum, Versatile |

## Custom Fit

For simplicity of gameplay most equipment is usable by most characters; by default all equipment is assumed to be fitted to humanoid creatures of sizes 3 to 5. Characters that are outside the usable range cannot wear the equipment. The cost of equipment in other sizes is equal to its size divided by 4.

Armour can also be made for non-humanoid creatures as well, which incurs an additional flat cost of +30.

If a creature has it's size changed by a special ability or effect, it is assumed that all of their gear resizes to match.