import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-update-camion',
  templateUrl: './update-camion.component.html',
  styleUrls: ['./update-camion.component.css']
})
export class UpdateCamionComponent implements OnInit {
 
  currentcamion = new camion();
  marques! : Marque[];
updatedmarId? : number;
marque! : Marque;
myImage! : string;
uploadedImage!: File;
isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private camionService: CamionService) { }
      ngOnInit() {
        this.camionService.listemarques().
subscribe(mars => {this.marques = mars;
console.log(mars);
});

        this.camionService.consultercamion(this.activatedRoute.snapshot.params['id']).
 subscribe( cam =>{ this.currentcamion = cam;
  this.updatedmarId = this.currentcamion.marque!.idmar;
 /*  this.camionService
.loadImage(this.currentcamion.image.idImage)
.subscribe((img: Image) => {
this.myImage = 'data:' + img.type + ';base64,' + img.image; */
// }); 

} ) ;

        }
        onImageUpload(event: any) {
          if(event.target.files && event.target.files.length) {
          this.uploadedImage = event.target.files[0];
          this.isImageUpdated =true;
          const reader = new FileReader();
          reader.readAsDataURL(this.uploadedImage);
          reader.onload = () => { this.myImage = reader.result as string; };
          }
          }
          
        updatecamion()
        { //console.log(this.currentcamion);
          this.currentcamion.marque= this.marques.find(mar => mar.idmar == this.updatedmarId)!;
         

          this.camionService.updatecamion(this.currentcamion).subscribe((c) => {
            this.router.navigate(['camions']); });
          
        }
       
        
        onAddImageCamion() {
          this.camionService
          .uploadImageCam(this.uploadedImage,
          this.uploadedImage.name,this.currentcamion.idcamion!)
          .subscribe( (img : Image) => {
          this.currentcamion.images.push(img);
          });
          }
          supprimerImage(img: Image){
            let conf = confirm("Etes-vous sûr ?");
            if (conf)
            this.camionService.supprimerImage(img.idImage).subscribe(() => {
            //supprimer image du tableau currentProduit.images
            const index = this.currentcamion.images.indexOf(img, 0);
            if (index > -1) {
            this.currentcamion.images.splice(index, 1);
            }
            });
            }
          
        }
        





