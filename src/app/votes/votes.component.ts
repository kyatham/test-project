/*
  This component is used to implement the voting feature.
  It lets the user both upvote/downvote as needed which would be refelcted in the UI through change in color
   for the icons as well as updating the respective counts.
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.less']
})
export class VotesComponent implements OnInit {

  constructor() { }

  @Input() votedItem;

  votedType = 'none';

  ngOnInit() {
  }

  toggle(type) {
    if (this.votedType === type) {
      this.votedType = 'none';
      this.votedItem[type]--;
    } else {
      if (!this.votedItem[type]) {
        this.votedItem[type] = 1; // Initializing with 1 if the upvotes/downvotes property  does not exist
      } else {
        this.votedItem[type]++;
      }
      if (this.votedType !== 'none') {
        const otherType = type === 'upvotes' ? 'downvotes' : 'upvotes';
        this.votedItem[otherType]--;
      }
      this.votedType = type;
    }
  }

}
