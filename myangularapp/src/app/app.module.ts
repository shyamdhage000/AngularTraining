import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcmpComponent } from './firstcmp/firstcmp.component';
import { SecondcmpComponent } from './secondcmp/secondcmp.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { PipecmpComponent } from './pipecmp/pipecmp.component';
import { CustomepipePipe } from './customepipe.pipe';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { EmplistComponent } from './emplist/emplist.component';
//import { EmphttpcmpComponent } from './emphttpcmp/emphttpcmp.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoutingcmpComponent } from './routingcmp/routingcmp.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
//import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FirstcmpComponent,
    SecondcmpComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    LoginformComponent,
    DirectiveComponent,
    CustomdirectiveDirective,
    PipecmpComponent,
    CustomepipePipe,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    EmplistComponent,
    //EmphttpcmpComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    RoutingcmpComponent,
    TemplateformComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    //RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

