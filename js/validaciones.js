'use strict'

console.log('Cargado JS')
window.onload= iniciar
let sCurso= document.getElementById("sCurso")
let iCalculo1= document.getElementById("iCalculo1")
let iCalculo2= document.getElementById("iCalculo2")
let iCalculo3= document.getElementById("iCalculo3")
let spanMedia= document.getElementById("spanMedia")
let divError=document.getElementById("divError")
let sw=0
function iniciar(){
    let formulario =document.forms[0]
    formulario.onsubmit= validar
}
function validar(evento){
    if(sCurso.value=='1DAW' && sw==0){
        alert('mira los cursos');
        evento.preventDefault()
        let asignaturas=document.createElement('select')
        let bbdd = document.createElement("option");
        bbdd.text="Bases de datos"
        let prog = document.createElement("option");
        prog.text="programacion"
        let lm = document.createElement("option");
        lm.text="lenguaje de marcas"
        let si = document.createElement("option");
        si.text="sistemas informaticos"
        let fol = document.createElement("option");
        fol.text="FOL"
        document.body.appendChild(asignaturas)
        asignaturas.add(bbdd)
        asignaturas.add(prog)
        asignaturas.add(lm)
        asignaturas.add(si)
        asignaturas.add(fol)
        sw=1
    }else{
        console.log(sCurso.value);
    }
    if(sCurso.value=='2DAW' && sw==0){
        alert('mira los cursos');
        evento.preventDefault()
        let asignaturas2=document.createElement('select')
        let cliente = document.createElement("option");
        cliente.text="Cliente"
        let servidor = document.createElement("option");
        servidor.text="Servidor"
        let empresa = document.createElement("option");
        empresa.text="Empresa"
        let diw = document.createElement("option");
        diw.text="Diseño"
        document.body.appendChild(asignaturas2)
        asignaturas2.add(cliente)
        asignaturas2.add(servidor)
        asignaturas2.add(empresa)
        asignaturas2.add(diw)
        sw=1
    }
    /*sacado de https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event*/
    iCalculo1.addEventListener('change', comprobarSuma);
    iCalculo2.addEventListener('change', comprobarSuma);
    iCalculo3.addEventListener('change', comprobarSuma);
    
    function comprobarSuma(){
        if(suma(iCalculo1.value,iCalculo2.value,iCalculo3.value)<10 || suma(iCalculo1.value,iCalculo2.value,iCalculo3.value)>20){
            /*alert(suma(iCalculo1.value,iCalculo2.value,iCalculo3.value));*/
            evento.preventDefault()
            divError.style.display = "block";
            divError.textContent='La suma de los campos numericos no puede ser mayor que 20 ni menor que 10'
        }else{
            spanMedia.textContent= suma(iCalculo1.value,iCalculo2.value,iCalculo3.value)/3
            divError.style.display = "none";
        }
    }
    

}
function suma(n1,n2,n3){
    return (+n1)+(+n2)+(+n3)
}
function ponerCero(){
    iCalculo1.value= 0
    iCalculo2.value= 0
    iCalculo3.value= 0
    spanMedia.textContent= 'N/A'
}