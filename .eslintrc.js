module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],
    rules: {
        'linebreak-style': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-underscore-dangle': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ]
            }
        }
    }
};