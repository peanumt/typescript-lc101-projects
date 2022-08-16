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
