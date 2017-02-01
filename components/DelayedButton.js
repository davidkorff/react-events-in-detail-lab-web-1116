const React = require('react')

class DelayedButton extends React.Component{
  handleClick(event) {
    //event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

    render() {
      return(
          <button onClick={this.handleClick.bind(this)}/>
      )
    }
  }
module.exports = DelayedButton
