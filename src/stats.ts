import { z } from "zod";

export const ItemStat = z.enum([
  "vit",
  "regenHp",
  "manaMax",
  "regenMana",
  "lvlRequire",
  "str",
  "int",
  "dex",
  "elementArcaneResist",
  "elementFrostResist",
  "elementFireResist",
  "elementHolyResist",
  "elementPoisonResist",
  "elementAllResist",
  "elementArcanePercent",
  "elementFrostPercent",
  "elementFirePercent",
  "elementHolyPercent",
  "elementPoisonPercent",
  "physicalPercent",
  "elementPercent",
  "spellPercent",
  "allAttributes",
  "attackSpeed",
  "castSpeed",
  "lifeOnHit",
  "armor",
  "blockAttackChance",
  "blockSpellChance",
  "dodgeAttackChance",
  "dodgeSpellChance",
  "addCritChance",
  "addCritMultiplier",
  "addAttackCritChance",
  "addAttackCritMultiplier",
  "addSpellCritChance",
  "addSpellCritMultiplier",
  "magicFind",
  "itemQuantity",
  "xpIncrease",
  "sprintChance",
  "weight",
  "catchChance",
  "catchSpeed",
  "fishRarity",
  "fishWeight",
  "fishItems",
]);

export const StatValue = z.enum([
  "mana",
  "manaMax",
  "manaReservePercent",
  "hp",
  "hpMax",
  "xpTotal",
  "xp",
  "xpMax",
  "level",
  "str",
  "int",
  "dex",
  "magicFind",
  "itemQuantity",
  "regenHp",
  "regenMana",
  "addCritChance",
  "addCritMultiplier",
  "addAttackCritChance",
  "addAttackCritMultiplier",
  "addSpellCritChance",
  "addSpellCritMultiplier",
  "critChance",
  "critMultiplier",
  "attackCritChance",
  "attackCritMultiplier",
  "spellCritChance",
  "spellCritMultiplier",
  "armor",
  "vit",
  "blockAttackChance",
  "blockSpellChance",
  "dodgeAttackChance",
  "dodgeSpellChance",
  "attackSpeed",
  "castSpeed",
  "elementArcanePercent",
  "elementFrostPercent",
  "elementFirePercent",
  "elementHolyPercent",
  "elementPoisonPercent",
  "physicalPercent",
  "elementPercent",
  "spellPercent",
  "elementArcaneResist",
  "elementFrostResist",
  "elementFireResist",
  "elementHolyResist",
  "elementPoisonResist",
  "elementAllResist",
  "sprintChance",
  "xpIncrease",
  "lifeOnHit",
  "catchChance",
  "catchSpeed",
  "fishRarity",
  "fishWeight",
  "fishItems",
]);

export type StatValue = z.infer<typeof StatValue>;