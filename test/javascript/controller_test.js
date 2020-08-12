import { Application, Controller } from "stimulus";

class SimpleController extends Controller {
  static targets = ['input', 'output']

  copy() {
    this.targets.find('output').value = this.targets.find('input').value
  }
}

describe('SimpleController', () => {
  describe('#copy', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div data-controller="simple">
          <input id="input" data-target="simple.input" />
          <input id="output" data-target="simple.output" />
          <button id="button" data-action="simple#copy" />
        </div>
      `
      const application = Application.start()
      application.register('simple', SimpleController)
    })

    it("copies input to output", () => {
      const input = document.getElementById("input")
      const output = document.getElementById("output")
      const button = document.getElementById("button")

      input.value = 'foo'
      output.value = 'bar'

      expect(output.value).toEqual('bar')
      button.click()
      expect(output.value).toEqual('foo')
    })
  })
})