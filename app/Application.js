/**
 * Application definition goes here
 */

Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
//  Aplication name space
    name: 'MyApp',

 // TODO: add global / shared models here
		models: [
			 
			'MyApp.model.Movie',
			'MyApp.model.Category'
		],

    stores: [
        // TODO: add global / shared stores here
	 
		'MyApp.store.Movie',
		'MyApp.store.Category'
    ],
    views: [
        'MyApp.view.login.Login',
        'MyApp.view.main.Main',
		 'MyApp.view.movie.MoviesGrid',
		'MyApp.view.movie.MovieWindow',
		'MyApp.view.movie.CategoryGrid',
		'MyApp.view.movie.DirectorGrid',
		'MyApp.view.movie.MovieForm',
		"MyApp.view.movie.CategoryForm",
		"MyApp.view.movie.DirectorForm",
    ],
    launch: function () {

		//Ext.QuickTips.init();
		  // intialising tooltip object
		Ext.tip.QuickTipManager.init();
         // initialising login screen during starting or boot of application
	    Ext.widget('app-main');

    }
});