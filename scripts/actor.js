// Import the base Actor class
import { Actor } from "../../../src/foundry/foundry.js/modules/actor/entity.js";

// Create a new class ArmeneaActor that extends the base Actor class
class ArmeneaActor extends Actor {
  // Override the prepareData method
  prepareData() {
    // Call the base class's prepareData method
    super.prepareData();

    // Destructure the data object for easier access
    const actorData = this.data;
    const data = actorData.data;

    // Prepare the data for Armenea actors
    this._prepareArmeneaData(data);
  }

  // A custom method to prepare the Armenea-specific data
  _prepareArmeneaData(data) {
    // Set up actor values
    data.name = data.name || "";
    data.volk = data.volk || "";
    data.alter = data.alter || 0;
    data.geschlecht = data.geschlecht || "";
    data.berufung = data.berufung || {};
    data.stufe = data.stufe || 0;
    data.AP = data.AP || 0;
    data.benötigt = data.benötigt || 0;
    data.talentpunkte = data.talentpunkte || 0;
    data.initiative = data.initiative || 0;
    data.waffengattung = data.waffengattung || {};
    data.sprachen = data.sprachen || {};
    data.intelligenz = data.intelligenz || 0;
    data.wahrnehmung = data.wahrnehmung || 0;
    data.wille = data.wille || 0;
    data.charisma = data.charisma || 0;
    data.instinkt = data.instinkt || 0;
    data.fingerfertigkeit = data.fingerfertigkeit || 0;
    data.stärke = data.stärke || 0;
    data.beweglichkeit = data.beweglichkeit || 0;
    data.konstitution = data.konstitution || 0;
    data.lebenskraftAktuell = data.lebenskraftAktuell || 0;
    data.lebenskraftMaximal = data.lebenskraftMaximal || 0;
    data.ersteSchwelleLeben = data.ersteSchwelleLeben || 0;
    data.zweiteSchwelleLeben = data.zweiteSchwelleLeben || 0;
    data.dritteSchwelleLeben = data.dritteSchwelleLeben || 0;
    data.vierteSchwelleLeben = data.vierteSchwelleLeben || 0;
    data.ohnmacht = data.ohnmacht || 0;
    data.koma = data.koma || 0;
    data.tod = data.tod || 0;
    data.LE_Regeneration = data.LE_Regeneration || 0;
    data.verletzungen = data.verletzungen || "";
    data.auraAktuell = data.auraAktuell || 0;
    data.auraMaximal = data.auraMaximal || 0;
    data.bewusstsein = data.bewusstsein || 0;
    data.bewusstseinGrade = data.bewusstseinGrade || 0;
    data.auraDifferenz = data.auraDifferenz || 0;
    data.schicksal = data.schicksal || 0;
    data.AP_RegenerationNachtruhe = data.AP_RegenerationNachtruhe || 0;
    data.AP_RegenerationEntspannen = data.AP_RegenerationEntspannen || 0;
    data.AP_RegenerationSpeziell = data.AP_RegenerationSpeziell || 0;
    data.auraVerloren = data.auraVerloren || 0;
    data.auraGebunden = data.auraGebunden || 0;
    data.sündenpunkte = data.sündenpunkte || 0;
    data.karma = {
    gutesKarma: {
        liebe: {
            punkte: data.karma?.gutesKarma?.liebe?.punkte || 0,
            grad: data.karma?.gutesKarma?.liebe?.grad || 0,
            pfad: data.karma?.gutesKarma?.liebe?.pfad || ""
        },
        mitleid: {
            punkte: data.karma?.gutesKarma?.mitleid?.punkte || 0,
            grad: data.karma?.gutesKarma?.mitleid?.grad || 0,
            pfad: data.karma?.gutesKarma?.mitleid?.pfad || ""
        },
        gerechtigkeit: {
            punkte: data.karma?.gutesKarma?.gerechtigkeit?.punkte || 0,
            grad: data.karma?.gutesKarma?.gerechtigkeit?.grad || 0,
            pfad: data.karma?.gutesKarma?.gerechtigkeit?.pfad || ""
        },
        loyalität: {
            punkte: data.karma?.gutesKarma?.loyalität?.punkte || 0,
            grad: data.karma?.gutesKarma?.loyalität?.grad || 0,
            pfad: data.karma?.gutesKarma?.loyalität?.pfad || ""
        },
        wahrhaftigkeit: {
            punkte: data.karma?.gutesKarma?.wahrhaftigkeit?.punkte || 0,
            grad: data.karma?.gutesKarma?.wahrhaftigkeit?.grad || 0,
            pfad: data.karma?.gutesKarma?.wahrhaftigkeit?.pfad || ""
        },
        heldenmut: {
            punkte: data.karma?.gutesKarma?.heldenmut?.punkte || 0,
            grad: data.karma?.gutesKarma?.heldenmut?.grad || 0,
            pfad: data.karma?.gutesKarma?.heldenmut?.pfad || ""
        },
        pflichterfüllung: {
            punkte: data.karma?.gutesKarma?.pflichterfüllung?.punkte || 0,
            grad: data.karma?.gutesKarma?.pflichterfüllung?.grad || 0,
            pfad: data.karma?.gutesKarma?.pflichterfüllung?.pfad || ""
        },
    },
    bösesKarma: {
        hass: {
            punkte: data.karma?.bösesKarma?.hass?.punkte || 0,
            grad: data.karma?.bösesKarma?.hass?.grad || 0,
            pfad: data.karma?.bösesKarma?.hass?.pfad || ""
        },
        unbarmherzigkeit: {
            punkte: data.karma?.bösesKarma?.unbarmherzigkeit?.punkte || 0,
            grad: data.karma?.bösesKarma?.unbarmherzigkeit?.grad || 0,
            pfad: data.karma?.bösesKarma?.unbarmherzigkeit?.pfad || ""
        },
        selbstgerechtigkeit: {
            punkte: data.karma?.bösesKarma?.selbstgerechtigkeit?.punkte || 0,
            grad: data.karma?.bösesKarma?.selbstgerechtigkeit?.grad || 0,
            pfad: data.karma?.bösesKarma?.selbstgerechtigkeit?.pfad || ""
        },
        verrat: {
            punkte: data.karma?.bösesKarma?.verrat?.punkte || 0,
            grad: data.karma?.bösesKarma?.verrat?.grad || 0,
            pfad: data.karma?.bösesKarma?.verrat?.pfad || ""
        },
        lüge: {
            punkte: data.karma?.bösesKarma?.lüge?.punkte || 0,
            grad: data.karma?.bösesKarma?.lüge?.grad || 0,
            pfad: data.karma?.bösesKarma?.lüge?.pfad || ""
        },
        arglist: {
            punkte: data.karma?.bösesKarma?.arglist?.punkte || 0,
            grad: data.karma?.bösesKarma?.arglist?.grad || 0,
            pfad: data.karma?.bösesKarma?.arglist?.pfad || ""
        },
        pflichtvergessenheit: {
            punkte: data.karma?.bösesKarma?.pflichtvergessenheit?.punkte || 0,
            grad: data.karma?.bösesKarma?.pflichtvergessenheit?.grad || 0,
            pfad: data.karma?.bösesKarma?.pflichtvergessenheit?.pfad || ""
        },
      }
    } // end data.Karma
    talente: {
    diebesfertigkeiten: {
        name: "Diebesfertigkeiten",
        lernfaktor: 0, // Setzen Sie den zugehörigen Lernfaktor für die Talentgruppe ein
        gassenwissen: {
            name: "Gassenwissen",
            attribut1: data.wahrnehmung,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        fallenEntschärfen: {
            name: "Fallen entschärfen",
            attribut1: data.wahrnehmung,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        schlösserKnacken: {
            name: "Schlösser knacken",
            attribut1: data.instinkt,
            attribut2: data.fingerfertigkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        taschendiebstahl: {
            name: "Taschendiebstahl",
            attribut1: data.instinkt,
            attribut2: data.fingerfertigkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        }
    }
    gesellschaft: {
        name: "Gesellschaft",
        lernfaktor: 0, // Setzen Sie den zugehörigen Lernfaktor für die Talentgruppe ein
        betören: {
            name: "Betören",
            attribut1: data.charisma,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        etikette: {
            name: "Etikette",
            attribut1: data.intelligenz,
            attribut2: data.charisma,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        feilschen: {
            name: "Feilschen",
            attribut1: data.charisma,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        lügen: {
            name: "Lügen",
            attribut1: data.charisma,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        menschenkenntnis: {
            name: "Menschenkenntnis",
            attribut1: data.intelligenz,
            attribut2: data.wahrnehmung,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        taschenspielertricks: {
            name: "Taschenspielertricks",
            attribut1: data.charisma,
            attribut2: data.fingerfertigkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        vortrag: {
            name: "Vortrag",
            attribut1: data.charisma,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        }
    }
    körperlicheTalente: {
        name: "Körperliche Talente",
        lernfaktor: 0, // Setzen Sie den zugehörigen Lernfaktor für die Talentgruppe ein
        athletik: {
            name: "Athletik",
            attribut1: data.beweglichkeit,
            attribut2: data.konstitution,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        fahrzeugLenken: {
            name: "Fahrzeug lenken",
            attribut1: data.instinkt,
            attribut2: data.fingerfertigkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        klettern: {
            name: "Klettern",
            attribut1: data.stärke,
            attribut2: data.beweglichkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        körperkontrolle: {
            name: "Körperkontrolle",
            attribut1: data.instinkt,
            attribut2: data.beweglichkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        reiten: {
            name: "Reiten",
            attribut1: data.instinkt,
            attribut2: data.charisma,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        schleichen: {
            name: "Schleichen",
            attribut1: data.wahrnehmung,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        schwimmen: {
            name: "Schwimmen",
            attribut1: data.stärke,
            attribut2: data.beweglichkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        seemannskunst: {
            name: "Seemannskunst",
            attribut1: data.stärke,
            attribut2: data.fingerfertigkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        zechen: {
            name: "Zechen",
            attribut1: data.instinkt,
            attribut2: data.konstitution,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        }
    }
    naturUndWildnis: {
        name: "Natur und Wildnis",
        lernfaktor: 0, // Setzen Sie den zugehörigen Lernfaktor für die Talentgruppe ein
        pflanzenkunde: {
            name: "Pflanzenkunde",
            attribut1: data.intelligenz,
            attribut2: data.wahrnehmung,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        spurenLesen: {
            name: "Spuren lesen",
            attribut1: data.instinkt,
            attribut2: data.wahrnehmung,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        tierkunde: {
            name: "Tierkunde",
            attribut1: data.intelligenz,
            attribut2: data.wille,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        wildnisleben: {
            name: "Wildnisleben",
            attribut1: data.intelligenz,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        }
    }
    wissenstalente: {
        name: "Wissenstalente",
        alchimie: {
            name: "Alchimie",
            attribut1: data.intelligenz,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        geographie: {
            name: "Geographie",
            attribut1: data.intelligenz,
            attribut2: data.wille,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        mechanik: {
            name: "Mechanik",
            attribut1: data.intelligenz,
            attribut2: data.fingerfertigkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        religionskunde: {
            name: "Religionskunde",
            attribut1: data.intelligenz,
            attribut2: data.wille,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        staatskunde: {
            name: "Staatskunde",
            attribut1: data.intelligenz,
            attribut2: data.wille,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        sternkunde: {
            name: "Sternkunde",
            attribut1: data.intelligenz,
            attribut2: data.wille,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        },
        völkerkunde: {
            name: "Völkerkunde",
            attribut1: data.intelligenz,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0
        }
    }
    einzeltalente: {
        name: "Einzeltalente",
        beobachten: {
            name: "Beobachten",
            attribut1: data.wahrnehmung,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0,
            lernfaktor: 0 // Setzen Sie den zugehörigen Lernfaktor für die Fertigkeit ein
        },
        handwerk: {
            name: "Handwerk",
            attribut1: data.fingerfertigkeit,
            attribut2: data.fingerfertigkeit,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0,
            lernfaktor: 0 // Setzen Sie den zugehörigen Lernfaktor für die Fertigkeit ein
        },
        heilkunde: {
            name: "Heilkunde",
            attribut1: data.intelligenz,
            attribut2: data.instinkt,
            talentwert: 0,
            talentbonus: 0,
            gesamtwert: 0,
            lernfaktor: 0 // Setzen Sie den zugehörigen Lernfaktor für die Fertigkeit ein
        }
    }
    beschränkteTalente: {
        name: "Beschränkte Talente",
        fertigkeiten: [{
                name: "", // Der Name der Fertigkeit wird vom Spieler hinzugefügt
                attribut1: null, // Das erste Attribut wird vom Spieler hinzugefügt
                attribut2: null, // Das zweite Attribut wird vom Spieler hinzugefügt
                talentwert: 0,
                talentbonus: 0,
                gesamtwert: 0,
                lernfaktor: 0 // Setzen Sie den zugehörigen Lernfaktor für die Fertigkeit ein
            },
            {
                name: "", // Der Name der Fertigkeit wird vom Spieler hinzugefügt
                attribut1: null, // Das erste Attribut wird vom Spieler hinzugefügt
                attribut2: null, // Das zweite Attribut wird vom Spieler hinzugefügt
                talentwert: 0,
                talentbonus: 0,
                gesamtwert: 0,
                lernfaktor: 0 // Setzen Sie den zugehörigen Lernfaktor für die Fertigkeit ein
            },
            {
                name: "", // Der Name der Fertigkeit wird vom Spieler hinzugefügt
                attribut1: null, // Das erste Attribut wird vom Spieler hinzugefügt
                attribut2: null, // Das zweite Attribut wird vom Spieler hinzugefügt
                talentwert: 0,
                talentbonus: 0,
                gesamtwert: 0,
                lernfaktor: 0 // Setzen Sie den zugehörigen Lernfaktor für die Fertigkeit ein
            }
        ]
      }
    } // End Talente
    
    // Add more actor values here
    // ...
  }
}

// Export the ArmeneaActor class for use in other modules
export default ArmeneaActor;
