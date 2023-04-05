
let listaDeProdutos = [];



function buscarCategorias(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(dados => {
        lista = listaDeProdutos;
        dados.forEach(cada => {
            categorias.innerHTML += `   
                <li class="list-group-item">
                    <h6>
                        <input name="${cada.replace(" ", "-")}" type="checkbox" onClick="filtro()">
                        <span>${cada}</span>
                    </h6>
                </li>`
        })
    })
}buscarCategorias();


function buscarProdutos(){
    fetch("https://fakestoreapi.com/products?limit=15")
    .then(res => res.json())
    .then(dados => {
        dados.forEach(cada => {
            products.innerHTML += `
            <li class="${cada.category.replace(" ", "-")}">
                <div class="card">
                    <picture>
                        <img src="${cada.image}" alt="${cada.title}" class="card-img-top">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title" title="${cada.title}">${cada.title}</h5>
                        <div class="badge bg-secondary mb-2">${cada.category}</div>
                        <p class="card-text text-warp">${cada.description}</p>
                        <h6 class="card-text"> $${cada.price} <h6>
                        <a href="" class="btn btn-primary">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </li>`
        })
    })
}buscarProdutos();

function filtro(){
    let inputs = document.querySelectorAll("input:checked")
    let inputs_nomes = [];
    for(let i = 0; i < inputs.length; i++){
        inputs_nomes.push(inputs[i].name);
    }

    console.log(inputs_nomes)

    let lis = document.querySelectorAll("#products li");
    for(let i = 0; i < lis.length; i++){
        if(!lis[i].classList.contains(inputs_nomes.toString())){
            lis[i].style.display = 'none'
        } else {
            lis[i].style.display = 'block'
        }
        
        if(0 === inputs_nomes.length){
            lis[i].style.display = 'block'
        }

        if( inputs_nomes.length >= 2){
            if(!lis[i].classList.contains(inputs_nomes.toString())){
                lis[i].style.display = 'block'
            }
        }
    }
}
