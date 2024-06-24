alert("Hi this is karthi owner of the company wlecomes you !!");
const f = React.createElement("div", { className: "heading" }, [
  React.createElement("h2", { id: "heading2" }, "Welcomes you all"),
  React.createElement("h3", { id:"tit3"}, "karpavai katrapin"),
]);
console.log(f);
const r = ReactDOM.createRoot(document.getElementById("namma"));
r.render(f);
console.log(r);
