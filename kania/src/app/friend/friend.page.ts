import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.page.html',
  styleUrls: ['./friend.page.scss'],
})
export class FriendPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friendList = [
    { nama: 'Kania', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Azzahra', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Aisyah', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Ainun', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Yuli', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Salsabila', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Sela', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Eka', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Riska', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Eni', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Eva', status: 'ADD', img: "assets/img/kania.jpeg"},
    { nama: 'Faiza', status: 'ADD', img: "assets/img/kania.jpeg"},
  ];
}