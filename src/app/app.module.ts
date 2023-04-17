import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IfElseConditionComponent } from './if-else-condition/if-else-condition.component';
import { IfElseifElseConditionComponent } from './if-elseif-else-condition/if-elseif-else-condition.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { LoopComponent } from './loop/loop.component';
import { NestedLoopComponent } from './nested-loop/nested-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { FormsCompComponent } from './forms-comp/forms-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IfElseConditionComponent,
    IfElseifElseConditionComponent,
    SwitchCaseComponent,
    LoopComponent,
    NestedLoopComponent,
    StyleBindingComponent,
    HeaderComponent,
    FormsCompComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
