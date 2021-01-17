import styleCss from './style.css'

/**
 * set style dom
 */
function buildStyle() {
  const style = document.createElement("style")
  style.textContent = styleCss
  document.body.appendChild(style)
}

/**
 * mount event
 * @param {HTMLElement} dom 
 */
function mount(dom) {
  dom.addEventListener("click", e => {
    const {top, left} = dom.getBoundingClientRect()
    const clone = dom.cloneNode()
    clone.classList.add("__ani")
    clone.style.position = "absolute"
    clone.style.top = `${top}px`
    clone.style.left = `${left}px`
    clone.style.zIndex = 9999
    clone.style.pointerEvents = "none"
    document.body.appendChild(clone)
    setTimeout(() => {
      clone.remove()
    }, 1000)
  })
}

export default function flash(dom) {
  buildStyle()

  if(typeof dom === "string") {
    dom = document.querySelector(dom)
    if(!dom) {
      throw new Error("Can't find dom")
    }

    mount(dom)
  }
}