import { createPlan } from "./plan.js";
import {usePlants, addPlant} from "./field.js"
import {harvestPlants} from "./harvester.js"
import { plantSeeds } from "./tractor.js";
import { createCorn } from "./seeds/corn.js";

const yearlyPlan = createPlan()
let corn = createCorn()

addPlant(corn)
console.log("yearly plan is:", yearlyPlan)

plantSeeds(yearlyPlan)

let allPlants = usePlants()
console.log("all plants ", allPlants)

const harvestedPlants = harvestPlants(allPlants)
console.log("Here's ye ol harvest", harvestedPlants)