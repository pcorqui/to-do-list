const toDoItems = document.getElementsByClassName("to-do-items")[0];

const input = document.getElementById("Input");
const trashIcon = document.getElementById("trash");
const Toast = Swal.mixin({
    toast:true,
    position:'top-right',
    iconColor:'white',
    customClass:{
        popup:'colored-toast'
    },
    showConfirmButton: false,
    timer:1500,
    timerProgressBar:true
});

console.log("asu mecha 2")

input.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        //console.log(input.value);
        addItem();
    }
    
});

//verificacion de campo

//agregar elementos a la lista;
//declaracion de funcion como si le hubiera puesto function por eso no lleva var,let, const
//las funciones son declarativas o expresivas, arrow function es solo una forma de sintaxis para declarar
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//https://platzi.com/clases/1814-basico-javascript/26295-cuando-utilizar-una-funcion-declarativa-y-una-expr/#:~:text=Funciones%20declarativas%20%3D%20son%20asignadas%20a,no%20pueden%20ser%20llamadas%20antes.&text=%C2%BFQU%C3%89%20ES%20EL%20HOISTING%20en%20JAVASCRIPT%3F,-saludos%20%F0%9F%98%83&text=El%20c%C3%B3digo%20si%20lo%20ejecuta.
//https://escuelavue.es/cursos/javascript-moderno/arrow-functions-funciones-flecha-que-son/
addItem = async () => {

    if((input.value === "") || (input.value.length === 0)){
        await Toast.fire({
            icon:'info',
            title:'Introduce un valor'
        })
        return;
    }
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");

    item.className = "item";
    text.textContent = input.value;

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";

    //se agrega el evento para marcar el check como activo
    checkIcon.addEventListener("click",()=>{
        checkIcon.style.color = "limegreen";
    });

    div.appendChild(checkIcon);

    //bote de basura
    trashIcon.className = "fas fa-trash"
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", ()=>{
        item.remove();
    });

    div.appendChild(trashIcon);

    item.appendChild(text);
    item.appendChild(div);

    toDoItems.appendChild(item);
    input.value = "";
}

