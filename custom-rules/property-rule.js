var stylelint = require("stylelint");

var ruleName = "plugin/avoid-cursor-property";
var messages = stylelint.utils.ruleMessages(ruleName, {
    expected: "Please avoid cursor property"
});

module.exports = stylelint.createPlugin(ruleName, function(enabled) {
    if (!enabled) {
        return;
    }
    return function(root, result) {
        root.walkDecls(function(decl) {
            if (decl.prop === "cursor") {
                stylelint.utils.report({
                    result,
                    ruleName,
                    message: messages.expected,
                    node: decl,
                });
            }
        });
    };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;