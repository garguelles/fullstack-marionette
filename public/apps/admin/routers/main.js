import $ from 'jquery';
import Marionette from 'backbone.marionette';
import AppController from '../controllers/main-controller';

export default Marionette.AppRouter.extend({

  controller: new AppController(),

  initialize() {

  },

  appRoutes: {
    '': 'dashboard'
  }

});
