let nome = document.querySelector('#nome');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let btnCalc = document.querySelector('#btn-calc');
let input = document.querySelectorAll('input')


btnCalc.addEventListener('click', () => {
    
    function calculaIMC(altura, peso){
        
        alt = altura * altura
        imc = peso / alt
        console.log(imc)

    }
     
    calculaIMC(altura.value, peso.value)

    if (imc < 18.5) {

        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${nome.value}</th>
        <th>${peso.value}Kg</th>
        <th>${altura.value}m</th>
        <th style="background-color: #FFFF00;" >ABAIXO DO PESO</th>
        <th>${imc}</th>`
        document.querySelector('table').appendChild(tr);
    
        nome.value = ' ';
        peso.value = ' ';
        altura.value = ' ';

    }else if (imc >= 18.5 && imc <= 25){

        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${nome.value}</th>
        <th>${peso.value}Kg</th>
        <th>${altura.value}m</th>
        <th style="background-color: #1E90FF;">PESO NORMAL</th>
        <th>${imc}</th>`
        document.querySelector('table').appendChild(tr);

        nome.value = ' ';
        peso.value = ' ';
        altura.value = ' ';

    }else if ( imc > 25 && imc <= 30) {

        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${nome.value}</th>
        <th>${peso.value}Kg</th>
        <th>${altura.value}m</th>
        <th style="background-color: #FF8C00;" >ACIMA DO PESO</th>
        <th>${imc}</th>`
        document.querySelector('table').appendChild(tr);

        nome.value = ' ';
        peso.value = ' ';
        altura.value = ' ';

    }else if (imc > 30 ){

        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${nome.value}</th>
        <th>${peso.value}Kg</th>
        <th>${altura.value}m</th>
        <th style="background-color: #FF0000;" >OBESIDADE</th>
        <th>${imc}</th>`
        document.querySelector('table').appendChild(tr);

        nome.value = ' ';
        peso.value = ' ';
        altura.value = ' ';

    } else {

        alert('valor inválido')

    }

});
