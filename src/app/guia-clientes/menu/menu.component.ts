import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-clientes-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public video: string = `${environment.carpetaVideos}/store-menu.mp4`;
  public urlWebDemo: string = `${environment.urlWebDemo}`; 
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.titleService.setTitle(`Elaboración del pedido online del cliente con los menús que tenemos preparados`);

    this.metaTagService.updateTag({
      name: 'description', content: `Los clientes del restaurante online podran \
eleborar su pedido online con nuestros menús rápidamente gracias a una interfaz muy clara `}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  
  }
}
