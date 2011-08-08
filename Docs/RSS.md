Class: RSS {#RSS}
=====================================

This plugin provides a simple way to build an RSS Reader using server-side proxy.

### Implements:

Options, Events

RSS Method: constructor {#RSS: constructor}
-----------------------------------------------------------

### Syntax: 

    var myRSS = new RSS(options);

### Arguments:

1. options - (*object*) An object containing the RSS instance's options.

### Options:

### Returns:

A new RSS instance.

### Events:

### request

* (*function*) Function that is fired when the request is sent.

### Signature

   onRequest();

#### Arguments: 

* (*void*).

### success

* (*function*) Function to execute when the request is completed.

### Signature

   onSuccess(responseText,responseXML);

#### Arguments:

1. responseText - (*String*) The retuned text from the request.
2. responseXML - (*mixed*) The response XML from the request.


### failure

* (*function*) Function to execute when the request failed.(error status code)

### Signature

   onFailure(xhr);

#### Arguments: 

* xhr - (*XMLHttpRequest*) The transport instance.


RSS method: request{#RSS: request}
----------------------------------

Opens the RSS connection and sends the provides data with specified options.

### Syntax:

    myRSS = new RSS(options);
    myRSS.request(options); 

Element method: rss{#Element: rss}
----------------------------------

### Syntax:

    myElement.rss(url);

### Arguments:

1. url (*String*) The URL you want to retrieve the RSS Feed.

### Returns:

* (*Element*) This Element.

### Example:

   #HTML
   <div id="ajaxian"></div>
   <div id="mootools"></div>

   #JS
   (function($){

     window.addEvent('domready', function(){
            $('ajaxian').rss('http://feeds.feedburner.com/ajaxian');
            $('mootools').rss('http://feeds.feedburner.com/mootools-blog');
     });

   })(document.id);


