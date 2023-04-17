import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";
import { BaseListComponent } from "@vendure/admin-ui/core";

import { GetIngredientList } from "../../ingredient.types";
import { IngredientDataService } from "../../data/providers/ingredient-data.service";

interface IngredientFilterConfig {
  active?: boolean;
  states?: string[];
}

interface FilterPreset {
  name: string;
  label: string;
  config: IngredientFilterConfig;
}

@Component({
  selector: "vdr-ingredient-list",
  templateUrl: "./ingredient-list.component.html",
  styleUrls: ["./ingredient-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientListComponent
  extends BaseListComponent<
    GetIngredientList.Query,
    GetIngredientList.Items,
    GetIngredientList.Variables
  >
  implements OnInit
{
  constructor(
    private dataService: IngredientDataService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(router, route);
    super.setQueryFn(
      // tslint:disable-next-line:no-shadowed-variable
      (take, skip) =>
        this.dataService
          .getIngredients({ take, skip })
          .refetchOnChannelChange(),
      (data) => data.ingredients
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
