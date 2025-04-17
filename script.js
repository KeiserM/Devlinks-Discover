function toggleMode() {
    //a variavel html que e com o mesmo de onde tem a class ligh no nosso documento htm
    //documentElemnt e a reprensentacao do nosso documento HTML em formato de objecto javaScript
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img 
    const img = document.querySelector("#profile img")

    //substituir a imagem 
    if (html.classList.contains('light')) {
        //se estiver light mode, adcionar  a imagem light , e nao manter a imagem normal
        img.setAttribute('src', './assets/Ellipse.jpg')
    } else{
        img.setAttribute('src', './assets/avatar.jpg')
    }

}