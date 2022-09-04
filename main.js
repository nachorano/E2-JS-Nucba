const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
    },
  ];

//Elementos a traer
const addForm = document.querySelector('#add-form');
const btnSend = document.querySelector('.btn-send');
const inputId = document.querySelector('.input-id');
const resultRender = document.querySelector('.container-result');


const addResult = e => {
    e.preventDefault();
    const valueInput = inputId.value.trim();
    inputId.value = '';

    if (!valueInput.length) return alert('Por favor, ingresa un ID para buscar') ;
    if (valueInput == 0) {
        alert("El Id debe ser distinto de Cero");
        return ;
    }

    if(Math.sign(valueInput)=== -1){
        alert("el numero no puede ser negativo");
        return; 
    }

    if (valueInput <= pizzas.length){
        const search = pizzas.filter((pizza) => pizza.id == valueInput);
        search.forEach((pizza) =>
        
        resultRender.innerHTML = `  <div class="result">
                                    <i class="icon-result fa-solid fa-pizza-slice"></i><h2>${pizza.nombre} 
                                    <h4>$ ${pizza.precio}</h4>
                                    </div>`);
                                    
        return;
    }else{
        resultRender.innerHTML = `<small>El ID ingresado no existe</small>`;
        return;
    }

}



const init = () => {
    addForm.addEventListener('submit', addResult);
};

init();