'use strict';

var React = require('react');
var styled = require('styled-components');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const StyledButton$2 = styled.button `
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    font-weight: 700;
    font-weight: bold;
    border-radius: 3px;
    display: inline-block;
    padding: ${props => props.size === "small" ? "7px 25px 8px" : (props.size === "medium" ? "9px 30px 11px" : "14px 30px 16px")};
    color: ${props => props.default ? "#1b116e" : props.disabled ? "#585858" : "#ffffff"};
    background-color: ${props => props.backgroundColor};
    opacity: ${props => props.disabled ? 0.5 : 1};
    &:hover {
      background-color: ${props => props.default ? "#55bd90" : props.disabled ? "" : "#6bedb5"};
    }
    &:active {
        border: solid 2px #1b116e;
        padding: ${props => props.size === "small" ? "5px 23px 6px" : (props.size === "medium" ? "7px 28px 9px" : "12px 28px 14px")};
    }
`;
const Button = (_a) => {
    var { size, disabled, text, onClick } = _a, props = __rest(_a, ["size", "disabled", "text", "onClick"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledButton$2, Object.assign({ type: "button", onClick: onClick, disabled: disabled, size: size }, props), text)));
};

const StyledInput = styled.input `
    height: 40px;
    width: 300px;
    cursor: ${props => props.disabled === true ? "not-allowed" : "text"};
    border-radius: 3px;
    border: solid 2px ${props => props.borderColor};
    background-color: ${props => props.disabled ? "#e4e3ea" : "#fff"};
    &:focus{
      border: solid 2px #1b116e;
    }
`;
const StyledMessage$2 = styled.div `
  font-size: 14px;
  padding-top: 4px;
`;
const StyledText = styled.p `
  opacity: ${props => props.disabled ? 0.5 : 1};
  margin: 0px;
  cursor: ${props => props.disabled === true ? "not-allowed" : "text"};
  color: ${props => props.disabled ? "#e4e3ea" : (props.error ? "#a9150b" : "#080808")};
`;
const Text = (_a) => {
    var { disabled, message, error, success, onChange, placeholder } = _a, props = __rest(_a, ["disabled", "message", "error", "success", "onChange", "placeholder"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledText, { disabled: disabled, error: error }),
        React.createElement(StyledInput, Object.assign({ type: "text", onChange: onChange, disabled: disabled, error: error, success: success, placeholder: placeholder }, props)),
        React.createElement(StyledMessage$2, null,
            React.createElement(StyledText, Object.assign({}, props, { error: error }), message))));
};

const StyledTable = styled.table `
  caption-side: top;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border: none;
  color: ${props => props.disabled ? '#515050' : '#000'};
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: top;
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: ${props => props.oddRowBackground};
    }
    :nth-of-type(even) {
      background-color: ${props => props.evenRowBackground};
    }
    :hover {
      background-color: ${props => props.disabled ? '' : '#a3ff94'};
    }
  }
  thead > tr {
    background-color: ${props => props.headerBackground};
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }

  tfoot tr {
    :nth-of-type(odd) {
      background-color: ${props => props.footerBackground};
    }
    :nth-of-type(even) {
      background-color: ${props => props.footerBackground};
    }
  }
`;
const Table = (_a) => {
    var { disabled, caption, heading1, heading2, heading3, row1cell1, row1cell2, row1cell3, row2cell1, row2cell2, row2cell3, row3cell1, row3cell2, row3cell3, footer1, footer2, footer3 } = _a, props = __rest(_a, ["disabled", "caption", "heading1", "heading2", "heading3", "row1cell1", "row1cell2", "row1cell3", "row2cell1", "row2cell2", "row2cell3", "row3cell1", "row3cell2", "row3cell3", "footer1", "footer2", "footer3"]);
    return (React.createElement(StyledTable, Object.assign({ disabled: disabled }, props),
        React.createElement("caption", null, caption),
        React.createElement("thead", null,
            React.createElement("tr", Object.assign({}, props),
                React.createElement("th", null, heading1),
                React.createElement("th", null, heading2),
                React.createElement("th", null, heading3))),
        React.createElement("tbody", null,
            React.createElement("tr", Object.assign({}, props),
                React.createElement("td", null, row1cell1),
                React.createElement("td", null, row1cell2),
                React.createElement("td", null, row1cell3)),
            React.createElement("tr", Object.assign({}, props),
                React.createElement("td", null, row2cell1),
                React.createElement("td", null, row2cell2),
                React.createElement("td", null, row2cell3)),
            React.createElement("tr", Object.assign({}, props),
                React.createElement("td", null, row3cell1),
                React.createElement("td", null, row3cell2),
                React.createElement("td", null, row3cell3))),
        React.createElement("tfoot", null,
            React.createElement("tr", Object.assign({}, props),
                React.createElement("th", null, footer1),
                React.createElement("th", null, footer2),
                React.createElement("th", null, footer3)))));
};

