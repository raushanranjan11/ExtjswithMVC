//Main viewport of application
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: ['MyApp.view.main.MainController'],
    xtype: 'app-main',
    controller: 'main',
    plugins: 'viewport', //plugged-In viewport object
    layout: {
        type: 'border'
    },
 
    items: [{
            xtype: 'panel',
            region: 'north',
            height: 100,
             layout: 'column',
            //border:true,
            items: [{
                    xtype: 'panel',
                    columnWidth: 0.50,  
                    height: 90,
                    html: '<img src="resources/image/image.png" alt=""  style="height:100px;"/>'
                },
                {
                    xtype: 'panel',  
                    columnWidth: 0.50,
                    height: 90,
                     items: [{
                            xtype: 'button',
                            text: 'Refresh',
                            id: 'refresh',
                             action: 'refresh',
                            style: {
                                'float': 'right'
                            }, 
                            scope : this,
                             
                        }

                    ]
                }

            ]

        },



        {
            xtype: 'panel',
            region: 'west',
            collapsed: false,
            collapsible: true, 
             split:true,

            title: 'Navigation',
            width: 450,

            items: [{
                    xtype: 'panel',
                      
                    items: [{
                            xtype: 'panel',
                            
                            items: [{
                                    xtype: 'treepanel',  
                                    useArrows: false,
                                    rootVisible: true,
                                    root: {
                                        text: 'Directors',
                                        expanded: true,
                                        children: [{
                                                text: 'Add',
                                                leaf: true
                                            },
                                            {
                                                text: 'List',
                                                leaf: true
                                            },

                                        ]
                                    },
                                    listeners: {
                                        itemclick: function(view, record, item, index, evt, eOpts) {

                                          
                                          if(index ==  2){
                                            var tabPanel = this.up('app-main').down('tabpanel');
                                            var addIndex = tabPanel.items.length;
                                            var tab = tabPanel.child('directorGrid');

                                            if (tab == null) {
                                                tabPanel.add({
                                                    xtype: 'directorGrid',
                                                    
                                                    listeners:{
                                                        afterrender :function( e, eOpts ) {
                                                         
                                                          var storeListOfMovie  =  Ext.getCmp('movieList').getStore().getRange();
                                                          this.getStore().removeAll();
                                                       this.getStore().loadData(storeListOfMovie)
                                                      }

                                                    }
                                                });
                                                tabPanel.setActiveTab(addIndex);
                                            } else {
                                                if (tab.tab.hidden == true) {
                                                    tab.tab.show();
                                                }
                                            }

                                            tabPanel.setActiveTab(tab);

                                            }else if(index == 1){
                                              var win  = Ext.widget('directorForm');
                                              // view.add(win);
                                              win.show();
                                              

                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'treepanel',  
                                    useArrows: false,
                                    rootVisible: true,
                                    root: {
                                        text: 'Category',
                                        expanded: true,
                                        children: [{
                                                text: 'Add',
                                                leaf: true
                                            },
                                            {
                                                text: 'List',
                                                leaf: true
                                            },

                                        ]
                                    },
                                    listeners: {

                                         

                                        itemclick: function(view, record, item, index, evt, eOpts) {

                                          
                                          if(index ==  2){
                                            var tabPanel = this.up('app-main').down('tabpanel');
                                            var addIndex = tabPanel.items.length;
                                            var tab = tabPanel.child('categoryGrid');

                                            if (tab == null) {
                                                tabPanel.add({
                                                    xtype: 'categoryGrid',

                                                    listeners:{
                                                        afterrender :function( e, eOpts ) {
                                                         
                                                          var storeListOfMovie  =  Ext.getCmp('movieList').getStore().getRange();
                                                          this.getStore().removeAll();
                                                       this.getStore().loadData(storeListOfMovie)
                                                      }

                                                    }
                                                });
                                                tabPanel.setActiveTab(addIndex);
                                            } else {
                                                if (tab.tab.hidden == true) {
                                                    tab.tab.show();
                                                }
                                            }

                                            tabPanel.setActiveTab(tab);

                                            }else if(index == 1){
                                              var win  = Ext.widget('categoryForm');
                                              // view.add(win);
                                              win.show();
                                              

                                            }
                                        }
                                    }
                                },
                                /*{
                                  xtype:'treepanel', useArrows: false,
                                   rootVisible: true, 
                                  store: 'store',
                                }*/

                            ]
                        }

                    ]
                },

            ]
        }, {
            region: 'center',
            xtype: 'tabpanel',
            id: 'tabpanel',
            items: [{
                xtype: 'movieList', // Create a session for this view
                session: true,
            }]
        }
    ]
});
















