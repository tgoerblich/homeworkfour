Ext.define('HomeworkFour.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                cls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Homework #4'
                },

                html: [
                    "This is just a bare minimum app to get things started.",
                    '<hr />',
                    '<img src=http://it.siciliando.com/wp-content/uploads/sites/2/2014/02/logo-freigestellt_100px1.jpg />'
                ].join("")
            },
            {
                title: 'View Demo',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'View from the balcony'
                    },
                    {
                        xtype: 'video',
                        url: 'http://thomasgoerblich02.cloudcontrolled.com/media/where_i_live_284x160.ogv',
                        url: 'http://thomasgoerblich02.cloudcontrolled.com/media/where_i_live_284x160.mp4',
                        posterUrl: 'http://thomasgoerblich02.cloudcontrolled.com/media/where_i_live_284x160.jpg'
                    }
                ]
            },
            {
                xtype: 'carousel',
                title: 'Rooms',
                iconCls: 'star',

                items: [
                    {
                        xtype: 'image',
                        src: 'http://it.siciliando.com/wp-content/uploads/sites/2/2014/03/stanza02.2-800x600ss.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'http://it.siciliando.com/wp-content/uploads/sites/2/2014/03/stanza03-800x450ss.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'http://it.siciliando.com/wp-content/uploads/sites/2/2014/03/stanza06.2-800x450ss.jpg'
                    }
                 ]    
            },
            {
                title: 'Search',
                iconCls: 'search',

                items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        items: [
                            {
                                xtype: 'searchfield',
                                placeHolder: 'Search',
                                name: 'searchfield'
                            }
                        ]
                    },
                 ]    
            }
        ]
    }
});
