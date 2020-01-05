import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import { GiphyImage } from './interfaces/giphy-image';
import { map, startWith, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyDataService {
  // Initialisation du service HttpClient pour pouvoir exécuter des requêtes HTTP
  constructor(private http: HttpClient) {}
  private GIPHY_API = 'z9RobOxBJ79WWsnW6DsmMsPVo7TZhL4G';

  // Définition d'un obervable Interval pour rafraîchir la liste des images du dashboard toutes les 10 minutes
  private timer = interval(600000).pipe(startWith(0));

  /* Définition d'un offset pour ne pas que Giphy renvoie toujours la même liste
  On demande à Giphy de renvoyer les nièmes images à partir de l'offset passé en paramètre
  Il faut faire attention que cet offset ne soit pas > au nombre d'images renvoyées sinon Giphy ne renvoie rien
  */
  private offsetMax = 100;
  private q: string;

  /* Création d'une fonction pour requêter l'api de giphy, via le service HttpClient
   (penser à importer le httpClientModule dans le array Imports du module dashboard
   q représentera la requête utilisée et permettra de filtrer les gifs par mot-clé: on veut des images de chats, etc...
  La valeur de retour est un observable qui est un tableau d'image Giphy
  */

  // Définition d'une nouvelle interface pour GiphyImage
  private getGiphyImages(q: string): Observable<GiphyImage[]> {
    const params = new HttpParams()
      .set('q', q)
      .set('api_key', this.GIPHY_API)
      .set('rating', 'g') // paramètre pour ne pas heurter la sensibilité des plus jeunes
      .set('limit', '100') // pas plus de 100 images
      .set('offset', (Math.floor(Math.random() * this.offsetMax) + 1).toString());

    return this.http
      .get('//api.giphy.com/v1/gifs/search', { params })
      .pipe(map(response => this.mapDataFromApi(response)));
  }

  private mapDataFromApi(response: any | undefined): GiphyImage[] {
    this.offsetMax = response.pagination.total_count - 100;

    // Si l'API ne renvoie aucune image (rare mais il faut traiter le cas)
    if (0 === response.data.length) {
      this.getImages(this.q);
    }

    const images = [];

    /*    for (let i = 0; i < response.data.length; i++) {
      const image: GiphyImage = response.data[i].images.fixed_height;
*/
    for (const uneData of response.data) {
      const image: GiphyImage = uneData.images.fixed_height;

      // On applique simplement un filtre pour ne récupèrer que les images en landscape (sinon pas joli)
      if (image.width > image.height) {
        images.push(image);
      }
    }
    return images;
  }

  // Définition d'une fonction publique pour pouvoir appeler le service depuis le component
  public getImages(q: string): Observable<GiphyImage[]> {
    this.q = q;
    return this.timer.pipe(switchMap(() => this.getGiphyImages(q)));
  }
}
