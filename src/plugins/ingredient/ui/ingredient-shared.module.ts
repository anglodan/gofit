import { NgModule } from '@angular/core';
import { addNavMenuItem, SharedModule } from '@vendure/admin-ui/core';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    addNavMenuItem(
      {
        id: 'ingredients',
        label: 'Ingredients',
        routerLink: ['/extensions/ingredients'],
        // icon: 'star',
      },
      'catalog'
    ),
  ],
})
export class IngredientSharedUiModule {}
