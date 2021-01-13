import React from 'react';
import { Collapse } from 'reactstrap';

class FaqQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
  }
  toggle = () => {
    this.setState((prevState) => ({
      collapse: !prevState.collapse,
    }));
  };
  render() {
    const { question, answer } = this.props;
    const { collapse } = this.state;
    return (
      <>
        <div className="item">
          {/* eslint-disable */}
          <div
            className={`question ${collapse ? "active" : ""}`}
            onClick={this.toggle}
          >
            <a>{question}</a>
            <a className="expand-sign">+</a>
          </div>
          {/* eslint-enable */}
          <Collapse isOpen={collapse}>
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
