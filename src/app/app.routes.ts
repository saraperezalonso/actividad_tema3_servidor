import {Routes} from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';

export const routes =   [   {path: 'catalogo', component: CatalogoComponent},
                            {path: 'contacto', component: ContactoComponent},
                            {path: 'servicios', component: ServiciosComponent},
                            {path: 'sobrenosotros', component: SobrenosotrosComponent}
                    
                        ]

