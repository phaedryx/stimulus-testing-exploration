import { Application } from "stimulus"
import HelloController from "HelloController"

const innerHTML = renderErb('welcome/index.html.erb')

describe('HelloController', () => {
  beforeEach(() => {
    document.body.innerHTML = innerHTML
    const application = Application.start()
    application.register('hello', HelloController)
  })

  describe('#greet', () => {
    it("sends a greeting to the user", () => {
      const name = document.querySelector("[data-target='hello.name']")
      const output = document.querySelector("[data-target='hello.output']")
      const button = document.querySelector("[data-action]")
      name.value = 'Bob'

      button.click()
      expect(output.textContent).toEqual('Hello, Bob!')
    })
  })
})