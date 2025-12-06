let boasVindas = document.getElementById('boas-vindas')
let hora = new Date().getHours()
let imagem = document.getElementsByTagName('img')[0]
if ( hora < 6 || hora > 18) {
    imagem.src = 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic2351999-2-min.webp?w=1600&h=1067'
    boasVindas.innerHTML = 'Boa noite'
}

else if (hora <= 12) {
    imagem.src = 'https://i.pinimg.com/736x/fc/df/64/fcdf64ee6b6154582ffabdc06dc61777.jpg'
    boasVindas.innerHTML = 'Bom dia'
}

else {
    imagem.src = 'https://www.shutterstock.com/image-photo/afternoon-sky-glows-rich-golden-260nw-2623806837.jpg'
    boasVindas.innerHTML = 'Boa tarde'
}
