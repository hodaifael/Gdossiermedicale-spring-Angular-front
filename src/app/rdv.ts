import { Medecin } from "./medecin";
import { Patien } from "./patien";

export class RDV {
    id: any;
    date_rdv: any;
    heur_rdv: any;
    medecin = new Medecin();
    patien = new Patien();
}
