html5-dropzone
==============

**A lightweight self-styling html5 drop zone for meteor.**

```sh
meteor add hockeyj85:html5-dropzone
```

html5-dropzone is used as a block helper and will render to the dom as a ```<div>```,
it will react to to drag over events by styling itself.
It solves the issue of events fired by child elements inside of a drop zone
messing with parent element styles.
All drag and drop events will still be bubbled up so you can still use them.
The context inside the block will be the same as the parent context.

Why?
---

[CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS)
make it easy to [implement a working dropzone](https://github.com/CollectionFS/Meteor-CollectionFS/wiki/Insert-One-Or-More-Files-Dropped-on-an-Element),
I couldn't find a lightweight way to style it. So this package happened.

Usage
-----

By default there are no styles or classes applied, you have to tell the the
dropzone how to style itself.

###Basic usage

```spacebars
<style>
    .normal {
        border-style: solid;
        border-width: 2px;
        border-radius: 5px;
    }

    .hoverClass {
        background-color: lightblue;
        border-style: dashed;
        border-color: cornflowerblue;
    }

    .unhoverClass {
        border-color: lightgray;
    }
</style>

{{#html5Dropzone class="normal" hoverClass="hoverClass" unhoverClass="unhoverClass"}}
    <h1>Drop it like it's hot.</h1>
    {{! and other useful things }}
{{/html5Dropzone}}
```

Attributes
----------

All of the attributes are optional, if nothing is passed in the dropzone will
just render as plain ```<div>```. Not very useful.

```spacebars
{{#html5Dropzone
    id="aCoolId"
    class="normal"
    hoverClass="hoverClass"
    unhoverClass="unhoverClass"
    style=""
    hoverStyle="background-color: "
    unhoverStyle=""
}}
    <h1>Drop it like it's hot.</h1>
    {{! and other useful things }}
{{/html5Dropzone}}
```

###id

The id of the dom element generated, so you can use css selectors on it.

###class

This class is applied to the dropzone all of the time.

###hoverClass

This class is added when something is dragged over the drop zone.

###unhoverClass

This class is added when something is not being dragged over the drop zone.

###style

You can pass in some css as a string that will be attached directly to the dropzone.
It must be well-formed and end with a ';' or this will silently fail.

###hoverStyle

This css is attached to the dropzone when something is dragged over it.

###unhoverStyle

This css is attached to the dropzone when something is not being dragged over it.

Known Issues
------------

This package relies on counting dragleave events from the dom, if elements borders
are too close to each other then it can get it wrong.
ie. if you put a child element inside of the dropzone without any padding
the hover styles can get 'stuck' on.