import { Marque } from "./marque.model";
import { Image } from "./Image.model";
export class camion {

    idcamion? : number;
    nomcamion? : string;
    prixcamion? : number;
     description? : string;
      marque? : Marque;
      image! : Image
      imageStr!:string
      images!: Image[];

    }
    