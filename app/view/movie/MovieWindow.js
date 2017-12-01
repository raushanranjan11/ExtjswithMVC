// Edit window for row of grid
Ext.define("MyApp.view.movie.MovieWindow", {
    extend: 'Ext.window.Window',
    xtype: 'movieEdit',
    layout: 'fit',
    autoShow: true,
    modal: true,
    width: 400,
    height: 350,
    closable: true,
    viewModel: {
        type: 'movieViewport' // injected viewmodel
    },

    initComponent: function() {
        var comboStore = new MyApp.store.Category({});

        this.items = [{
            xtype: 'form',
            height: 300,
            width: 400,
            bodyPadding: 10,
            items: [

                {
                    xtype: 'textfield',
                    name: 'movieTitle',
                    allowBlank: false,
                    msgTarget: 'side',
                    blankText: 'Movie Name  is Mandatory!',
                    fieldLabel: 'Movie Title',
                    reference: 'movieTitle',
                    listeners: {

                    }
                }, {
                    xtype: 'textfield',
                    name: 'releaseYear',
                    fieldLabel: 'Release year',
                    reference: 'releaseYear',
                    listeners: {

                    }
                }, {
                    name: 'category',
                    fieldLabel: 'Category',
                    xtype: 'combobox',
                    maxHeight: 150,
                    multiSelect: true,
                    emptyText: "Select Category",
                    store: comboStore,
                    displayField: 'categoryName',
                    valueField: 'cat_id',
                    forceSelection: false,
                    editable: false,
                    queryMode: 'local',
                    value: 'AC',
                    triggerAction: 'all',
                    allowBlank: false,
                    reference: 'category',
                    msgTarget: 'side',
                    blankText: 'Category  is Mandatory!',
                    reference: 'category',

                    listeners: {

                    }
                },
                {
                    xtype: 'textfield',
                    name: 'director',
                    fieldLabel: 'Director',
                    allowBlank: false,
                    reference: 'director',
                    msgTarget: 'side',
                    blankText: 'Director Name  is Mandatory!',
                    reference: 'director',

                },
                {
                    xtype: 'textfield',
                    name: 'imdbLink',
                    fieldLabel: 'IMDB Link',
                    reference: 'imdbLink',

                }

            ],
            buttons: [{
                    text: 'Submit',
                    scope: this,
                    formBind: true,
                    //id:'submit',
                    listeners: {
                        click: function(button) {

                            var win = button.up('window');

                            var values = this.up('form').getForm().getValues();
                            Ext.getCmp('movieList').getStore().add(values);

                            win.close();


                        }
                    }

                },

                {
                    text: 'Cancel',
                    scope: this,
                    handler: this.close,
                    listeners: {

                    }
                }
            ]
        }];

        this.callParent(arguments);
    }
});












