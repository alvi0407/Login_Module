/*
For creating the tab pane like structure and then callinfg the Guest and Admin component
*/

import Tabs, { TabPane } from "rc-tabs";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Guest from "./Guest";
import Admin from "./Admin";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

class TabHeading extends Component {
  constructor(props) {
    super(props);

    this.state={
      data2 : this.props.dataFromSignUp
    };
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange(e) {
    console.log(this.e.key);
  }

  render() {
    return (
      <div className="tab-heading">
        <div className="tabs">
          <Row className="justify-content-md-center">
            <Col sm={4}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Guest" key="1" onChange={this.handleChange}>
                  <Guest dataFromTabHeading = {this.state.data2}/>
                </TabPane>
                <TabPane tab="Admin" key="2" onChange={this.handleChange}>
                  <Admin dataFromTabHeading = {this.state.data2}/>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TabHeading;
