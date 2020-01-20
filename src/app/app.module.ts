import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BlocklyComponent } from "./components/blockly/blockly.component";
import { BlocklyXmlService } from "./_services/blocklyXml.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, BlocklyComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [BlocklyXmlService],
  bootstrap: [AppComponent],
  exports: [BlocklyComponent]
})
export class AppModule {}
