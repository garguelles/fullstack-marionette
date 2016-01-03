import Marionette from 'backbone.marionette'
import tpl from '../templates/index.jade'

export default Marionette.LayoutView.extend({

  template: tpl,

  regions: {
    contentRegion: '.content'
  },

  onRender() {
  }
});
