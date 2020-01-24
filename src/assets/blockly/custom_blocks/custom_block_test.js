// Custom block(s) definition

Blockly.Blocks["block_test"] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("Test Select")
      .appendField(
        new Blockly.FieldDropdown([
          ["One", "OPTIONONE"],
          ["Two", "OPTIONTWO"],
          ["Three", "OPTIONTHREE"]
        ]),
        "TESTOPTIONS"
      );
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generator stub
Blockly.JavaScript["block_test"] = function(block) {
  var dropdown_testoptions = block.getFieldValue("TESTOPTIONS");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "...;\n";
  return code;
};
