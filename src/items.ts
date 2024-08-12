import { z } from "zod";
import { ItemStatSchema } from "./stats";

const statsRecord = z.record(ItemStatSchema, z.number());

const statValueArray = z.array(
  z.object({
    stat: ItemStatSchema,
    value: z.number(),
  })
);

export const ItemSchema = z
  .object({
    id: z.number(),
    pos: z.number(),
    isNew: z.boolean(),

    name: z.string(),
    type: z.string(),
    slot: z.string(),
    description: z.string(),

    eq: z.boolean(),
    equipSlot: z.string(),
    runeSlot: z.number(),
    quickSlot: z.number(),

    sprite: z.tuple([z.number(), z.number()]),
    spritesheet: z.string(),

    quality: z.number(),

    worth: z.number(),

    quantity: z.number(),

    cd: z.number(),
    cdMax: z.number(),
    uses: z.number(),
    infinite: z.boolean(),
    useText: z.string(),

    level: z.number(),
    originalLevel: z.number(),

    stats: statsRecord,
    implicitStats: statValueArray,
    requires: z.array(
      z.object({
        stat: ItemStatSchema.or(z.array(ItemStatSchema)),
        value: z.number(),
      })
    ),
    power: z.number(),
    enchantedStats: statsRecord,

    ability: z.boolean(),
    spell: z.object({
      name: z.string(),
      type: z.string(),
      quality: z.number().optional(),
      element: z.string().optional(),
      statType: z.string().or(z.array(z.string())).optional(),
      statMult: z.number().optional(),
      auto: z.boolean().optional(),
      manaCost: z.number().optional(),
      cdMax: z.number().optional(),
      castTimeMax: z.number().optional(),
      range: z.number().optional(),
      col: z.number().optional(),
      row: z.number().optional(),
      speed: z.number().optional(),
      isAttack: z.boolean().optional(),
      useWeaponRange: z.boolean().optional(),
      rolls: z.record(z.string(), z.number()),
      values: z.record(z.string(), z.number()),
      random: z
        .record(z.string(), z.tuple([z.number(), z.number()]))
        .optional(),
    }),
    range: z.number(),

    // item effects
    // TODO
    effects: z.array(z.unknown()),

    // faction reqs
    factions: z.array(
      z.object({
        id: z.string(),
        tier: z.number(),
        tierName: z.string(),
        name: z.string().optional(),
      })
    ),

    material: z.boolean(),
    noDestroy: z.boolean(),
    noDrop: z.boolean(),
    noSalvage: z.boolean(),
    noAugment: z.boolean(),
    noStack: z.boolean(),
    noStash: z.boolean(),

    // quest items
    quest: z.boolean(),
    ownerName: z.string(),

    // idol action
    action: z.string(),

    // keys
    keyId: z.string(),
    singleUse: z.boolean(),

    // mtxs
    mtxId: z.string(),

    // cards
    setSize: z.number(),

    // pets
    petCell: z.number(),
    petName: z.string(),
    petSheet: z.string(),
    petId: z.number(), // ?

    // recipes
    recipe: z.object({
      teaches: z.string(),
      profession: z.string(),
    }),

    // item skins
    itemSkin: z
      .object({
        slot: z.string(),
        types: z.array(z.string()),
        sprite: z.tuple([z.number(), z.number()]),
        spritesheet: z.string(),
      })
      .or(
        z.object({
          id: z.string(),
          name: z.string(),
        })
      ),

    // balancing info? seen on Noxious Egg
    info: z.object({
      version: z.number(),
    }),

    // ???
    fromMob: z.boolean(),

    // maybe upstream bugs?
    magicFind: z.unknown(),
    chance: z.unknown(),
  })
  .partial();

export type Item = z.infer<typeof ItemSchema>;
