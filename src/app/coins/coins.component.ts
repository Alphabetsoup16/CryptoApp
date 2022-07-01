import { Component, OnInit } from '@angular/core';
import { CoinGeckoService } from '../coin-gecko.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coinsResponse: any = [];
  constructor(private coinGecko: CoinGeckoService) { }

  ngOnInit(): void {
    this.coinGecko.getTop100Coins().subscribe((data) => {
      this.coinsResponse = data;
      console.log(data)
    })
  }

}
