import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showCurrentSlide()
  }

  next() {
    this.index++
    if (this.index == this.slideTargets.length) {
      this.index = 0
    }
  }

  previous() {
    this.index--
    if (this.index == -1) {
      this.index = 3
    }
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", this.index == i)
    })
  }

  get index() {
    const index = parseInt(this.data.get("index"))

    if (index) {
      return index
    } else {
      return 0
    }
  }

  set index(value) {
    this.data.set("index", value)
    this.showCurrentSlide()
  }
}