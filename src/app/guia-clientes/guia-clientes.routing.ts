import { Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { MenuComponent } from './menu/menu.component';
import { CarritoComponent } from './carrito/carrito.component';


export const GuiaRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'carta',
				component: CartaComponent
			},
			{
				path: 'menu',
				component: MenuComponent
			},
			{
				path: 'carrito',
				component: CarritoComponent
			},

		]
	}
];
