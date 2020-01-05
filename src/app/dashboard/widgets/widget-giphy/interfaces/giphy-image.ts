/* Interface pour stocker les informations provenant de l'API Giphy
  Il existe d'autres informations (cf. https://developers.giphy.com/docs/api/schema#image-object)
  On utilise seulement celles ci-dessous
 */

export interface GiphyImage {
  url: string;
  width: number;
  height: number;
}
