import React from 'react'
import '../styles/Index.scss'

let names = [
  "midrene lamy",
  "nancy johanna villalobos",
  "jessica pintado silva",
  "omololu refilwe Babatunde",
  "seraah dupoux",
  "andrea montesdeoca",
  "wenda-arlene rodriguez",
  "karen garcia",
  "alfonso javier estrada",
  "djino timotis",
  "vianca lugo",
  "prince malcon",
  "cristobal guerra",
  "iyabo babatunde",
  "sandra menendez salgado",
  "fvdge",
  "keijaun thomas",
  "pedro abad gallegos",
  "pao lebron",
  "stefa*",
  "naila “mellow” saphia",
  "sonny martinez",
  "zion ",
  "nitty scott",
  "edua restrepo castaño",
  "domingo castillo",
  "akir stuart",
  "julio lavalle",
  "sofia moreno",
  "oscar diaz",
  "maria ballumbrosio",
  "emiliana castillo"
];

function Index(props) {

  let name = names.map((i, id) => {
    return(
      <div className="name">{i} </div>
    )
  })
  return (
    <div className="index-container">
      <div className="button-container">
        <button id="btn-icon" onClick={props.handleIndex} > 
          <div class="arrow"></div>
        </button>
      </div>

      <h2> gracias</h2>
      {name}
      <div className="web-thanks">
        <h5 className="w-t-item">web itzamna huerta</h5>
        <h5 className="w-t-item">favicon cisne cisneros</h5>
      </div>
    </div>
  )
}

export default Index
