// const add = (a, b) => {
//   console.log(a + b);
// };

// const minus = (a, b) => {
//   console.log(a - b);
// };

// export { add, minus };

export default function handClick() {
  const element = document.createElement("div");
  element.innerHTML = "hello ping";
  document.body.appendChild(element);
}
