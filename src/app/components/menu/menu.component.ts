import { Component, OnInit, } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  constructor(@Inject(DOCUMENT) document) {
    // let menu = <HTMLAnchorElement>document.getElementById('menu');
    // let login = <HTMLAnchorElement>document.getElementById('login');
        
    
    // logout.onclick = function(){
    //   login.classList.remove("d-none");
    //   menu.classList.add("d-none");
    //   //TODO: añadir lógica de logout
    // };    
  }

  logout () {    
    let menu = <HTMLAnchorElement>document.getElementById('menu');
    let login = <HTMLAnchorElement>document.getElementById('login');
    
    login.classList.remove("d-none");
    menu.classList.add("d-none");
    //TODO: añadir lógica de logout
  }

  ngOnInit() {
  }

}
