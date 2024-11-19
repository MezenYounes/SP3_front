import { Injectable } from '@angular/core';
import { camion } from '../model/camion.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Image } from "../model/Image.model";
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
  providedIn: 'root'
})

export class CamionService {
  apiURL: string = 'http://localhost:8080/camions/api';
  apiURLMar: string = 'http://localhost:8080/camions/api/mar';
  camions! : camion[];
  camion! : camion;
  marques!: Marque[];
  
  camionRecherche?: camion[];

  constructor(private http : HttpClient,
    private authService: AuthService
  ) {
    this.marques = [ {idmar : 1, nommar : "TOYOTA"},
    {idmar : 2, nommar : "RENAULT"},
    {idmar : 3, nommar : "chevrolet"},
    {idmar : 4, nommar : "FORD"}];
   
    }
   listecamion(): Observable<camion[]>{
    
    return this.http.get<camion[]>(this.apiURL+"/all");
    }

ajoutercamion( cam: camion):Observable<camion>{
  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
  return this.http.post<camion>(this.apiURL+"/addcam", cam, {headers:httpHeaders});
  }
supprimercamion( id: number){
 
  const url = `${this.apiURL}/delcam/${id}`;

  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
}

  consultercamion(id:number): Observable<camion> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<camion>(url,{headers:httpHeaders});
}

    
    triercamion(){
      this.camions = this.camions.sort((n1,n2) => {
      if (n1.idcamion! > n2.idcamion!) {
      return 1;
      }
      if (n1.idcamion! < n2.idcamion!) {
      return -1;
      }
      return 0;
      });
      }
      
    updatecamion(c:camion) : Observable<camion>
    {
      let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<camion>(this.apiURL+"/updatecam",c, {headers:httpHeaders});
    }
listemarques():Observable<Marque[]>{
  return this.http.get<Marque[]>(this.apiURL+"/mar");
  }
  consultermarques(id:number): Marque{
    return this.marques.find(mar => mar.idmar == id)!;
    }
   /*  rechercheparmarque(idmarq: number): camion[] {
      const filtredcamion=this.camions.filter((camion) => camion.marque?.idmar == idmarq);
      return filtredcamion;
    } */
    rechercherparmarque(idmar: number):Observable< camion[]> {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      const url = `${this.apiURL}/CamionMarq/${idmar}`;
      return this.http.get<camion[]>(url, {headers:httpHeaders});
      
        }
      ajoutermarrque( mar: Marque):Observable<Marque>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.post<Marque>(this.apiURLMar+"/addmarque", mar, {headers:httpHeaders});
          }
          uploadImage(file: File, filename: string): Observable<Image>{
            const imageFormData = new FormData();
            imageFormData.append('image', file, filename);
            const url = `${this.apiURL + '/image/upload'}`;
            return this.http.post<Image>(url, imageFormData);
            }
            loadImage(id: number): Observable<Image> {
            const url = `${this.apiURL + '/image/get/info'}/${id}`;
            return this.http.get<Image>(url);
            }
          
            uploadImageCam(file: File, filename: string, idCam:number): Observable<any>{
              const imageFormData = new FormData();
              imageFormData.append('image', file, filename);
              const url = `${this.apiURL + '/image/uplaodImageCam'}/${idCam}`;
              return this.http.post(url, imageFormData);
              }
              supprimerImage(id : number) {
                const url = `${this.apiURL}/image/delete/${id}`;
                return this.http.delete(url, httpOptions);
                }
                uploadImageFS(file: File, filename: string, idProd : number): Observable<any>{
                  const imageFormData = new FormData();
                  imageFormData.append('image', file, filename);
                  const url = `${this.apiURL + '/image/uploadFS'}/${idProd}`;
                  return this.http.post(url, imageFormData);
                  }
                  
              
            
        }
        
      
      

