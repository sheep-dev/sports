function resizeIframe(obj) {

    setTimeout(() => {

        obj.style.height=(obj.contentWindow.document.body.scrollHeight+100)+'px';

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

fetch("https://v1.volleyball.api-sports.io/standings?league=3&season=2021", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1.volleyball.api-sports.io",
		"x-rapidapi-key": "8b912b9af546a04cd711925ae8570350"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
