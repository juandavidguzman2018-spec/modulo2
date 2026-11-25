import { Component } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private readonly router: RouterExtensions) {}

  openCatalog(): void {
    this.router.navigate(['/search']);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
