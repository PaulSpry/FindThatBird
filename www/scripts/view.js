var app = function(app){

	app.makeView = function(stage, stageW, stageH, layoutManager){

		var circle = new zim.Circle(50, "red");
		circle.center(stage);

		layoutManager.add(
			new zim.Layout({
				holder: page1,
				regions: [
					{object: logo, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
					{object:content, marginTop:5, maxWidth:80, align: "center"},
					{object:footer, marginTop:5, maxWidth:80, height:20, backgroundColor: frame.orange}
				],
				lastMargin: 3,
				regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);

		// LAYOUT 2

		layoutManager.add(
			new zim.Layout({
				holder: page2,
				regions: [
					{object: logo2, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
					{object:content2, marginTop:5, maxWidth:80, align: "center"},
					{object:footer2, marginTop:5, maxWidth:80, height:20, backgroundColor: frame.orange}
				],
				lastMargin: 3,
				regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);



		return view
	}; //end makePages

	return app;

}(app || {}); //use modual pattern to avoid overwriting variables
