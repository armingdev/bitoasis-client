import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PairsService} from "../../../../core/services/pairs.service";
import {Pair} from "../../../../shared/models/Pair";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pairs-list',
  templateUrl: './pairs-list.component.html',
  styleUrls: ['./pairs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PairsListComponent implements OnInit {

  pairsList$?: Observable<Pair[]>;

  constructor(private readonly pairsService: PairsService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.getAndMapAPIData()
  }

  getAndMapAPIData() {
    return this.pairsList$ = this.pairsService.getAll().pipe(
      map(pair => pair.map((data): Pair => ({
        symbol: data[0],
        last_price: data[10],
        daily_change: data[6]
      }))));
  }

  isNegative(number: string) {
    return Math.sign(+number);
  }

  pairDetails(pair: Pair): void {
    const url = `pairs/pair/${pair.symbol}`;
    void this.router.navigate([url]);
  }

}
