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

import * as Blockly from "blockly"; // Includes Blockly core, Blockly built-in blocks, the JavaScript generator and the English lang files.
import { BlocklyXmlService } from "src/app/_services/blocklyXml.service";

@Component({
  selector: "app-blockly",
  templateUrl: "./blockly.component.html",
  styleUrls: ["./blockly.component.css"],
  providers: [BlocklyXmlService]
})
export class BlocklyComponent implements OnInit {
  public blocklyXml = "Nothing here...";

  constructor(private blocklyXmlService: BlocklyXmlService) {}

  ngOnInit() {
    const xmlPromise = new Promise((resolve, reject) => {
      resolve(
        this.blocklyXmlService
          .getBlocklyXml()
          .subscribe(xmlObject => (this.blocklyXml = xmlObject))
      );
      reject("Something went wrong");
    }).then(() => {
      console.log("This is the Blockly XML content ==> ", this.blocklyXml);
    });

    const blocklyDiv = document.getElementById("blocklyDiv");

    // console.log("Method executed");

    Blockly.inject(blocklyDiv, {
      readOnly: false,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
      toolbox: this.blocklyXml
    } as Blockly.BlocklyOptions);
  }
}
