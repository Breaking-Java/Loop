import { Component, OnInit } from '@angular/core';
import  {Item} from '../../interfaces/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  stars: Array<number>;

  constructor() { }

  ngOnInit() {
    this.item = {
      id: 1,
      name: 'Batman - The Dark Knight',
      overview: 'The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second part of Nolan\'s The Dark Knight Trilogy and a sequel to 2005\'s Batman Begins, starring an ensemble cast including Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchist mastermind known as the Joker (Ledger), who seeks to undermine Batman\'s influence and turn the city to chaos. ',
      poster: 'asdad',
      year: '2008',
      rating: '4',
      path: 'string'
    };
    this.stars = new Array();
    let j = Number(this.item.rating);
    for (let i = 0; i < j; i++) {
        this.stars.push(1);
    }
  }

}
