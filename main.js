import './style.css'


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
        No sé
        <i class="bi bi-trash"></i>
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
