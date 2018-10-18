module.exports = {
  name: 'ec-column',
  alias: 'ec-column',
  moogBundle: {
    modules: ['ec-one-column-widgets', 'ec-two-column-widgets', 'ec-three-column-widgets', 'ec-four-column-widgets'],
    directory: 'lib/modules'
  },

  construct: function(self, options) {
    self.play = function($widget, data, options) {};
    self.pushAsset('stylesheet', 'base-min');
    self.pushAsset('stylesheet', 'grids-min');
    self.pushAsset('stylesheet', 'grids-responsive-min');
    self.pushAsset('stylesheet', 'layouts');
    self.pushAsset('stylesheet', 'user', 'user');
  }
};
