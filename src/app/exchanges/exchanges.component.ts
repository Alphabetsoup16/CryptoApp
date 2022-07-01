import { Component, OnInit } from '@angular/core';
import { CoinGeckoService } from '../coin-gecko.service';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {

  coinGeckoResponse: any = [];
  constructor(private coinGecko: CoinGeckoService) { }

  ngOnInit(): void {
    this.coinGecko.getAllExchanges().subscribe((data) => {
      this.coinGeckoResponse = data;
    })
  }

}
