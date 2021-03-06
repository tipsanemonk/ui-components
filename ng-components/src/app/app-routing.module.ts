import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCardComponent } from './demo/demo-card-demo/demo-card.component';
import { DropdownDemoComponent } from './demo/dropdown-demo/dropdown-demo.component';
import { TreeDemoComponent } from './demo/tree-demo/tree-demo.component';
import { TabsDemoComponent } from './demo/tabs-demo/tabs-demo.component';
import { DemoTableComponent } from './demo/demo-table/demo-table.component';
import { DemoHeaderComponent } from './demo/demo-header/demo-header.component';
import { DemoModalComponent } from './demo/demo-modal/demo-modal.component';
import { ListgroupDemoComponent } from './demo/listgroup-demo/listgroup-demo.component';
import { DemoIconComponent } from './demo/demo-icon/demo-icon.component';
import { DemoBadgeComponent } from './demo/demo-badge/demo-badge.component';
import { DemoHomeComponent } from './demo/demo-home/demo-home.component';
import { DemoButtonComponent } from './demo/demo-button/demo-button.component';
import { DemoInputComponent } from './demo-input/demo-input.component';
import { DemoNotificationComponent } from './demo/demo-notification/demo-notification.component';
import { DemoCheckboxComponent } from './demo/demo-checkbox/demo-checkbox.component';


const routes: Routes = [
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'tree', component: TreeDemoComponent },
  { path: 'card', component: DemoCardComponent },
  { path: 'tab', component: TabsDemoComponent },
  { path: 'table', component: DemoTableComponent },
  { path: 'header', component: DemoHeaderComponent },
  { path: 'modal', component: DemoModalComponent },
  { path: 'listgroup', component: ListgroupDemoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'icon', component: DemoIconComponent },
  { path: 'badge', component: DemoBadgeComponent },
  { path: 'home', component: DemoHomeComponent },
  { path: 'button', component: DemoButtonComponent },
  { path: 'input', component: DemoInputComponent },
  { path: 'notification', component: DemoNotificationComponent},
  { path: 'checkbox', component: DemoCheckboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
