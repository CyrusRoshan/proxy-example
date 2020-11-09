import { frame } from 'the-proxy-client';

const iframe = document.querySelector('iframe') as HTMLIFrameElement
const input = document.querySelector('input') as HTMLInputElement
const button = document.querySelector('button') as HTMLButtonElement
const message = document.querySelector('#message') as HTMLDivElement

input.setAttribute('placeholder', 'https://www.example.com')
input.value = 'https://www.example.com'

const go = async () => {
  // Validate user input
  try {
    const _ = new URL(input.value)
  } catch (e) {
    message.innerText = `Error parsing URL: ${e}`
    return
  }

  // Navigate to the proxied user input
  const proxiedFrame = frame(iframe)
  try {
    proxiedFrame.load(input.value)
  } catch (e) {
    message.innerText = `Error loading site: ${e}`
    return
  }
  message.innerText = `Navigating to: ${input.value}`

  // This will change the color, and verify that it
  // went through, by showing the (stringified) response
  const changeColorInFrame = async () => {
    let output: string
    try {
      // prettier-ignore
      const response = await proxiedFrame.evaluate(`
        const style = document.createElement('style')
        style.innerHTML = \`
          * { background-color: #64a9ff !important; }
        \`
        document.head.appendChild(style)
        return "Everything is blue!"
      `)
      output = 'Evaluation response (stringified): ' + response
    } catch (e) {
      output = 'Evaluation response timed out'
    }
    console.log(output)
    message.innerText = output
  }

  // Inject our color-changing script into the frame
  changeColorInFrame()

  // Changing the iframe src (which `proxiedFrame.load` does)
  // won't take affect immediately, so our previous `changeColorInFrame`
  // will be fired but on the old website.
  //
  // To fix this, we hook in to iframe unloads with `.onUnload`,
  // and when this happens, we re-inject our script and also
  // update the innerText to reflect
  proxiedFrame.onUnload(() => {
    message.innerText = `Navigating to: ${input.value}`
    changeColorInFrame()
  })
}

input.onkeydown = (e) => {
  if (e.key === 'Enter') {
    go()
  }
}
button.onclick = go
