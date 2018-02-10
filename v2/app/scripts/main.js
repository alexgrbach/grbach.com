function wedding(){
    console.log('wedding');
    $('#myModalLabel').html('Weddings');
    getimages('72157677045780772');
};

function landscape(){
    console.log('landscape');
    $('#myModalLabel').html('Landscapes');    
    getimages('72157675321957063');
};

function portraits(){
    console.log('portraits');
    $('#myModalLabel').html('Portraits');    
    getimages('72157675239946044');
};

function flowers(){
    console.log('flowers');
    $('#myModalLabel').html('Flowers');    
    getimages('72157677082991382');
};

function viewall(){
    console.log('viewall');
    $('#myModalLabel').html('All Photos');    
    getimages('72157675345428993');
};

function getimages(album) {
    var uri = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=57f6911504cd45dc2626f2424654c1e2&user_id=142327887@N06&photoset_id=' + album + '&format=json&nojsoncallback=1';
    $('#gallery').empty();
    $.getJSON(uri)
        .done(function (data) {
        var dataNum = data.photoset.photo.length;
        var counter = 1;
        $.each(data.photoset.photo,
            function (index, images) {
                $('<img alt="' + images.title + '" src="https://farm' + images.farm + '.staticflickr.com/' + images.server + '/' + images.id + '_' + images.secret + '.jpg" data-image="https://farm' + images.farm + '.staticflickr.com/' + images.server + '/' + images.id + '_' + images.secret + '_h.jpg" data-description="' + images.title + '">')
                    .appendTo($('#gallery'))
                    if(dataNum == counter){
                          $('#gallery').unitegallery({
                            gallery_theme: 'tiles'
                            // tiles_type: 'nested',
                            // lightbox_type: 'compact',
                            // tiles_nested_optimal_tile_width: 400
                          });
                    }
                     counter++;
            });

    });    
};