import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoinGeckoService } from '../coin-gecko.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coinsResponse: any = [];
  coinControl = new FormControl('');
  filteredOptions?: Observable<any>;

  constructor(private coinGecko: CoinGeckoService, private router: Router) { }

  ngOnInit(): void {
    this.coinGecko.getTop100Coins().subscribe(data => {
      this.coinsResponse = data;
    })

    this.filteredOptions = this.coinControl.valueChanges.pipe(
      startWith(''), map(value => this._filter(value || '')),
    );
  }

  searchCoin(): void {
    if (this.coinControl.value) {
      this.router.navigateByUrl(`/details/${this.coinControl.value}`);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.coinsResponse.filter((coin: any) => coin.id.toLowerCase().includes(filterValue));
  }

}
