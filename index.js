module.exports = function() {
    return {
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-classes',
            ['@babel/plugin-transform-regenerator', { asyncGenerators: false }],
        ],
    };
};
