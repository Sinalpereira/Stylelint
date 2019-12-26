//  "plugin/class-name-no-underscore-allowed":true,

//   "plugins" :[
//       "./custom-rules/class.js"
//     ]

//      message:messages.expected(decl.prop + ", " + decl.value),

"selector-class-pattern": ["^[a-z]+([a-z0-9]?|[a-z0-9\\-]*[a-z0-9])$",

     var stylelint = require("stylelint");
     

var ruleName = "plugin/class-name-no-underscore-allowed";
var messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Please name CSS classes like this: 'my-class-name'"
});

module.exports = stylelint.createPlugin(ruleName, function(enabled) {
  if (!enabled) {
    return;
  }
  return function(root, result) {
    root.walkDecls(function(decl) {
      if (decl.value==="") {
        stylelint.utils.report({
          result,
          ruleName,
          message: messages.expected,
          node: decl,
          word: decl.value
        });
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
