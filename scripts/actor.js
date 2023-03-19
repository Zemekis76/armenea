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

    // Add more actor values here
    // ...
  }
}

// Export the ArmeneaActor class for use in other modules
export default ArmeneaActor;
