 $("#os-phrases > h2")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering();

$("#os-phrases2 > p")
.css('opacity', 1).lettering( 'words' )
.children( "span" ).lettering()
.children( "span" ).lettering();
    
/*Script reference "https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js"*/
/* Orignal Lettering.JS 0.6.1 by Dave Rupert  - http://daverupert.com */
(function($){
    function injector(t,splitter,klass,after){
        var a=t.text().split(splitter),inject='';
    if(a.length){
        $(a).each(function(i,item){
            inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after
            });
    t.empty().append(inject)
        }
    }
    var methods={
        init:function(){
            return this.each(function(){
                injector($(this),'','char','')
            }
        )},
        words:function(){
            return this.each(function(){
                injector($(this),' ','word',' ')
            })
        },lines:function(){
            return this.each(function(){
                var r="eefec303079ad17405c889e092e105b0";
                injector($(this).children("br").replaceWith(r).end(),r,'line','')
            })
        }
    };
    $.fn.lettering=function(method){
        if(method&&methods[method]){
            return methods[method].apply(this,[].slice.call(arguments,1))
        }
        else if(method==='letters'||!method){
            return methods.init.apply(this,[].slice.call(arguments,0))
        }
        $.error('Method '+method+' does not exist on jQuery.lettering');
        return this
    }
})(jQuery);
