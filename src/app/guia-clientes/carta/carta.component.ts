import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-clientes-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.scss'
})
export class CartaComponent {
  public video: string = `${environment.carpetaVideos}/store-carta.mp4`;
  public urlWebDemo: string = `${environment.urlWebDemo}`; 
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.titleService.setTitle(`Elaboración del pedido online del cliente con las sugerencias de la carta`);

    this.metaTagService.updateTag({
      name: 'description', content: `Los clientes de tu restaurante online podran \
eleborar su pedido rápidamente empleando los filtros que le ayudarán en la selección de sugerencias, \
agruparemos los productos o sugerencias de la carta con la finalidad de que el \
De esta forma el usuario confecciona su pedido online rápidamente.`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  
  }
}
