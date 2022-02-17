import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pair} from "../../../../shared/models/Pair";
import {map, Observable} from "rxjs";
import {PairsService} from "../../../../core/services/pairs.service";
import {WebSocketsService} from "../../../../core/services/web-sockets.service";

@Component({
  selector: 'app-pairs-details',
  templateUrl: './pairs-details.component.html',
  styleUrls: ['./pairs-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PairsDetailsComponent implements OnInit {
  pairSymbol: string = ''
  pairDetails$?: Observable<Pair>;

  constructor(public route: ActivatedRoute,
              private readonly pairsService: PairsService,
              private readonly webSockets: WebSocketsService) {
  }

  ngOnInit(): void {
    this.pairSymbol = this.route.snapshot.params["symbol"] as string;
    this.getPairDetails();
    this.getPairTickerBySymbolRT();
  }

  getPairDetails() {
    return this.pairDetails$ = this.pairsService.getBySymbol(this.pairSymbol).pipe(
      map(pair => ({
        symbol: pair[0],
        last_price: pair[6],
        daily_change: pair[5]
      }))
    );
  }

  // READ FROM SOCKET BY SYMBOL
  getPairTickerBySymbolRT(): void {
    const result = this.webSockets.getPairTickerBySymbol('subscribe', 'ticker', 'tBTCUSD')
    console.log('poruke:', result)
  }
}
