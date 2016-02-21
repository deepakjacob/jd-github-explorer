import {Component, Input} from 'angular2/core';
import {Item} from '../../model/repo';

@Component({
  selector: 'card',
   styles: [require('./card.scss')],
  template: require('./card.html'),
  providers: [],
  directives: [],
  pipes: []
})
export class Card {

    @Input()
    item: Item;  

}
