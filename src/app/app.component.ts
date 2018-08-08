import { Component, OnInit } from '@angular/core';
import { from, pipe, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    const nums = from([1, 2, 3, 4]);
    const customObservable = new Observable((observer) => {
      observer.next('hello');
      setInterval(() => observer.next('hello again'), 1000);
    });

    const square = map<number, number>((num) => num * num );
    const pairs = filter<number>((num) => num % 2 === 0 );
    const pairAndSquare = pipe(
      pairs,
      square
    );

    const squareNums = square(nums);
    const pairNums = pairs(nums);
    const squarePairs = pairAndSquare(nums);

    squarePairs.subscribe(console.log);
    pairNums.subscribe(console.log);
    squareNums.subscribe(console.log);

  }
}
