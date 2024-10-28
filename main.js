function criaCartao(categoria,pergunta,resposta){
  let conteiner = document.getElementById('container')
  let article = documnet.createElement('article')
  article.className = 'cartao'
  article.innerHTML = 'isso é um teste'
  conteiner.appendChild(article)
}

criaCartao('biologia','qual a funçao da mitocondria','produçao de energia')