exports.install = function() {
	F.route('/', view_index);
};

function view_index() {
	var self = this;
	self.plain('Hello World!');
}