import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";
import {
  BaseDetailComponent,
  DataService,
  NotificationService,
  ServerConfigService,
} from "@vendure/admin-ui/core";
import { DEFAULT_CHANNEL_CODE } from "@vendure/common/lib/shared-constants";
import { Permission } from "@vendure/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, mergeMap, take } from "rxjs/operators";

import { IngredientDataService } from "../../data/providers/ingredient-data.service";
import { GetIngredientQuery } from "../../ingredient.types";

export interface PaginationConfig {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
}

@Component({
  selector: "vdr-ingredient-detail",
  templateUrl: "./ingredient-detail.component.html",
  styleUrls: ["./ingredient-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// extends BaseDetailComponent<GetIngredient.Ingredient>
export class IngredientDetailComponent implements OnInit, OnDestroy {
  ingredient$: Observable<GetIngredientQuery["ingredient"]>;
  detailForm: FormGroup;
  filterInput = new FormControl("");
  totalItems$: Observable<number>;
  currentPage$ = new BehaviorSubject(1);
  itemsPerPage$ = new BehaviorSubject(10);
  paginationConfig$: Observable<PaginationConfig>;

  public readonly updatePermissions = [Permission.UpdateCatalog];

  constructor(
    route: ActivatedRoute,
    router: Router,
    serverConfigService: ServerConfigService,
    private ingredientService: IngredientDataService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    protected dataService: DataService
  ) {
    // super(route, router, serverConfigService, dataService);
    this.detailForm = this.formBuilder.group({
      ingredient: this.formBuilder.group({
        enabled: true,
        name: ["", Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    //
  }

  ngOnDestroy(): void {
    //
  }
}
