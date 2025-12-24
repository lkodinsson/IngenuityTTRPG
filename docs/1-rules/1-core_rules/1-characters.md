---
title: Characters
---

import sizesTable from "@site/src/components/tables/sizes.yml";
import skillsTable from "@site/src/components/tables/skills.yml";
import statsTable from "@site/src/components/tables/stats.yml";
import proficienciesTable from "@site/src/components/tables/proficiencies.yml";

<!--
Overview of character features here
-->

## Stats

Stats are any measurable property belonging to a character, typically represented by *dice* or a *number*. Some stats, like *resources* and *defences* are derived from other features, like *attributes*. They can vary in scope, meaning they can be very broad or very specific.

### Attributes

The most important stat that a character has are their attributes. They describe the core aspects of your character and are used when performing any game action that requires a dice roll.

##### Table: Attributes

<YAMLTable tableData={statsTable} filters={{"type":["Attribute"]}} sort={null} />

Each attribute is represented by dice ranging from d4 to d12.

##### Table: Attribute Dice

| Size | Description |
| :--: | :---------- |
|  d4  | Weak        |
|  d6  | Average     |
|  d8  | Great       |
| d10  | Excellent   |
| d12  | Superb      |

:::info Example

A character who is a bodybuilder could be described as having *excellent strength* which would be a d10.

:::

### Resources

Surviving damage and using special abilities requires managing one's *resources*. All resources are represented by a number showing the *maximum* amount of that resource a character can have. Once a resource becomes depleted it can no longer be used until recovered.

##### Table: Resources

<YAMLTable tableData={statsTable} filters={{"type":["Resource"]}} sort={null} />

:::info Examples

Performing the *escape maneuver*, to hide in plain sight from enemies, requires spending *stamina*.  
Using the *power* of *telekinesis*, to move objects with the mind, requires spending *focus*.

:::

### Defences

When things happen to your character, your *defences* are used to measure your ability to passively response to those effects.

##### Table: Defences

<!--| Name               | Description                                                |
| :----------------- | :--------------------------------------------------------- |
| Constitution (CON) | Ability to shrug off effects that would influence the body |
| Evasion (EVA)      | Ability to avoid attacks and effects targeted at the body  |
| Willpower (WILL)   | Ability to ignore effects that would influence the mind    |
| Defense (DEF)      | Ability to reduce the amount of damage the body takes      |-->

<YAMLTable tableData={statsTable} filters={{"type":["Defence"]}} sort={null} />

### Other Stats

<!--Explanation for other stats-->

##### Table: Other Stats

<YAMLTable tableData={statsTable} filters={{"type":["Other"]}} sort={null} />

<!--Briefly talk about sizes-->

##### Table: Sizes

<YAMLTable tableData={sizesTable} headers={["Size","Name","Examples"]} values={["size","name","body"]} align={["Center","Left","Left"]} sort="size" />

## Skills

*Skills* represent practice in performing various groups of general tasks. Like attributes, skills are represented by dice and are rolled with your attributes to perform tasks.

##### Table: Skill Dice
| Size | Description |
| :--: | :---------- |
|  d4  | Untrained   |
|  d6  | Trained     |
|  d8  | Adept       |
| d10  | Expert      |
| d12  | Master      |

Most tasks are handled by the *mundane* skills. These represent groups of normal activities that most characters can perform while interacting with the world.

##### Table: Mundane Skills

<YAMLTable tableData={skillsTable} filters={{"type":["Mundane"]}}/>

Other types of tasks that are beyond the normal space of interaction are handled by the *supernatural* skills. Supernatural skills are primarily for using *powers*, which includes abilities of both a magical and nonmagical origin.

##### Table: Supernatural Skills

<YAMLTable tableData={skillsTable} filters={{"type":["Supernatural"]}}/>

## Proficiencies

*Proficiencies* are more precise forms of expertise that a character can learn, like a type of knowledge, specific activity, or familiar environment. Unlike attributes and skills, they are not represented by dice, instead they are represented by a number as a bonus ranging from +1 to +4.

##### Table: Proficiency Bonuses

| Bonus | Description |
| :---: | :---------- |
|   -   | Untrained   |
|  +1   | Trained     |
|  +2   | Adept       |
|  +3   | Expert      |
|  +4   | Master      |

A character can have a proficiency in more or less anything that a player can imagine. Proficiencies should be broad enough to be usable in at least a few different activities but specific enough to encompass a single theme. There is also a recommended list of [proficiencies](/rules/features/proficiences) to help players make decisions and help with consistent theming.

##### Table: Example Proficiencies

<YAMLTable
    tableData={proficienciesTable}
    filters={{"name":
        [
            "Aethermancy",
            "Boreal",
            "Cooking",
            "Driving",
            "Explosives",
            "Gangland",
            "Iron Jungle",
            "Jumping",
            "Peace",
            "Pyromancy",
            "Swimming",
            "Telepathy",
            "Wetlands",
            "Woodlands",
        ]
    }}
/>

Proficiencies are not exclusive, meaning that any other reasonable substitute for a proficiency can be used in the same circumstance.

:::info Examples

A character attempting to *ride a horse* could use a proficiency in *riding* or *horses*.  
A character attempting to *track an animal in the woods* could use a proficiency in *tracking* or *woodlands*.

:::

### Languages

The languages that a character can speak are also a type of proficiency and are acquired and represented the same way. Characters are considered *masters* of their native languages and characters who have mastery in a language never need to roll dice to use it.

:::note

To simplify language use, all characters are typically considered to share a *common* language.

:::

### Stats Proficiencies

Some specific proficiencies also modify certain character stats in addition to being useful for performing various activities like normal proficiencies.

##### Table: Stats Proficiencies

<YAMLTable
    tableData={proficienciesTable}
    headers={["Name","Stat","Description"]}
    values={["name","stat","desc"]}
    filters={{"stat":[""]}}
/>

## Archetypes

Your *archetype* is built from three parts that work together to provide a rough summary of who your character is.

##### Table: Archetype Features

| Name       | Description                                       |
| :--------- | :------------------------------------------------ |
| Ancestry   | The culture or genetics that shape your character |
| Background | How your character spent their early life         |
| Class      | The role your character currently plays           |

:::info Examples

Aenwyn is an Elven blacksmith and rogue.  
Baldur is a Dwarven bartender and fighter.  
Crowley is a British scholar and investigator.

:::

Each part of an archetype also provides other small bonuses that help define your character mechanically, like which skills and proficiencies they are trained in.

### Talents and Traits

?

### Maneuvers and Powers

?