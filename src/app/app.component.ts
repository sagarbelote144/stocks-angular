
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';
import { IgxGridComponent } from 'igniteui-angular';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'stcoks-clear-market';
// }

@ViewChild('myGrid', { read: IgxGridComponent })
public grid: IgxGridComponent

export class AppComponent implements OnInit, OnDestroy {
  stockQuote: number;
  sub: Subscription;
  columns: number;
  rows: number;
  selectedTicker: string;
  constructor(private dataService: AppService) { }
  ngOnInit() {
      this.sub = this.dataService.getQuotes()
          .subscribe(quote => {
              this.stockQuote = quote;
              console.log(this.stockQuote);
          });
  }
  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}

