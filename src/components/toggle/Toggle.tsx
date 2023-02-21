export function Toggle() {
  const toggleMode = (): void => {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
      img?.setAttribute("src", "./src/assets/icon/avatar-light.png");
    } else {
      img?.setAttribute("src", "./src/assets/icon/avatar.png");
    }
  };
  return (
    <div id="switch" onClick={toggleMode}>
      <button></button>
      <span></span>
    </div>
  );
}
