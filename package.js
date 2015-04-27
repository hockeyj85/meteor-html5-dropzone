Package.describe({
  name: 'hockeyj85:html5-dropzone',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'A lightweight self-styling html5 dropzone.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hockeyj85/meteor-html5-dropzone',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.4');
	api.use(['templating', 'reactive-var'], 'client');
	api.addFiles('client/html5-dropzone.html', 'client');
	api.addFiles('client/html5-dropzone.js',   'client');
});
