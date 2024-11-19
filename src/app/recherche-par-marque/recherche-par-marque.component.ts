import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { Marque } from '../model/marque.model';
import { CamionService } from '../services/camion.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent implements OnInit {

    
  camions! : camion[];
marques!: Marque[];
idMarque!: number ;
 
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
    onChange() {
      if (this.idMarque !== undefined && !isNaN(this.idMarque)) {
        this.camionService.rechercherparmarque(this.idMarque)
          .subscribe(cams => {
            this.camions = cams;
          });
      } else {
        console.error('idMarque is not a valid number. Cannot make the request.');
      }
    }

 
    
}
