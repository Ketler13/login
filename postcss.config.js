module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({
        browsers: [
            '> 5%',
            'last 2 versions',
            'ie > 7'
        ] 
    })
  ]
}
