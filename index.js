module.exports = {
  moogBundle: {
    modules: ['ec-one-column-widgets'],
    directory: 'lib/modules'
  },

  construct: function(self, options) {
    self.pushAsset('stylesheet', 'base-min');
    self.pushAsset('stylesheet', 'grids-min');
    self.pushAsset('stylesheet', 'grids-responsive-min');
    self.pushAsset('stylesheet', 'layouts');
  }
};
