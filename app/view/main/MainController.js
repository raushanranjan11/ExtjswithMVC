/**
 * 
 */


Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    // init: function (view) {    },
     control: {

        'app-main   button[action=refresh]': {
        	click: function(button) {
         	Ext.ComponentQuery.query('movieList').getView().refresh();
        	// window.location.reload();
        }
         }
    },

     
   
});