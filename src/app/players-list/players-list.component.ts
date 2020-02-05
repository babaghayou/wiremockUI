import { Component } from '@angular/core';
import {players} from "../players";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {

  players = players;

  share() {
    window.alert('The teams has been shared!');
  }

}
