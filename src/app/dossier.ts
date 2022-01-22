import { Medecin } from "./medecin";
import { Patien } from "./patien";

export class Dossier {
    id: any;
    date: any;
    description: any;
    medecin = new Medecin();
    patien = new Patien();

}
