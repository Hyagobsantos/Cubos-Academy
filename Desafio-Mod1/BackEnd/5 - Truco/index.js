const cartas = [
    {
       vira:"Q",
       manilha: "J"
    },
    {
        vira:"J",
        manilha: "K"
     },
     {
        vira:"K",
        manilha: "A"
     },
     {
        vira:"A",
        manilha: "2"
     },
     {
        vira:"2",
        manilha: "3"
     },
     {
        vira:"3",
        manilha: "Q"
     },

]

function solucao(carta) {
    //seu codigo aqui
    const manilha = cartas.find(x => x.vira === carta.toUpperCase()).manilha;
    console.log(manilha)
}


let carta = "Q"
solucao(carta);