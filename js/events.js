// //Funcao para modificar o conteudo do texto do paragrafo
// const changeText = () => {
//   const p = document.querySelector("p");
//   p.textContent =
//     "Eu mudei por causa da propriedade de um manipulador de eventos";
// };

// //Evento manipulador adicionado como uma propriedade
// const button = document.querySelector("button");
// button.onclick = changeText;

// //const button = document.querySelector("button");
// //const p = document.querySelector("p");
// //const changeText = () =>
// //  p.textContent = "Will I change?";
// //};
// //const alertText = () => {
// //  alert("Will I alert?");
// //};
// // Events can be overwritten
// //button.onclick = changeText;
// //button.onclick = alertText;

// // //// Function to modify the text content of the paragraph
// // //const changeText = () => {
// // //  const p = document.querySelector("p");
// // //  p.textContent = "Eu mudei por causa de um Ouvidor de eventos.";
// // //};
// // //// Listen for click event
// // //const button = document.querySelector("button");
// // //button.addEventListener("click", changeText);

const p = document.querySelector("p");
const button = document.querySelector("button");
const changeText = () => {
  p.textContent = "Eu mudarei?";
};
const alertText = () => {
  alert("Eu alertarei?");
};
// Multiple listeners can be added to the same event and element
button.addEventListener("click", changeText);
button.addEventListener("click", alertText);
