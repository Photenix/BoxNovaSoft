import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


let table = document.getElementById("information-rows")

let moduleChange = document.getElementById("info-change")

table.innerHTML = ""

const addValuesInfoChange = ( name, lname, chC, chU, chD) => {
    document.getElementById("name-change").value = name
    document.getElementById("last-name-change").value = lname

    document.getElementById("create-change").checked = chC == "X"
    document.getElementById("update-change").checked = chU == "X"
    document.getElementById("delete-change").checked = chD == "X"
}

const tableRow = ( names, last_names, permissions) => {

    let node = document.createElement("tr")

    node.innerHTML = `
        <td>${names}</td>
        <td>${last_names}</td>
        <td>${permissions.create ?"X" :"" }</td>
        <td>${permissions.upload ?"X" :"" }</td>
        <td>${permissions.delete ?"X" :"" }</td>
        <td>
            <i class="bi bi-trash" title="eliminar"></i>
            <i class="bi bi-plus-circle" title="actualizar"></i>
        </td>
    `

    node.querySelector( ".bi.bi-plus-circle" ).addEventListener( "click", evn => {

        let parent = evn.target.parentElement.parentElement
        
        let childrens = parent.querySelectorAll("td")

        let info = []

        for (let i = 0; i < childrens.length-1; i++) {
            const element = childrens[i];
            info.push( element.innerText );
        }
    
        addValuesInfoChange( ...info );
        // name.value = names

        moduleChange.showModal()
    })


    // console.log( names, last_names, permissions );
    return node
}


console.log( table );

fetch("/data/rols.json")
    .then( data => data.json() )
    .then( json => {

        json.forEach(element => {
            let {names, last_names, permissions} = element
            // table.innerHTML += tableRow( names, last_names, permissions )
            table.appendChild( tableRow( names, last_names, permissions ) )
        });
        console.log( json ) 
    })

const form = document.getElementById("new-item")

form.addEventListener("submit", e => {
    e.preventDefault()
    console.log("hi");
})