import { Component, OnInit } from '@angular/core';
import { camion } from 'src/app/model/camion.model';
import { Marque } from 'src/app/model/marque.model';
import { CamionService } from '../camion.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styleUrls: ['./liste-marques.component.css']
})
export class ListeMarquesComponent implements OnInit {

    
  camions! : camion[];
marques!: Marque[];
idMarque!: number ;
updateddmar:Marque = {"idmar":0,"nommar":""};
ajout:boolean=true;

 
     constructor(private camionService: CamionService
) {  
}
ngOnInit(): void { 
     /*  this.marques = this.camionService.listemarques(); */
     /*  this.camions = this.camionService.listecamion(); */
      this.camionService.listemarques().subscribe(mars => {this.marques = mars;
console.log(mars); 
}); 
}
marqueUpdated(mar:Marque){
  console.log("Cat updated event",mar);
  this.camionService.ajoutermarrque(mar).
   subscribe( ()=> this.chargermarque());
  }
  chargermarque(){
    this.camionService.listemarques().subscribe(mars => {this.marques = mars;
    console.log(mars); 
    });
  }
  updatemar(mar:Marque) {
    this.updateddmar   =mar;
    this.ajout=false; 
    }
}
