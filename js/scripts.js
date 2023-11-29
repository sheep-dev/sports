function resizeIframe(obj) {

    setTimeout(() => {

        obj.style.height=(obj.contentWindow.document.body.scrollHeight+50)+'px';

    }, 500)
}

function get_parameter(param) {

    var vars = {};

    window.location.href.replace( location.hash, '' ).replace(/[?&]+([^=&]+)=?([^&]*)?/gi,
        function( m, key, value ) {

            vars[key] = value !==  undefined  ? value :  '';
        }
    );

    if ( param ) {

        return vars[param] ? vars[param] :  null;
    }
    return vars;
}