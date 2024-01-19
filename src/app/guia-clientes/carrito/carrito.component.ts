import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-clientes-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  public video: string = `${environment.carpetaVideos}/store-carrito.mp4`;
  public urlWebDemo: string = `${environment.urlWebDemo}`; 
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.titleService.setTitle(`Tramitacion del pedido online para su entrega a domicilio o recogida en restaurante`);

    this.metaTagService.updateTag({
      name: 'description', content: `Getión del carrito por parte del cliente. Los clientes de \
nuestro restaurante podrán tramitar el pedido para recoger en el restaurante o para su entrega en \
domicilio. Podrán seleccionar el día de entrega del pedido y la hora.`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  
  }
}
