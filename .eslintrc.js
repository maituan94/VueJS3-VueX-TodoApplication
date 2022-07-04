module.exports = {
    rules: {
        "vue/multi-word-component-names": 0,
        'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
    },
    parserOptions: {
        "sourceType": "module",
        "ecmaVersion": 2020
    },
    extends: ["plugin:vue/base"]
}
