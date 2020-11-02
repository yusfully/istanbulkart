import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
class ModalBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      overheight: false,
    };
    this.modal = React.createRef();
  }

  handleChilds = () => {};
  handleClick = (e) => {
    this.props.history.goBack();
  };

  renderChildren(children) {
    return React.Children.map(children, (child) => {
      return child;
    });
  }
  onFormSubmit = () => {};
  componentWillUnmount() {
    this.props.mounted(true);
  }
  componentWillMount() {
    this.props.mounted(false);
  }
  componentWillReceiveProps(prevProps, prevState) {
    if (prevProps.animate !== this.props.animate) {
      this.setState({
        animate: this.props.animate,
      });
    }
  }
  componentDidUpdate() {}
  componentDidMount() {
    if (this.modal.current.offsetHeight >= window.innerHeight) {
      this.setState({
        overheight: true,
      });
    }
    this.state.animate = true;
  }
  mounted() {}
  render() {
    return (
      <Fragment>
        <div
          className={`modal-align  ${
            this.state.overheight ? "overheight" : ""
          }`}
        >
          <div
            ref={this.modal}
            className={`modal ${this.props.props.animation} ${
              this.state.animate ? "animate" : ""
            } `}
          >
            <div className="card">{this.props.props.children}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(ModalBody);
