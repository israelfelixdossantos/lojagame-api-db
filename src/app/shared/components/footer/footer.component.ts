import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  topo() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

}
