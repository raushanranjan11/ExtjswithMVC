/**
 * 
 */
Ext.define('MyApp.view.movie.MovieViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.movieViewport',
    // model: 'MyApp.model.Movie',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    stores: {
        movieStore: {
            // autoLoad: true,
             autoLoad: {
    params: {
      start: 0,
      limit: 3
      //total:15
    }
  },
  remoteSort: true,
            pageSize: 3,
            model: 'MyApp.model.Movie',
            proxy: {
                type: 'ajax',
                pageSize: 3,
                  // type: 'memory',
                url: 'data/movies.json',
                 enablePaging: true,
                reader: {
                    type: 'json',
                    rootProperty: 'rows',
                    
                    totalProperty: 'total'
                }
            },


        }
    },



});











