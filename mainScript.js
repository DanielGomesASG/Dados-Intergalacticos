const x = prompt("Olá, seja bem vindo ao Dados Intergalácticos!\n\nAgora, insira um id entre 1 e 82, para encontrar os dados da pessoa que deseja.")
const y = prompt("Muito bem!\n\nAgora insira um id entre 1 e 60, para encontrar os dados do planeta que deseja.")
const z = prompt("Estamos quase lá!\n\nAgora insira um id entre 1 e 36, para encontrar os dados da nave que deseja.")
alert("Analisando as informações interplanetárias da pessoa...\n\nAnalisando o mapa intergaláctico dos planetas...\n\nAvaliando as naves disponíveis no estoque...\n\nProcesso finalizado. Clique em OK e acesse os dados que conseguimos encontrar no console! :D")

const url = "https://swapi.dev/api/"
function tratar(xhr, texto) {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText)
    console.log(`Estes são os dados de ${texto}:`, response, "\n\n...")
    return response
  } else {
    console.log(`Infelizmente os dados de ${texto} estão fora do ar no momento, sorry! :/\n\n...`)
  }
} 


const loadPerson = (x) => {
  const xhr = new XMLHttpRequest()

  xhr.open("GET", `${url}people/${x}`)
  xhr.send(null)
  xhr.onreadystatechange = () => {
    xhr.readyState === 4 ? tratar(xhr, "pessoa") : null
  }
}

const loadPlanet = (y) => {
  const xhr = new XMLHttpRequest()

  xhr.open("GET", `${url}planets/${y}`)
  xhr.send(null)
  xhr.onreadystatechange = () => {
    xhr.readyState === 4 ? tratar(xhr, "planeta") : null
  }
}

const loadShip = (z) => {
  const xhr = new XMLHttpRequest()

  xhr.open("GET", `${url}starships/${z}`)
  xhr.send(null)
  xhr.onreadystatechange = () => {
    xhr.readyState === 4 ? tratar(xhr, "nave") : null
  }
}

loadPerson(x)
loadPlanet(y)
loadShip(z)