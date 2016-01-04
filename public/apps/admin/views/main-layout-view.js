import Marionette from 'backbone.marionette'
import tpl from '../templates/index'

export default Marionette.LayoutView.extend({

  template: tpl,

  regions: {
    contentRegion: '.content'
  },

  onRender() {

  }

});
