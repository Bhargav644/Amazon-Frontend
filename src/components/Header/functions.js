import "./Header";
const focus = () => {
    const a = document.getElementById("input");
    const b = document.getElementById("icon");
    const c = document.getElementById("here");

    a.classList.add("outline");
    b.classList.add("outline");
    c.classList.add("outline");
};
const blur = () => {
    const a = document.getElementById("input");
    const b = document.getElementById("icon");
    const c = document.getElementById("here");

    a.classList.remove("outline");
    b.classList.remove("outline");
    c.classList.remove("outline");
};
export { blur, focus };
export default focus;