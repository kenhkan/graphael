var loadPublic, root;

root = {
  raphael: Raphael,
  graphael: Raphael.g,
  dotchart: Raphael.fn.dotchart,
  barchart: Raphael.fn.barchart,
  linechart: Raphael.fn.linechart,
  piechart: Raphael.fn.piechart
}

loadPublic = function(object) {
  var key;
  for(key in root) {
    if({}.hasOwnProperty.call(root, key)) {
      object = root[key];
    }
  }
};

if (_.isObject(typeof module !== "undefined" && module !== null ? module.exports : void 0)) {
  module.exports = root;
} else if (_.isObject(window)) {
  loadPublic(window);
} else {
  loadPublic(this);
}
