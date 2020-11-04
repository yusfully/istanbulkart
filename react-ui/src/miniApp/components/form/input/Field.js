import React from "react";
import { useFormContext } from "../form/Provider";
import { validate } from "../validation/validate";
import "./field.scss";

class FieldComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      changed: false,
      value: "",
      blured: 0,
      maskComp: null,
      error: null,
      showError: false,
    };
    this.input = React.createRef();
    this.ref = React.createRef();
    this.dispatchForm = this.props.dispatchForm;
    this.stateForm = this.props.stateForm;
    this.id = this.props.id || "input" + Math.random(500) + 1000;
  }

  validation = validate;
  handleChilds = () => {};
  handleClick = (e) => {};

  handleChange = (e) => {
    debugger
let value=e.target.value

console.log(value,this.state)
if(this.props.validation.max && value.length>this.props.validation.max){
  this.input.current.value =this.state.value
  return 

}
    if(this.props.mask ){
     
      if(this.props.mask==="[0-9]" && !value.match(/^[0-9]+$/)){
        this.input.current.value =this.state.value
        return 
      }

    }

    this.setState((prevState) => ({
      ...prevState,
      value: value,
    }));
  };
  handleFocus = (e) => {
    this.props.onFocus && this.props.onFocus(e);
    this.setState((prevState) => ({
      ...prevState,
      focused: true,
    }));
  };
  handleBlur = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      focused: false,
      blured: this.state.blured + 1,
    }));
  };

  renderForm = () => {
    return <input type="text"> </input>;
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      if (!this.props.special) {
       
        this.input.current.value = this.state.value;

        this.props.dispatchForm({
          type: "onSubmit",
          id: this.id,
          value: this.state.value,
        });
      }
    }

    if (this.props.validation) {
      let error = this.validation(this.props.validation, this.state.value);

      if (prevState.error !== error) {
        this.setState((prevState) => ({
          ...prevState,
          error: error,
        }));
      }
    }

    if (prevState.value !== this.state.value) {
      this.setState((prevState) => ({
        ...prevState,
        showError: true,
      }));
    }
    if (
      prevProps.stateForm.isSubmit !== this.props.stateForm.isSubmit &&
      this.props.stateForm.isSubmit === true
    ) {
      this.setState((prevState) => ({
        ...prevState,
        showError: true,
      }));
    }
    if (prevState.error !== this.state.error) {
      if (this.state.error.length > 0) {
        this.props.dispatchForm({
          type: "onError",
          id: this.id,
          error: this.state.error,
        });
      } else {
        this.props.dispatchForm({
          type: "onDeleteError",
          id: this.id,
        });

        this.setState((prevState) => ({
          ...prevState,
          showError: false,
        }));
      }
    }
  }

  render() {
    return (
      <div
        className={`form-block 
        ${
          this.state.showError
            ? this.state.error && this.state.error.length > 0
              ? "error"
              : "success"
            : ""
        }
        ${this.props.uiStyle} 
        ${this.state.focused ? "focused" : ""} ${
          this.state.value.length > 0 ? "filled" : ""
        } ${this.props.className ? this.props.className : ""}`}
      >
        <div
          className={`${
            this.props.icon
              ? this.props.icon.pos
                ? this.props.icon.pos + "-with-icon"
                : "with-icon"
              : ""
          } input-form`}
        >
          {this.props.icon ? (
            <div className="form-icon">
              {(this.props.icon.fontIcon && (
                <i className={`${this.props.icon.fontIcon}`}></i>
              )) ||
                (this.props.icon.src && (
                  <img src={`${this.props.icon.src}`}></img>
                ))}
            </div>
          ) : null}

          <div className="form-content">
           

            {this.state.value.length > 0 && (
              <div
                onTouchEnd={() =>
                  this.setState((prevState) => ({
                    ...prevState,
                    value: "",
                  }))
                }
                className="reset"
              >
                <svg className="reset-icon">
                  <line x1="0" y1="16" x2="16" y2="0" className="line2"></line>
                  <line x1="16" y1="16" x2="0" y2="0" className="line2"></line>
                </svg>
              </div>
            )}
            <div className="label">
              <p>{this.props.label}</p>
            </div>
            {this.props.special ? (
              this.props.children
            ) : (
              <div className="input-cover">
                <input
                  ref={this.input}
                  onChange={(e) => this.handleChange(e)}
                  onFocus={(e) => this.handleFocus(e)}
                  onBlur={(e) => this.handleBlur(e)}
                  type={`${"text"}`}
                  autoComplete="nope"
                  className={`form-input  ${
                    this.state.focused ? this.props.focusClass : ""
                  }`}
                />
              </div>
            )}
          </div>
        </div>
        {this.state.showError ? (
          <div className="error">{this.state.error}</div>
        ) : null}
        {this.props.special ? null : this.props.children}
      </div>
    );
  }
}

export const Field = (props) => {
  const { stateForm, dispatchForm } = useFormContext();
  return (
    <FieldComp
      stateForm={stateForm}
      dispatchForm={dispatchForm}
      {...props}
    ></FieldComp>
  );
};
