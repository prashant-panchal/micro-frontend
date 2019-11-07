import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AngularApp from "./index.component.ts";
import { enableProdMode } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";

enableProdMode();

@NgModule({
  declarations: [AngularApp],
  imports: [BrowserModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/angular/" }],
  bootstrap: [AngularApp],
})
export default class MainModule {}