const StyledWrapper = styled.div `
  opacity: ${props => props.disabled ? 0.5 : 1};
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;
const StyledItem = styled.div `
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;
const StyledRadioButtonLabel = styled.label `
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
const StyledRadioButton = styled.input `
  opacity: 0;
  z-index: 1;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover ~ ${StyledRadioButtonLabel} {
    background: ${props => props.disabled ? '' : '#b4fa6d'};
    &::after {
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${StyledItem} {
    border: 2px solid yellowgreen;
  }
  &:checked + ${StyledRadioButtonLabel} {
    background: ${props => props.clickedColor};
    border: 1px solid yellowgreen;
    &::after {
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;
const RadioButton = (_a) => {
    var { radioButtonLabel, disabled } = _a, props = __rest(_a, ["radioButtonLabel", "disabled"]);
    return (React.createElement(StyledWrapper, null,
        React.createElement(StyledItem, null,
            React.createElement(StyledRadioButton, Object.assign({}, props, { type: "radio", name: "radio", value: radioButtonLabel, disabled: disabled })),
            React.createElement(StyledRadioButtonLabel, null),
            React.createElement("div", null, radioButtonLabel))));
};

const StyledLabel = styled.label `
  font-size: 14px;
  color: ${props => props.fontColor};
  padding-bottom: 6px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;
const Label = (_a) => {
    var { disabled, label } = _a, props = __rest(_a, ["disabled", "label"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledLabel, Object.assign({}, props, { disabled: disabled }), label)));
};

const img$1 = require('./../../assets/images/img.png');
const StyledImage = styled.img `
  height: 20%;
  width: 25%;
  border-radius: 30px;
  filter: ${props => props.disabled ? 'grayscale(95%)' : ''};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;
const Image = (_a) => {
    var { disabled, alt } = _a; __rest(_a, ["disabled", "alt"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledImage, { disabled: disabled, src: img$1, alt: alt })));
};

const img = require('./../../assets/images/hero_img.png');
const StyledButton$1 = styled.button `
  border: 0;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  line-height: 1;
  font-size: 15px;
  display: flex;
  margin: auto;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  padding: 7px 25px 8px;
  color: #ffffff;
  background-color: ${props => props.buttonBackground};
  opacity: 1;
  &:hover {
    background-color: ${props => props.disabled ? '#639392' : '#fdebbc'};
    color: ${props => props.disabled ? '#ffffff' : '#585858'};
  }
`;
const StyledDiv = styled.div `
  background-image: url(${img});
  filter: ${props => props.disabled ? 'grayscale(95%)' : ''};
  cursor: ${props => props.disabled ? 'not-allowed' : 'initial'};
  width: 100%;
  height: 30%;
  padding: 15% 0%;
`;
const StyledMessage$1 = styled.label `
  display: flex;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'text'};
  font-size: 40px;
  font-weight: heavy;
  background-color: #c1c5c0;
  padding: 1%;
  margin: 0% auto 5% auto;
  width: fit-content;
  opacity: 0.6;
`;
const HeroImage = (_a) => {
    var { disabled, message, button } = _a, props = __rest(_a, ["disabled", "message", "button"]);
    return (React.createElement(StyledDiv, { disabled: disabled },
        React.createElement(StyledMessage$1, { disabled: disabled }, message),
        React.createElement(StyledButton$1, Object.assign({ disabled: disabled }, props), button)));
};

const StyledDropdown = styled.div `
  width: fit-content;
  height: fit-content;
`;
const StyledButton = styled.button `
display: block;
line-height: 1;
font-size: 15px;
cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
font-weight: 700;
font-weight: bold;
border-radius: 3px;
display: inline-block;
padding: 7px 25px 8px;
color: #fff;
background-color: ${props => props.buttonBackgroundColor};
opacity: ${props => props.disabled ? 0.5 : 1};
&:hover {
  background-color: ${props => props.disabled ? "" : "#9135ff"};
}
&:active {
    border: solid 2px #1b116e;
    padding: 5px 23px 6px;
}
`;
const StyledDropdownMenu = styled.ul `
  background-color: ${props => props.menuBackgroundColor};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;
const StyledDropdownItem = styled.a `
  cursor: pointer;
  background-color: ${props => props.menuBackgroundColor};
  color: #fff;
  padding: 12px 16px;
  display: block;
  text-align: left;
  &:hover {
    color: #000;
  }
`;
const Dropdown = (_a) => {
    var { label, item1, item2, item3, disabled } = _a, props = __rest(_a, ["label", "item1", "item2", "item3", "disabled"]);
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => {
        setVisible((current) => !current);
    };
    return (React.createElement(StyledDropdown, { disabled: disabled },
        React.createElement(StyledButton, Object.assign({ type: "button", onClick: openMenu, disabled: disabled }, props), label),
        visible ? (React.createElement(StyledDropdownMenu, Object.assign({}, props),
            React.createElement(StyledDropdownItem, Object.assign({}, props), item1),
            React.createElement(StyledDropdownItem, Object.assign({}, props), item2),
            React.createElement(StyledDropdownItem, Object.assign({}, props), item3))) : null));
};

const StyledCard = styled.div `
  cursor: ${props => props.disabled ? 'not-allowed' : 'initial'};
  position: relative;
  width: 250px;
  height: 400px;
  font-family: Quicksand, arial, sans-serif;
  background-color: ${props => props.bodyBackgroundColor};
  color: ${props => props.disabled ? '#666666' : '#000'};
  opacity: ${props => props.disabled ? 0.6 : 1};
`;
const StyledHeader = styled.header `
  padding: 20px 0px;
  background-color: ${props => props.headerBackgroundColor};
`;
const StyledHeading = styled.h2 `
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  word-wrap: break-word;
  max-width: 250px;
  padding: 5px;
`;
const StyledCardBody = styled.div `
  padding: 0px 5%;
`;
const StyledMessage = styled.p `
  text-align: center;
  word-wrap: break-word;
  max-width: 250px;
  padding: 5px;
`;
const StyledFooter = styled.div `
  font-size: 20px;
  position: absolute;
  bottom: 0;
`;
const StyledFooting = styled.h2 `
  width: 250px;
  font-size: 15px;
  text-align: center;
  word-wrap: break-word;
`;
const Card = (_a) => {
    var { disabled, headerMessage, mainMessage, footerMessage } = _a, props = __rest(_a, ["disabled", "headerMessage", "mainMessage", "footerMessage"]);
    return (React.createElement(StyledCard, Object.assign({ disabled: disabled }, props),
        React.createElement(StyledHeader, Object.assign({ disabled: disabled }, props),
            React.createElement(StyledHeading, null, headerMessage)),
        React.createElement(StyledCardBody, null,
            React.createElement(StyledMessage, null, mainMessage)),
        React.createElement(StyledFooter, null,
            React.createElement(StyledFooting, null, footerMessage))));
};

exports.Button = Button;
exports.Card = Card;
exports.Dropdown = Dropdown;
exports.HeroImage = HeroImage;
exports.Image = Image;
exports.Label = Label;
exports.RadioButton = RadioButton;
exports.Table = Table;
exports.Text = Text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvbi50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9MYWJlbC9MYWJlbC50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9JbWFnZS9JbWFnZS50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9IZXJvSW1hZ2UvSGVyb0ltYWdlLnRzeCIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLnRzeCIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuIixudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsIkZyYWdtZW50IiwiU3R5bGVkTWVz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
