// EXECUTAR DIRETO()

//COMPARAR A HORA DE CADA LINHA DA TABELA COM HORARIO ATUAL

var time = moment().format('hh A');

var hours = document.querySelectorAll(".hour");  

// fazer um for varrendo a variavel hours pra comparar o conteudo 
//da linha com a variavel time
//dependendo da comparacao, selecionar classe  past, present ou future


// funcao  para clickar no botao e salvar no local storage

var taskTime = document.querySelectorAll('hour');
var taskDescription = document.querySelectorAll('description');
var saveButton = document.querySelector('saveBtn');

saveTask();


function saveTask(){

saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var savedTasks = {
        taskTime : taskTime.value,
        taskDescription : taskDescription.value
    }

    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));

})
};


