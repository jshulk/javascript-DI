var Injector = {
	// Dependencies are the modules being managed by this injector.
	dependencies : {},
	// A utility function for registering a module as dependency 
	register: function(name, dependency){
		this.dependencies[name] = dependency;
	},
	// another utility funciton for fetching all the dependencies.
	//@param - arr | array of strings containing dependency names.
	getDependencies: function(arr){
		var self = this;
		return arr.map( function(value){
			return self.dependencies[ value ];
		});
	},
	//Invokes a module by providing it all it's dependencies
	process: function(target){
		var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
			text = target.toString(),
			args = text.match(FN_ARGS)[1].split(",");

		target.apply(target, this.getDependencies(args));
	}
};