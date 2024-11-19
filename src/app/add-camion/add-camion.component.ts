import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Image } from '../model/Image.model';
@Component({
  selector: 'app-add-camion',
  templateUrl: './add-camion.component.html',
  styleUrls: ['./add-camion.component.css']
})
export class AddCamionComponent implements OnInit { 
  
newcamion = new camion();
marques! : Marque[];
newIdmar! : number;
newmarque! : Marque;
uploadedImage!: File;
imagePath: any;


  constructor(private camionService: CamionService, private router :Router,private activatedRoute: ActivatedRoute,) { }
  ngOnInit() {
    /* this.marques = this.camionService.listemarques(); */
      this.camionService.listemarques().
      subscribe(mars => {this.marques = mars;
      console.log(mars);
      });
    } 
    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }


  addcamion(){
    

    this.newcamion.marque = this.marques.find(mar => mar.idmar == this.newIdmar)!;
    this.camionService.ajoutercamion(this.newcamion).subscribe(cam => {
console.log(cam); 

this.camionService
.uploadImageFS(this.uploadedImage,
this.uploadedImage.name,cam.idcamion!)
.subscribe((response: any) => {}
);
this.router.navigate(['camions']);
});
}

 
}
