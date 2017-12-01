Ext.define('MyApp.view.movie.DirectorGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.directorGrid',
    title: 'Director',
    requires: ['Ext.selection.CellModel', 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.form.*', ],

    selModel: {
        selType: 'rowmodel'
    },

    reference: 'movieGrids',
    initComponent: function() {
        var movie = new MyApp.store.Movie({});
        Ext.apply(this, {
            store: movie,

            columns: [{
                text: 'Director',
                dataIndex: 'director',
                flex: 1,

                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    metaData.tdAttr = 'data-qtip="' + value + '"';
                    return value;
                }
            }, {
                text: 'Description',
                dataIndex: 'dir_description',
                flex: 1,

                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    metaData.tdAttr = 'data-qtip="' + value + '"';
                    return value;
                }
            }, ],
            viewConfig: {
                getRowClass: function(record, index) {
                    /*//*/
                }
            },
            listeners: {
                itemdblclick: function(dv, record, item, index, e) {

                },
            }


        });
        this.callParent(arguments);
    }
});


















