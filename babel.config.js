module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
      ["import",
        {
          "libraryName":"heyui",
          "libraryDirectory":"lib/components"
        }

      ]
  ]
}
