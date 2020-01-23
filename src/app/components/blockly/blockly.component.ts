/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly Angular Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import { Component, OnInit } from "@angular/core";

import { BlocklyXmlService } from "src/app/_services/blocklyXml.service";
import * as Blockly from "blockly"; // Includes Blockly core, Blockly built-in blocks, the JavaScript generator and the English lang files.

@Component({
  selector: "app-blockly",
  templateUrl: "./blockly.component.html",
  styleUrls: ["./blockly.component.css"],
  providers: [BlocklyXmlService]
})
export class BlocklyComponent implements OnInit {
  // public blocklyXml;

  constructor(private blocklyXmlService: BlocklyXmlService) {}

  createBlocklyDiv(xml: string) {
    const blocklyDiv = document.getElementById("blocklyDiv");

    // const parser = new DOMParser();
    // this.blocklyXml = parser.parseFromString(xml, "application/xml");
    // this.blocklyXml = xml;

    // if (xml.length > 0) {
    //   Blockly.inject(blocklyDiv, {
    //     readOnly: false,
    //     move: {
    //       scrollbars: true,
    //       drag: true,
    //       wheel: true
    //     },
    //     toolbox: `${xml}`
    //   } as Blockly.BlocklyOptions);
    // } else {
    //   console.log("XML data is not here yet.");
    // }

    blocklyDiv.innerHTML = xml;
  }

  ngOnInit() {
    this.blocklyXmlService
      .getBlocklyXml()
      .subscribe(xmlString => this.createBlocklyDiv(xmlString));
  }
}
