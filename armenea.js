// armenea.js
import { ArmeneaActor } from "./actor.js";
import { ArmeneaItem, ArmeneaWeapon } from "./items.js";
import { ArmeneaActorSheet } from "./actor-sheet.js";
import { ArmeneaItemSheet, ArmeneaWeaponSheet } from "./item-sheets.js";

Hooks.once("init", function () {
  console.log("Armenea | Initializing Armenea System");

  // Registrierung der Schauspieler-Klasse
  CONFIG.Actor.entityClass = ArmeneaActor;
  CONFIG.Item.entityClass = ArmeneaItem;

  // Registrierung der Sheets
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("armenea", ArmeneaActorSheet, { makeDefault: true });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("armenea", ArmeneaItemSheet, { makeDefault: true, types: ["generic"] });
  Items.registerSheet("armenea", ArmeneaWeaponSheet, { makeDefault: true, types: ["weapon"] });

  // Weitere Initialisierungen, falls notwendig...
});
