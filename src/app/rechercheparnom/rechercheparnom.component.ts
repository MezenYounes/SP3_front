import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import { TemplateLiteral } from '@angular/compiler';


@Component({
  selector: 'app-rechercheparnom',
  templateUrl: './rechercheparnom.component.html',
  styleUrls: ['./rechercheparnom.component.css']
})
export class RechercheparnomComponent implements OnInit {
  
  camions! : camion[];
  searchTerm!: string;
  nomcamion!: string;
  constructor(private camionService: CamionService) {  
    }
    ngOnInit(): void { 
    this.camionService.listecamion().subscribe(cams => {this.camions = cams;
    console.log(cams); 

    }
    ); 
    }
     
  }
  



