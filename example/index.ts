import { convert } from 'the-proxy-client';

const iframe = document.querySelector('iframe') as HTMLIFrameElement
const input = document.querySelector('input') as HTMLInputElement
const button = document.querySelector('button') as HTMLButtonElement
const message = document.querySelector('#message') as HTMLDivElement

input.setAttribute('placeholder', 'https://www.example.com')
input.value = 'https://www.example.com'

const go = () => {
  try {
    const _ = new URL(input.value)
  } catch (e) {
    message.innerText = `Error parsing URL: ${e}`
    return
  }

  const { url, error } = convert.ToProxiedURL(input.value)
  if (error) {
    message.innerText = `Error converting URL: ${error}`
    return
  }

  message.innerText = `Navigating to: ${url}`
  iframe.src = url!
}

input.onkeydown = (e) => {
  if (e.key === 'Enter') {
    go()
  }
}
button.onclick = go
