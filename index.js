const getNum = () => {
  return Math.floor(Math.random() * 10) + 1
}

const gif = 'https://media.giphy.com/media/rypyVNU547qrC/giphy.gif'

class NumbPicker extends React.Component {
  render() {
    const num = getNum()
    let msg
    if (num === 7) {
      msg = (
        <div>
          <h2>CONGRATS, YOU WIN!</h2>
          <img src={gif} alt='' />
        </div>
      )
    } else {
      msg = <p>Sorry, you loose!</p>
    }

    return (
      <div>
        <h1>Your number is: {num}</h1>
        {msg}
      </div>
    )
  }
}

ReactDOM.render(<NumbPicker />, document.getElementById('root'))
