function mOver(obj) {
        obj.innerHTML = '<h3>Code</h3><pre id="p1"></pre>'+ 
        				'<a href="https://github.com/alexgrbach/Projects"></a>';
        $('#p1').writeText('(function($) {\n    $.fn.writeText = function(content) {\n        var contentArray = content.split(""),\n            current = 0,\n            elem = this;\n        setInterval(function() {\n            if(current < contentArray.length) {\n                elem.text(elem.text() + \n\t\tcontentArray[current++]);\n            }\n        }, 4);\n    };\n})(jQuery);\n\n$(".image-col").click(function() {\n  window.location =\n\t$(this).find("a").attr("href"); \n  return false;\n});');

};

function mOut(obj) {
        obj.innerHTML = '<h3>Code</h3>' +
        				'<a href="https://github.com/alexgrbach/Projects"></a>';
};

$(".image-col").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
