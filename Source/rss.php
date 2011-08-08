<?php

if(isset($_GET['url']) && $_GET['url'] !== '') {

   $url = $_GET['url'];

} else {

   $url = 'http://feeds.feedburner.com/ajaxian';
}

include('RSSParser.php');

$rss = new RSSParser();

$rss->load($url);

$html = '<ul>';

foreach($rss->getItems() as $item) {
    
      $html .= "<li><a href='".$item->getLink()."'>".$item->getTitle()."</a></li>";
}

$html .= '</ul>';

echo $html;

?>