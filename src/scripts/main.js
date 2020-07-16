import { createPlan } from "./plan.js";
import {usePlants} from "./field.js"
import {harvestPlants} from "./harvester.js"
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan()

console.log("yearly plan is:", yearlyPlan)

plantSeeds(yearlyPlan)

let allPlants = usePlants()
console.log("all plants ", allPlants)

const harvestedPlants = harvestPlants(allPlants)
console.log(harvestedPlants)