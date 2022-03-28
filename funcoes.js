function PlayPause(){
  let imagem= document.querySelector("#controle-musica")
  let musica= document.querySelector("#musica")
  
  if(musica.paused){
   musica.play()
   imagem.src="imagens/pause.png"
   document.querySelector("#rotulo").innertext ="clique aqui para pausar"
  }else{
   musica.pause()
   imagem.src="imagens/play.png"
   document.querySelector("#rotulo").innertext ="clique aqui para ouvir."
  }
}