const cssnanoOptions = {
    preset: ['default', {
        discardComments: false,
    }]
}

module.exports = {
    plugins: [
        // déclaration des plugins utilisés
        require('postcss-import'),
        require('cssnano')(cssnanoOptions),
        require('autoprefixer'),
        require('tailwindcss'),
    ]
}