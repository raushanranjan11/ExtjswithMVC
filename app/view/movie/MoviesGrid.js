Ext.define('MyApp.view.movie.MoviesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.movieList',
    title: 'Movies',
    requires: ['Ext.selection.CellModel', 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.form.*',
        'MyApp.view.movie.MovieViewModel', 'MyApp.view.movie.MovieController', 'MyApp.store.Category'
    ],
    plugins: [{
        xclass: 'Ext.grid.plugin.RowEditing',
        clicksToMoveEditor: 2,
        autoCancel: false
    }],
    id: 'movieList',
    controller: 'movieController', // injected viewcontroller
    viewModel: {
        type: 'movieViewport' // injected viewmodel
    },
    selModel: {
        selType: 'rowmodel'
    },
    bind: {
        store: '{movieStore}'
    },

    reference: 'movieGrids',

    initComponent: function() {
        var comboStore = new MyApp.store.Category({});
        var me = this;
        Ext.apply(this, {
            tbar: [{
                text: 'Add ',
                scope: this,
                listeners: {
                    click: 'onAddMovies'
                }
            }, {
                text: 'Edit ',
                scope: this,
                listeners: {
                    click: 'onEditMovies'
                }
            }, {
                text: 'Delete ',
                scope: this,
                listeners: {
                    click: 'deleteMovies'
                }
            }],
            columns: [{
                text: 'Movie Title',
                dataIndex: 'movieTitle',
                flex: 1,
                editor: {
                    allowBlank: false
                },
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    metaData.tdAttr = 'data-qtip="' + value + '"';
                    return value;
                }
            }, {
                text: 'Release year',
                flex: 1,
                dataIndex: 'releaseYear',
                editor: {
                    allowBlank: false
                },
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    metaData.tdAttr = 'data-qtip="' + value + '"'; // for quicktip
                    return value;
                }
            }, {
                text: 'Category',
                dataIndex: 'category',
                flex: 2,
                editor: {
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

                    triggerAction: 'all',
                    allowBlank: false,
                },

                renderer: function(val, metaData, record, rowIndex, colIndex, store, view) {

                    var idx = comboStore.find('cat_id', val);
                    var value = idx !== -1 ? comboStore.getAt(idx).get('categoryName') : ''
                    metaData.tdAttr = 'data-qtip="' + value + '"';
                    return value;
                }
            }, {
                text: 'Director',
                dataIndex: 'director',
                flex: 1,
                editor: {
                    allowBlank: false
                },
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    metaData.tdAttr = 'data-qtip="' + value + '"';
                    return value;
                }
            }, {
                text: 'IMDB Link',
                dataIndex: 'imdbLink',
                flex: 1,
                editor: {
                    allowBlank: false
                },
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    metaData.tdAttr = 'data-qtip="' + "Please click on cell to open a  tab ."+ '"';
                    // return value; 
                   /* if (value != null && value != '') {
                        return '<a  class="link" href=\'idmb@link:' + value + ';\'>' + value + '</a>';
                    }*/
                    return value;
                }
            }, ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                bind: {
                    store: '{movieStore}'
                },
                dock: 'bottom',
                displayInfo: true,
                pageSize:3,
            }],
            viewConfig: {
                getRowClass: function(record, index) {

                }
            },
           

        });
        this.callParent(arguments);
    }
});













