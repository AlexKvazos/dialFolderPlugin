var searchOptions = {pageIndex: 0, pageSize: 100};

buildfire.components.pluginInstance.getAllPlugins(searchOptions, function (err, res) {
  res.data =  [{
        folderName: "61",
        iconClassName: "glyphicon glyphicon-copy",
        iconUrl: null,
        instanceId: "03dd5856-99ed-4950-ad40-6d95a29ef7f2-1449635854927",
        pluginTypeId: "03dd5856-99ed-4950-ad40-6d95a29ef7f2",
        pluginTypeName: "Text WYSIWYG",
        title: "FAQ"
    }, {
        folderName: "61",
        iconClassName: null,
        iconUrl: "https://imageserver.prod.s3.amazonaws.com/73f35ddc-9e2d-11e5-88d3-124798dea82d/d98bc220-a2ba-11e5-80c1-2bff4f327b59.png",
        instanceId: "03dd5856-99ed-4950-ad40-6d95a29ef7f2-1449635736562",
        pluginTypeId: "03dd5856-99ed-4950-ad40-6d95a29ef7f2",
        pluginTypeName: "Text WYSIWYG",
        title: "Our Mission"
    }, {
        folderName: "218",
        iconClassName: "glyphicon glyphicon-picture",
        iconUrl: null,
        instanceId: "2f83a24f-46b5-41f9-90e7-3b2e927a1998-1484955319448",
        pluginTypeId: "2f83a24f-46b5-41f9-90e7-3b2e927a1998",
        pluginTypeName: "Image Gallery and Info Slider",
        title: "Image Gallery"
    }];
    plugins = res.data;
    callback(res.data);
});
