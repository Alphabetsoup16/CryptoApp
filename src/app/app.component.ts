import { Component, OnInit } from '@angular/core';
import { CoinGeckoService } from './coin-gecko.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  coinGeckoResponse: any = [];
  constructor(private coinGecko: CoinGeckoService) { }

  ngOnInit(): void {
    this.coinGecko.getAllExchanges().subscribe((data) => {
      this.coinGeckoResponse = data;
    })
  }

  title = 'my-stock-app';
}
