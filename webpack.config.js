module.exports = {
    module: {
        rules: [
          {
            include: path.join(__dirname, 'src/components'),
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  namedExport: true
                }
              }
            ]
          }
        ]
    }      
};
