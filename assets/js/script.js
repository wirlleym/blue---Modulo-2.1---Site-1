const elementoPraia = document.querySelector('#container-praia'); 
const elementoImagem = document.querySelector('#container-imagem'); 
const elementoTexto = document.querySelector('#container-texto'); 
const elementoMapa = document.querySelector('#container-mapa');
const elementoBtn = document.querySelector('#btn')

const lista = ["./assets/img/top 2 sao miguel dos milagres.jpg", "./top 3 praia do gunga.jpg"]


elementoBtn.addEventListener('click', () =>{

    if(elementoBtn.value == 'click-1'){
        elementoPraia.innerText = "Praia São miguel dos milagres"
        elementoImagem.src = "./assets/img/top 2 sao miguel dos milagres.jpg" 
        elementoTexto.innerText = "Cidade praiana localizada na região da Costa dos Corais, no litoral de Alagoas, São Miguel dos Milagres é conhecida por suas praias paradisíacas e piscinas naturais. Não é por menos que virou uma das rotas turísticas requisitadas por quem visita o nordeste brasileiro. Praias de águas cristalinas e com pousadas à beira-mar fazem parte da chamada Rota Ecológica de Milagres. Com cerca de 30 quilômetros de extensão, os cenários desertos têm diversas paisagens naturais." 
        elementoMapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7875.440336706207!2d-35.37178782573599!3d-9.269278723417562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700fd3fdff96647%3A0x8c6caacf41c2fd49!2sPraia%20de%20S%C3%A3o%20Miguel%20dos%20Milagres!5e0!3m2!1spt-BR!2sbr!4v1650336980288!5m2!1spt-BR!2sbr"
        elementoBtn.value = 'click-2'
    } else if(elementoBtn.value == 'click-2') { 
        elementoPraia.innerText = "Praia do Gunga"
        elementoImagem.src = "./assets/img/top 3 praia do gunga.jpg"  
        elementoTexto.innerText = "De um lado, um extenso pontal de areia branca às margens da Lagoa do Roteiro, com águas calminhas. Do outro, uma sequencia de coqueirais a perder de vista, mar aberto e falésias coloridas apreciadas em passeios de buggy. O 'conjunto da obra' faz da praia do Gunga um dos cartões-postais de Alagoas. Além da paisagem perfeita, oferece piscinas naturais, estrutura de lazer (aluguel de equipamentos náuticos), bares, restaurantes e lojas de artesanato. Um mirante, na entrada que dá acesso à praia, descortina vista panorâmica da região. "
        elementoMapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62888.17223485468!2d-35.968321801324805!3d-9.891349038913434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70400b73e7c37bd%3A0x9caa99fa890d9a91!2sPraia%20do%20Gunga!5e0!3m2!1spt-BR!2sbr!4v1650338056174!5m2!1spt-BR!2sbr" 
        elementoBtn.value = 'click-3'  
    } else { 
        elementoPraia.innerText = "Praia de Antunes maragogi"
        elementoImagem.src = "./assets/img/top 1 antunes maragogi.jpg"  
        elementoTexto.innerText = "A praia de Antunes, que fica entre as praias de Barra Grande e Dourado, está localizada no litoral de Maragogi, e é nacionalmente famosa por suas piscinas de água azul, um cenário lindo e único. Vale destacar que uma das principais características da praia de Antunes, são os bancos de areia, que se formam durante a maré baixa. Nestes momentos, é possível caminhar mar adentro. "
        elementoMapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31527.676366899505!2d-35.199232644303734!3d-8.975869832453538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7006148e80e7f8f%3A0x830abb9484bfa222!2sPraia%20de%20Antunes!5e0!3m2!1spt-BR!2sbr!4v1650309342555!5m2!1spt-BR!2sbr"
        elementoBtn.value = 'click-1' 
    }
})