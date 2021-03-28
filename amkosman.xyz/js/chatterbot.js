(function () {

  //let main = document.getElementById("index-banner");
  let button = document.createElement("BUTTON");
  button.innerHTML = "chat";
  const style = {
    position: "fixed",
    backgroundColor: "rgb(19, 65, 213)",
    boxShadow: "0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)",
    letterSpacing: ".5px",
    borderRadius: "2px",
    height: "36px",
    zIndex: "10",
    lineHeight: "1px",
    padding: "0 16px",
    textTransform: "uppercase",
    textAlign: "center",
    color: "white",
    padding: "16px 20px",
    border: "none",
    cursor: "pointer",
    bottom: "50px",
    right: "50px",
    width: "90px",
  };

  Object.assign(button.style, style);
  document.body.appendChild(button)
  console.log(button)
  console.log("finished")

})();
