const x = prompt("Olá, seja bem vindo ao Dados Intergalácticos!\n\nAgora, insira um id entre 1 e 82, para encontrar os dados da pessoa que deseja.")
const y = prompt("Muito bem!\n\nAgora insira um id entre 1 e 60, para encontrar os dados do planeta que deseja.")
const z = prompt("Estamos quase lá!\n\nAgora insira um id entre 1 e 36, para encontrar os dados da nave que deseja.")
alert("Analisando as informações interplanetárias da pessoa...\n\nAnalisando o mapa intergaláctico dos planetas...\n\nAvaliando as naves disponíveis no estoque...\n\nProcesso finalizado. Clique em OK e acesse os dados que conseguimos encontrar no console! :D")

const loadPerson = (x) => {
  const xhr1 = new XMLHttpRequest()

  xhr1.open("GET", "https://swapi.dev/api/people/" + x)
  xhr1.send(null)
  xhr1.onreadystatechange = () => {
    if (x > 0 && x <= 82) {
      if (xhr1.readyState === 4) {
        if (xhr1.status === 200) {
          const person = JSON.parse(xhr1.responseText)
          console.log("Estes são os dados da pessoa:\n", person, "\n\n...")
        } else {
          console.log("Infelizmente os dados dessa pessoa estão fora do ar no momento, sorry! :/\n\n...")
        }
      }
    } else {
      console.log("Id de pessoa inválido! Dados perdidos no vazio do espaço! D:\n\n...")
    }
  }
}

const loadPlanet = (y) => {
  const xhr2 = new XMLHttpRequest()

  xhr2.open("GET", "https://swapi.dev/api/planets/" + y)
  xhr2.send(null)
  xhr2.onreadystatechange = () => {
    if (y > 0 && y <= 60) {
      if (xhr2.readyState === 4) {
        if (xhr2.status === 200) {
          const planet = JSON.parse(xhr2.responseText)
          console.log("Estes são os dados do planeta:\n", planet, "\n\n...")
        } else {
          console.log("Infelizmente os dados desse planeta estão fora do ar no momento, sorry! :/\n\n...")
        }
      }
    } else {
      console.log("Id de planeta inválido! Dados perdidos no vazio do espaço! D:\n\n...")
    }
  }
}

const loadShip = (z) => {
  const xhr3 = new XMLHttpRequest()

  xhr3.open("GET", "https://swapi.dev/api/starships/" + z)
  xhr3.send(null)
  xhr3.onreadystatechange = () => {
    if (z > 0 && z <= 60) {
      if (xhr3.readyState === 4) {
        if (xhr3.status === 200) {
          const ship = JSON.parse(xhr3.responseText)
          console.log("Estes são os dados da nave:\n", ship, "\n\n...")
        } else {
          console.log("Infelizmente os dados dessa nave estão fora do ar no momento, sorry! :/\n\n...")
        }
      }
    } else {
      console.log("Id de planeta inválido! Dados perdidos no vazio do espaço! D:\n\n...")
    }
  }
}

loadPerson(x)
loadPlanet(y)
loadShip(z)