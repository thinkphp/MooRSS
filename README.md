MooRSS
======

This plugin provides a simple way to build an RSS Reader using server-side proxy.

![Screenshot](http://farm7.static.flickr.com/6024/6020758993_b5c109d19d_z.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.

        #HTML#HEAD
        <script src="http://www.google.com/jsapi?key=ABQIAAAA1XbMiDxx_BTCY2_FkPh06RRaGTYH6UMl8mADNa0YKuWNNa8VNxQEerTAUcfkyrr6OwBovxn7TDAH5Q"></script>
        <script type="text/javascript">google.load("mootools", "1.3.2");</script>
        <script type="text/javascript" src="rss.js"></script>

Then
        #HTML#BODY
        <h2>Ajaxian RSS</h2>
        <div id="ajaxian"></div>

        <h2>MooTools Blog RSS</h2>
        <div id="mootools"></div>

Then
        #JS
        (function($){
         //when DOM is ready
         window.addEvent('domready', function(){
            $('ajaxian').rss('http://feeds.feedburner.com/ajaxian');
            $('mootools').rss('http://feeds.feedburner.com/mootools-blog');
         });
        })(document.id);
       