import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';

var SampleComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(SampleComponent, _React$PureComponent);

  function SampleComponent() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = SampleComponent.prototype;

  _proto.render = function render() {
    return React.createElement("h3", null, "This is a sample component");
  };

  return SampleComponent;
}(React.PureComponent);

export { SampleComponent as default };