CKEDITOR.dialog.add('bgImageDialog', function(editor) {
    return {
        title: 'Background image',
        resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
        minWidth: 500,
        minHeight: 200,
        onOk: function() {
            var dialog = this;
            var imageURL = dialog.getValueOf('tab1', 'imageURL');
            var reapeat = dialog.getValueOf('tab1', 'reapeat');
            var pos = dialog.getValueOf('tab1', 'pos')
            var blentMode = dialog.getValueOf('tab1', 'blend')
            var attachment = dialog.getValueOf('tab1', 'attachment')
            var css = 'body {';
            css += 'background-image:url(' + imageURL + ');';
            css += 'background-repeat:' + reapeat + ';';
            css += 'background-position:' + pos + ';';
            css += 'background-blent-mod:' + blentMode + ';';
            css += 'background-attachment:' + attachment + ';';
            css += '}';
            console.log(css);
            editor.document.appendStyleText(css)
        },
        contents: [{
            id: 'tab1',
            label: 'First Tab',
            title: 'First Tab Title',
            accessKey: 'Q',
            elements: [{
                type: 'vbox',
                padding: 0,
                children: [{
                        type: 'hbox',
                        widths: ['280px', '100px;vertical-align: middle;'],
                        align: 'right',
                        styles :'',
                        children: [{
                            type: 'text',
                            label: 'Image URL',
                            id: 'imageURL',
                        }, {
                            type: 'button',
                            id: 'browse',
                            label: editor.lang.common.browseServer,
                            hidden: true,
                            filebrowser: 'tab1:imageURL'
                        }]
                    }] 
            }, {
                type: 'vbox',
                padding: 0,
                children: [{
                        type: 'hbox',
                        widths: ['150px', '150px'],
                        align: 'right',
                        children: [{
                                type: 'select',
                                id: 'reapeat',
                                label: 'Reapeat',
                                items: [
                                    ['repeat'],
                                    ['no-repeat'],
                                    ['repeat-x'],
                                    ['repeat-y'],
                                ],
                                'default': 'reapeat'
                            }, {
                                type: 'select',
                                id: 'attachment',
                                label: 'Attachment',
                                items: [
                                    ['scroll'],
                                    ['fixed'],
                                    ['local'],
                                ]
                            }] 
                    }] 
            }, {
                type: 'vbox',
                padding: 0,
                children: [{
                    type: 'hbox',
                    widths: ['150px', '150px'],
                    align: 'right',
                    children: [{
                        type: 'select',
                        id: 'blend',
                        label: 'Blen Mode',
                        items: [
                            ['normal'],
                            ['multiply'],
                            ['screen'],
                            ['overlay'],
                            ['darken'],
                            ['lighten'],
                            ['color-dodge'],
                            ['saturation'],
                            ['color'],
                            ['luminosity'],
                        ],
                        style: 'float:left',
                        'default': 'normal'
                    }, {
                        type: 'select',
                        label: 'Position',
                        id: 'pos',
                        align: 'right',
                        items: [
                            ['left top'],
                            ['left center'],
                            ['left bottom'],
                            ['right top'],
                            ['right center'],
                            ['center top'],
                            ['center center'],
                            ['center center'],
                        ],
                        'default': 'left top'
                    }, ]
                }]
            }]
        }],
    }
})