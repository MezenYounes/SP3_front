import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styleUrls: ['./update-marque.component.css']
})
export class UpdateMarqueComponent implements OnInit {

  @Input()
  marque!: Marque;
  @Output()
marqueUpdated = new EventEmitter<Marque>();

@Input()
ajout!:boolean;


  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.marque);
    }
    savemarque(){
      this.marqueUpdated.emit(this.marque);
      
    
  

    }
}
