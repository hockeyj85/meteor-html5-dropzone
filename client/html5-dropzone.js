"use strict";


/**
 * Template Life Cycle
 */
Template.html5Dropzone.onCreated(function() {
	if (!this.data) return;
	// Put all the state in this.fdz to minimise chances of future name conflicts.
	this.fdz = {
		id: this.data.id || Math.floor(Math.random() * 1000000).toString(),
		class:         this.data.class          || "",
		hoverClass:    this.data.hoverClass     || "",
		unhoverClass:  this.data.unhoverClass   || "",
		style:         this.data.style          || "",
		hoverStyle:    this.data.hoverStyle     || "",
		unhoverStyle : this.data.unhoverStyle   || "",
		counter: 0,
		isHovering: new ReactiveVar(false),
	};
});


/**
 * Helpers
 */
Template.html5Dropzone.helpers({

	'id': function() {
		return UI._templateInstance().fdz.id;
	},

	'class': function () {
		var template = UI._templateInstance();
		var isHovering = template.fdz.isHovering.get();

		if (isHovering) {
			return template.fdz.class + " " + template.fdz.hoverClass;
		} else {
			return template.fdz.class + " " + template.fdz.unhoverClass;
		}

	},

	'style': function() {
		var template = UI._templateInstance();
		var isHovering = template.fdz.isHovering.get();

		if (isHovering) {
			return template.fdz.style + " " + template.fdz.hoverStyle;
		} else {
			return template.fdz.style + " " + template.fdz.unhoverStyle;
		}
	},

});


/**
 * Events
 *
 * Thanks for the counter idea Woody!
 * http://stackoverflow.com/questions/7110353/html5-dragleave-fired-when-hovering-a-child-element
 */
Template.html5Dropzone.events({

	'dragenter': function(event, template) {
		template.fdz.counter++;

		var id = template.fdz.id;
		if (event.target.id !== id) return;
		if (template.counter === 1) template.fdz.isHovering.set(true);
	},

	'dragover': function(event, template) {
		template.fdz.isHovering.set(true);
	},

	'dragleave': function(event, template) {
		template.fdz.counter--;

		var id = template.fdz.id;
		if (event.target.id !== id) return;
		if (template.fdz.counter === 0) template.fdz.isHovering.set(false);
	},

	'drop': function(event, template) {
		template.fdz.counter--;
		template.fdz.isHovering.set(false);
	},

});