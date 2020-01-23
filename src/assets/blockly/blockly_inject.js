Blockly.inject = function(a, b) {
  Blockly.checkBlockColourConstants();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));

  if (!Blockly.utils.dom.containsNode(document, a)) {
    throw Error("Error: container is not in current document.");
  }

  var c = new Blockly.Options(b || {});

  var d = document.createElement("div");
  d.className = "injectionDiv";
  a.appendChild(d);

  var e = Blockly.createDom_(d, c);
  var f = new Blockly.BlockDragSurfaceSvg(d);
  d = new Blockly.WorkspaceDragSurfaceSvg(d);
  e = Blockly.createMainWorkspace_(e, c, f, d);
  Blockly.user.keyMap.setKeyMap(c.keyMap);
  Blockly.init_(e);
  Blockly.mainWorkspace = e;
  Blockly.svgResize(e);
  return e;
};
