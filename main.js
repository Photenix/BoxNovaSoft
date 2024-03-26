import './style.css'
import './node_modules/bootstrap-icons/font/bootstrap-icons.css'


let table = document.getElementById("information-rows")

table.innerHTML = ""


const tableRow = ( names, last_names, permissions) => {
    console.log( names, last_names, permissions );
    return `<tr>
        <td>${names}</td>
        <td>${last_names}</td>
        <td>${permissions.create ?"X" :"" }</td>
        <td>${permissions.upload ?"X" :"" }</td>
        <td>${permissions.delete ?"X" :"" }</td>
        <td>
            <i class="bi bi-trash" title="eliminar"></i>
            <i class="bi bi-plus-circle" title="actualizar"></i>
        </td>
    </tr>`
}


console.log( table );

fetch("/data/rols.json")
    .then( data => data.json() )
    .then( json => {

        json.forEach(element => {
            let {names, last_names, permissions} = element
            table.innerHTML += tableRow( names, last_names, permissions )
        });
        console.log( json ) 
    })
