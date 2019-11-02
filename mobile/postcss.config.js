module.exports = {
  plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
      rootValue: 75,
      propList:['*']
      //propList所有值都会被转换成rem
      }
  },
}
