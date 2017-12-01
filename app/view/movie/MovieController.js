Ext.define('MyApp.view.movie.MovieController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.movieController',
    init: function(view) {
         var me = this;

        me.control({
            'movieList' : {

                render:function(){
                    console.log(view);
                },
                
            cellclick: function(e1, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                  var link = record.get('imdbLink');
                        if (cellIndex == 4) {
                        // if (typeof(e.target.getElementsByTagName('a')[0]) == 'undefined') {
                            if(link == ''){
                            Ext.Msg.alert('Alert', record.get('movieTitle') + ' has no link.');
                        } else {
                            var tabPanel = me.getView().up('app-main').down('tabpanel');
                            var addIndex = tabPanel.items.length;
                            var tab = tabPanel.add({
                                xtype: 'panel',
                                closable: true,
                                title: record.get('movieTitle'),
                                html: record.get('cat_description')
                            });

                            tabPanel.setActiveTab(tab);
                        }

                    }

               }
            


            }
                // ..
            });


    },
    onAddMovies: function() {
        Ext.widget('movieEdit');


    },
    onEditMovies: function(button) {
        var view = this.getView();
        var selected = view.getSelectionModel().getSelection();

        if (Ext.isEmpty(selected)) {
            Ext.Msg.alert('Alert', 'You should select a row.');
        } else {

            var form = Ext.create('MyApp.view.movie.MovieForm', {
                viewModel: {
                    data: {
                        theMovies: this.getView().getSelectionModel().getSelection()[0]
                    }
                },
                session: true
            });
            var window = Ext.create('Ext.Window', {
                frame: true,
                width: 350,
                height: 320,
                modal: true,
                layout: 'fit'
            });
            window.add(form);
            this.getView().add(window); // <--- add parent 'scope'
            window.show();


        }

    },
    deleteMovies: function(grid, rowIndex) {
        var me = this;
        var view = me.getView(),
            selected = view.getSelectionModel().getSelection()[0],
            store = view.getViewModel().getStore('movieStore');


        store.remove(selected);
    },

    gridRowClick: function(dv, record, item, index, e) {
        alert('working');
    },
    control: {
        'movieForm button[action=save]': {
            click: function(button) {
                var form = button.up('form'),
                    window = form.up('window');

                window.close();
            }
        },
        'movieForm button[action=cancel]': {
            click: function(button) {
                var form = button.up('form'),
                    window = form.up('window');

                window.close();
            }
        }
    },
    onGridpanelSelect:function(){
        
        console.log('jjjjjjjjj');
    }
});













