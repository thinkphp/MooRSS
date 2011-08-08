var RSS = new Class({

    Implements: [Options,Events],

    options: {
       url: '',
       proxy: 'rss.php?url='
    },

    initialize: function(options) {

       this.setOptions(options);

      return this;   
    },

    request: function(opts) {

             var opts = opts || {},  

             self = this,

             url = opts.url || this.options.url,  

             req = new Request({                    

                   url: this.options.proxy + url,

                   method: 'get',
 
                   onSuccess: function(responseText,responseXML) {

                     if(opts.onSuccess && typeof(opts.onSuccess) == 'function') {
                        
                        opts.onSuccess(responseText);

                     } else {

                        self.fireEvent('success',[responseText]);
                     }

                   },

             onRequest: function() {

                   if(opts.onRequest && typeof(opts.onRequest) == 'function') {

                     opts.onRequest();

                   } else {

                     self.fireEvent('request');
                   }

             },

             onFailure: function(xhr) {

                   if(opts.onFailure && typeof(opts.onFailure) == 'function') {

                     opts.onFailure(xhr);

                   } else {

                     self.fireEvent('failure',[xhr]);
                   }
             }
                
         });

         req.send();
    } 	   
});

Element.implement({
        rss: function(url) {
             var target = this;  
             new RSS({url: url, 
                      onSuccess: function(o){
                        target.set('html',o);    
                      },
                      onRequest: function() {
                        target.set('text','Loading...');    
                      }
             }).request();
          return this;
        }
});
