function criaCartao(categoria,pergunta,resposta){
  let conteiner = document.getElementById('container')
  let article = document.createElement('article')
  article.className = 'cartao'
  article.innerHTML = `
 <div class="cartao-conteudo">
  <h3> ${ categoria} </h3>
  <div class="cartao-conteudo-pergunta"> 
  <p> ${pergunta} </p>
  </div>
  <div class="cartao-conteudo-resposta">
    <p> ${resposta}</p>
  </div>
  </div>
  `
  conteiner.appendChild(article)
}

criaCartao('Biologia','Qual a funçao da mitocondria?','Produçao de energia')
criaCartao('Strapazzon', 'Qual nome do namorado da Strapazzon?', 'Joao Rafael')