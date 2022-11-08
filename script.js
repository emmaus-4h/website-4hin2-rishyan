var streamingDiensten = ["Netflix", "Amazon Prime", "HBO Plus","ViaPlay","Videoland",'Apple TV+',"Disney+", "Pathé de Kuip",]

var divElement = document.getElementById('diensten');
streamingDiensten.forEach(dienst => {

  if (dienst === "Pathé de Kuip") {
    document.querySelector('#diensten').insertAdjacentHTML('beforeend', `<label class="btn btn-primary" for="btnradio3">${dienst} </label>`)
  } else {
    document.querySelector('#diensten').insertAdjacentHTML('beforeend', `<label class="btn btn-outline-primary" for="btnradio3">${dienst} </label>`)
  }
})
