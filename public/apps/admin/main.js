import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import MainRouter from './routers/main';
import LayoutView from './views/main-layout-view';


const App = Marionette.Application.extend({

  initialize() {
    console.log('App Initialized')
    const router = new MainRouter();
  },

  start() {
    if (Backbone.history) Backbone.history.start();
    let $body = $('body');
    $body.html(new LayoutView().render().el);
  }
});

var app = new App();
app.start();
