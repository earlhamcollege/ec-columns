# EC Columns Widget
An [Apostrophe CMS](http://apostrophecms.org/) module to provide layout framework that will allow for 1-4 columns being added. Have control over narrow/full width and each column width.

## Example
This widget is meant to have data entered in the following manner:

Quote: 'This statement is the content of the quote'
Author: 'Porter L'
Author Info: 'An Earlham College student from Berea, KY'


## Install
From within your apostrophe project `npm install --save ec-columns`

Include widgets and bundle in app.js:

```
  bundles: [ 'ec-columns' ],
  modules: {
    'ec-columns': {},
    'ec-one-column-widgets': {},
    'ec-two-column-widgets': {},
    'ec-three-column-widgets': {},
    'ec-four-column-widgets': {},
    // ... other modules
}
```

In your page templates include: ex. /lib/modules/apostrophe-pages/views/pages/default.html

```
{% import "ec-columns:macros/utils.html" as utils with context %}

<main id="main-content">
{% block main %}
{{ utils.columns() }}
{% endblock %}
</main>
```

## Customize

To add your own wigets in the drop down for each column. Overwrite your own custom.html In the example below I added ec-quote widget to my drop down.
ex. /lib/modules/ec-columns/views/macros/custom.html

```
{% macro column(parent, name, imageSize) %}
  {{ apos.area(parent, name, {
    widgets: {
      'apostrophe-rich-text': {
        toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink' ]
      },
      'apostrophe-images': {
        size: imageSize
      },
      'apostrophe-video': {},

      'ec-quote': {}
    }
  }) }}
{% endmacro %}
```
## Libraries
The layout grid is defined by PURE CSS so there is no bootstrap conflicts.
