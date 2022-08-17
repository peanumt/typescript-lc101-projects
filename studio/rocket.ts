import {Payload} from "./Payload";
import {Astronaut} from "./astronaut";
import {Cargo} from "./cargo";
export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Payload[]=[];
    astronauts: Payload[]=[];
    constructor(name:string,totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
}
addCargo(cargo:Cargo) {
    if (this.canAdd(cargo)) {
        this.cargoItems.push(cargo);
        return true:
    }
    return false;
}

addAstronaut(astronaut: Astronaut) {
    if (this.canAdd(astronaut)) {
        this.astronauts.push(astronaut);
        return true;
    }
    return false;
}
canAdd(item: Payload): boolean {
    return this.currentWeightKg() + item.massKg()
}