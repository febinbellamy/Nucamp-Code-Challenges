class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partyType: "birthday",
      entertainment: "clowns",
      food: "donuts",
      venue: {
        name: "Polly's Party Palace",
        capacity: 120,
      },
    };
  }

  render() {
    return (
      <div>
        <Party
          partyType={this.state.partyType}
          entertainment={this.state.entertainment}
          state={this.state.venue}
          food={this.state.food}
          capacity={this.state.venue.capacity}
          venueName={this.state.venue.name}
        ></Party>
      </div>
    );
  }
}

class Party extends React.Component {
  render() {
    return (
      <div>
        <h3>Party Time!</h3>
        <p>
          This {this.props.partyType} will be held at {this.props.venueName}{" "}
          with a maximum capacity of {this.props.capacity}
        </p>
        <p>Featured entertainment: {this.props.entertainment}!</p>
        <p>The first 60 people to arrive will get free {this.props.food}!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
