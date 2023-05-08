module.exports = {
  extends: '@antfu',
  rules: {
    // Require semi-colons at the end of each line inside a typescript declaration
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'semi' } },
    ],

    // Require semi-colons at the end of each line
    '@typescript-eslint/semi': ['error', 'always'],

    // Always require curly braces
    'curly': 'off',

    // Set vue component tags order
    'vue/component-tags-order': [
      'error',
      {
        order: [['template', 'script'], 'style'],
      },
    ],

    // Allow any casing for custom event names
    'vue/custom-event-name-casing': 'off',
  },
};
