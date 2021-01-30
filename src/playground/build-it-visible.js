class VisiblitiyToggle extends React.Component {
  constructor(props) {
    super(props);
    this.changeVis = this.changeVis.bind(this);
    this.state = {
      visibility: false,
    };
  }
  changeVis() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.changeVis}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey, these are the droids you are looking for.</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisiblitiyToggle />, document.getElementById("app"));
