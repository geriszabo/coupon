

const container = document.querySelector(".container")
const ticket = document.querySelector(".ticket")

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    ticket.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  })