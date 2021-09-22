
const botongustos=document.querySelector('#gustosbtn');



   const agregarTabla=()=>{
    
    $('#tabla tbody').append(insertar='<tr>' +
             '<td>'  + document.getElementById("gustos").value + '</td>' +
             '<td>' + 0 + '</td>' +
             '<td>' + `<a id="botonEditar" class="btn-small btn-flat blue btn-editar" onclick = editar(this);>Editar</a>` + '</td>' +
             '</tr>');
}
   const editar=(a)=> {
        $(a).addClass("disabled");
        $(a).text("En edicion");
         $("#mostrar").removeClass("btnprrfo");
        $("#mostrar").addClass("activado");
        

        
    }
//    function getFormData(formId){
//   let formValues = {};
//   var form1Inputs = document.forms[formId].getElementsByTagName("input");
//   for(let i=0; i<form1Inputs.length; i++){
//         formValues[form1Inputs[i].name]=form1Inputs[i].value;
//   }
//   console.log(formValues);
// }

     function getFormData(){
         let configuracion={};
         $('input').each(function(){
             configuracion[this.name] = this.value;
         });
         console.log(configuracion);
     }

    	var form = document.querySelector('form');
			form.onsubmit = e => { //function ( e ){ }
								
				var fd = new FormData( form );
					
				
				// e.preventDefault( ); //prevenir la acción por defecto del onsubmit... enviarse

				var ajax = new XMLHttpRequest( ); //Javascript y XML Asincronico
					ajax.open( 'GET', 'formulario2.html' );
					//ajax.setRequestHeader( "content-type", "application/x-www-form-urlencoded" );
					ajax.onload = function( ){
						document.querySelector( '#respuesta' ).innerHTML = ajax.responseText;
					}
					ajax.send( fd );
			}
