import { Collapse } from "reactstrap";
import React from "react";
class FaqQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }
  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };
  render() {
    const { question, answer } = this.props;
    return (
      <>
        <div className="item">
          <div
            className={`question ${this.state.collapse ? "active" : ""}`}
            onClick={this.toggle}
          >
            <a>{question}</a>
            <a className="expand-sign">+</a>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <div className="answer">
              <p>{answer}</p>
            </div>
          </Collapse>
        </div>
        <style jsx>{`
          .item {
            border-bottom: 1px solid #e9ecef;
          }
          .question {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
            min-height: 75px;
            font-size: 20px;
            font-weight: 400;
            text-transform: none;
            color: black;
            cursor: pointer;
            outline-width: 0px;
            margin: 0px;
          }
          .active {
            color: #155da1;
          }
          .expand-sign {
            float: right;
            padding-right: 10px;
          }
          .answer {
            margin: 0 10px;
            color: #666b72;
          }
        `}</style>
      </>
    );
  }
}

export default FaqQuestion;
