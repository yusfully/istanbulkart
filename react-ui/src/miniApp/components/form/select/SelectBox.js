import React, { createRef } from "react";
import Button from "../../buttons/Button";
import { TweenMax,Linear } from "gsap/all";
import Portal from "../../pager/Portal";

class BoxSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
      focusedValue: -1,
      isFocused: false,
      isOpen: false,
      isAnimate: false,
      typed: "",
      id: props.id,
    };
    this.animatedWrapper = createRef();
    this.animatedMainWrapper = createRef();
  }
componentDidMount(){
  if(this.props.selectedDefault){
   
    
    const { options, multiple } = this.props;


    this.setState((prevState) => {
      const { values } = prevState;

      if (multiple) {
        return {
          focusedValue: -1,
          isFocused: false,
          isOpen: false,
        };
      } else {
        const value = options[this.props.selectedDefault];

        let focusedValue = -1;

        if (value) {
          focusedValue = options.findIndex((option) => option.value === value);
        }

        return {
          values:[value.value],
          focusedValue:this.props.selectedDefault,
          isFocused: false,
          isOpen: false,
        };
      }
    });
    
  }
 
}
 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.values !== this.state.values) {
      this.props.onSelect(
        this.state.id,
        this.props.multiple
          ? this.state.values.map((value) => {
              return value.split(" ").join("_").toLowerCase();
            })
          : this.state.values[0].split(" ").join("_").toLowerCase()
      );
    }

    if (prevState.isOpen !== this.state.isOpen) {
      this.state.isOpen
        ? this.setState((prevState) => ({
            ...prevState,
            isAnimate: true,
          }))
        : this.props.modal ?  this.slide() : this.grow();
    }
    if (prevState.isAnimate !== this.state.isAnimate) {
      this.state.isAnimate && this.props.modal ?  this.slide() : this.grow();
    }
  }
  onFocus = () => {
    this.setState({
      isFocused: true,
    });
  };

  slide = () => {
    var _this = this;
    if (this.state.isOpen) {
      TweenMax.to(this.animatedWrapper.current, 0.15, { y: 0 });
    } else {
      TweenMax.to(this.animatedWrapper.current, 0.25, {
        y: "100%",
        onComplete: function () {
          _this.setState((prevState) => ({
            ...prevState,
            isAnimate: false,
          }));
        },
      });
    }
  };

  grow = () => {
    var _this = this;
    let height
    if(this.animatedWrapper.current && this.animatedMainWrapper.current){
    height=this.animatedWrapper.current.offsetHeight
    
    

    if (this.state.isOpen) {
      TweenMax.to(this.animatedMainWrapper.current, 0.25, { height: height, ease: Linear.easeOut, });
    } else {
      TweenMax.to(this.animatedMainWrapper.current, 0.25, {
        height: 0,
        onComplete: function () {
          _this.setState((prevState) => ({
            ...prevState,
            isAnimate: false,
          }));
        },
      });
    }}
  };

  onBlur = (e) => {
    e.preventDefault();

    const { options, multiple } = this.props;

    this.setState((prevState) => {
      const { values } = prevState;

      if (multiple) {
        return {
          focusedValue: -1,
          isFocused: false,
          isOpen: false,
        };
      } else {
        const value = values[0];

        let focusedValue = -1;

        if (value) {
          focusedValue = options.findIndex((option) => option.value === value);
        }

        return {
          focusedValue,
          isFocused: false,
          isOpen: false,
        };
      }
    });
  };

  onKeyDown = (e) => {
    var _this = this;
    const { options, multiple } = _this.props;
    const { isOpen } = _this.state;

    switch (e.key) {
      case " ":
        e.preventDefault();
        if (isOpen) {
          if (multiple) {
            _this.setState((prevState) => {
              const { focusedValue } = prevState;

              if (focusedValue !== -1) {
                const [...values] = prevState.values;
                const value = options[focusedValue].value;
                const index = values.indexOf(value);

                if (index === -1) {
                  values.push(value);
                } else {
                  values.splice(index, 1);
                }

                return { values };
              }
            });
          }
        } else {
          _this.setState({
            isOpen: true,
          });
        }
        break;
      case "Escape":
      case "Tab":
        if (isOpen) {
          e.preventDefault();
          _this.setState({
            isOpen: false,
          });
        }
        break;
      case "Enter":
        _this.setState((prevState) => ({
          isOpen: !prevState.isOpen,
        }));
        break;
      case "ArrowDown":
        e.preventDefault();
        _this.setState((prevState) => {
          let { focusedValue } = prevState;

          if (focusedValue < options.length - 1) {
            focusedValue++;

            if (multiple) {
              return {
                focusedValue,
              };
            } else {
              return {
                values: [options[focusedValue].value],
                focusedValue,
              };
            }
          }
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        _this.setState((prevState) => {
          let { focusedValue } = prevState;

          if (focusedValue > 0) {
            focusedValue--;

            if (multiple) {
              return {
                focusedValue,
              };
            } else {
              return {
                values: [options[focusedValue].value],
                focusedValue,
              };
            }
          }
        });
        break;
      default:
        if (/^[a-z0-9]$/i.test(e.key)) {
          const char = e.key;

          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(() => {
            _this.setState({
              typed: "",
            });
          }, 1000);

          _this.setState((prevState) => {
            const typed = prevState.typed + char;
            const re = new RegExp(`^${typed}`, "i");
            const index = options.findIndex((option) => re.test(option.value));

            if (index === -1) {
              return {
                typed,
              };
            }

            if (multiple) {
              return {
                focusedValue: index,
                typed,
              };
            } else {
              return {
                values: [options[index].value],
                focusedValue: index,
                typed,
              };
            }
          });
        }
        break;
    }
  };

  onClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  onDeleteOption = (e) => {
    const { value } = e.currentTarget.dataset;

    this.setState((prevState) => {
      const [...values] = prevState.values;
      const index = values.indexOf(value);

      values.splice(index, 1);

      return { values };
    });
  };

  onHoverOption = (e) => {
    const { options } = this.props;

    const { value } = e.currentTarget.dataset;
    const index = options.findIndex((option) => option.value === value);

    this.setState({
      focusedValue: index,
    });
  };

  onClickOption = (e) => {
    const { multiple, max } = this.props;

    if (multiple && !this.state.isOpen) return;

    const { value } = e.currentTarget.dataset;

    if (
      multiple &&
      this.state.values.length > max - 1 &&
      this.state.values.indexOf(value) === -1
    ) {
      return;
    }

    this.setState((prevState) => {
      if (!multiple) {
        return {
          values: [value],
          isOpen: false,
        };
      }

      const [...values] = prevState.values;
      const index = values.indexOf(value);

      if (index === -1) {
        values.push(value);
      } else {
        values.splice(index, 1);
      }

      return { values };
    });
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  renderValues = () => {
    const { placeholder, multiple } = this.props;
    const { values } = this.state;

    if (values.length === 0 && !this.props.selectedDefault) {
      return <div className="placeholder">{placeholder}</div>;
    }

    if (multiple) {
      return values.map((value) => {
        return (
          <span
            key={value}
            onClick={this.stopPropagation}
            className="multiple value"
          >
            {value}
            <span
              data-value={value}
              onClick={this.onDeleteOption}
              className="delete"
            >
              <X />
            </span>
          </span>
        );
      });
    }

    return <div className="value">{values[0]}</div>;
  };

 

  renderOptions = () => {
    const { options,modal } = this.props;
    


    return (
      
        <div ref={this.animatedMainWrapper} className={`options ${modal ? "modal" : "drop-down"}`}>
          <div ref={this.animatedWrapper} className={`down`}>
            {options.map(this.renderOption)}
            <div class="bottom-bar">
              {this.props.multiple && (
                <Button
                  text="Seçimi kabul et"
                  ripple
                  type="button"
                  arrow
                  size="block"
                  hoverStyle={{
                    backgrounColor: "#333",
                  }}
                  onClick={(e) => this.onBlur(e)}
                  addClass="fixed-btn"
                  icon={{
                    fontIcon: "font-icon icon-search",
                  }}
                  uiStyle="border"
                />
              )}
            </div>
          </div>
        </div>
     
    );
  };
 renderType=()=>{
    const {  modal } = this.props;
    const { isAnimate, isOpen } = this.state;
    if (!isOpen) {
      if (isAnimate) {
      } else {
        return null;
      }
    }
    if(modal){
      return <Portal id="selectbox">
     { this.renderOptions()}
      </Portal>
    }else{
     return this.renderOptions()
    
    }
  }
  renderOption = (option, index) => {
    const { multiple } = this.props;
    const { values, focusedValue } = this.state;

    const { value, img, font } = option;

    const selected = values.includes(value);

    let className = "option";
    if (selected) className += " selected";
    if (index === focusedValue) className += " focused";

    return (
      <div
        key={value}
        data-value={value}
        className={className}
        onMouseOver={this.onHoverOption}
        onClick={this.onClickOption}
      >
        {font ? (
          <div className="select-icon ">
            <i className={`${font}`} />
          </div>
        ) : img ? (
          <div className="select-icon circle">
            <img src={`${img}`} />
          </div>
        ) : <span className="checkbox">{selected ? <Check /> : null}</span>
        }
        <div className="select-value">{value}</div>
      </div>
    );
  };

  render() {
    const { label } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        id={this.state.id}
        className={`select ${this.props.pos ? this.props.pos : ""}`}
        tabIndex="0"
        onClick={this.props.onClick}
        onFocus={this.onFocus}
        onKeyDown={this.onKeyDown}
        onBblur={this.onBlur}
      >
        <div className="selection" onClick={this.onClick}>
          {this.renderValues()}
          <span className="arrow">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        {this.renderType()}
      </div>
    );
  }
}

export default BoxSelect;

const ChevronDown = () => (
  <svg viewBox="0 0 10 7">
    <path
      d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z"
      transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) "
    />
  </svg>
);

const ChevronUp = () => (
  <svg viewBox="0 0 10 8">
    <path
      d="M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z"
      transform="translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) "
    />
  </svg>
);

const X = () => (
  <svg viewBox="0 0 16 16">
    <path d="M2 .594l-1.406 1.406.688.719 5.281 5.281-5.281 5.281-.688.719 1.406 1.406.719-.688 5.281-5.281 5.281 5.281.719.688 1.406-1.406-.688-.719-5.281-5.281 5.281-5.281.688-.719-1.406-1.406-.719.688-5.281 5.281-5.281-5.281-.719-.688z" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 16 16">
    <path
      d="M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z"
      transform="translate(0 1)"
    />
  </svg>
);
