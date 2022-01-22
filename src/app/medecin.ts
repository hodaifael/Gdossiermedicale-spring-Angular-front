import { Dossier } from "./dossier";

export class Medecin {
    id: any;
    nom: any;
    prenom: any;
    tel: any;
    adresse: any;
    rdv: Dossier[] = [];
}
