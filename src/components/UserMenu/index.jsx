import React, {Component} from 'react';
import {Button, Col, Menu, Row} from 'antd';
import 'antd/dist/antd.css';
import {DesktopOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {LoginForm} from "../LoginForm";
import {UserCenter} from "../UserCenter";

import Title from "antd/es/typography/Title";
import {ParkingList} from "../ParkingList";
const {SubMenu} = Menu

export class UserMenu extends Component {


    state = {
        collapsed: false,
        routerComponent:<Title>
            欢迎来到停车场用户系统
        </Title>
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    showChange = (target)=>{

       // console.log(this.props.location.state)
        if(target.key==='1'){

            this.setState({
                routerComponent:<UserCenter userName={this.props.location.state.userName}/>
            })
        }else if(target.key==='2'){
            this.setState({
                routerComponent:<ParkingList />
            })
        }else if(target.key==='3'){
            this.setState({
                routerComponent:<></>
            })
        }
    }
    render() {

      //  console.log(this.state.routerComponent)
   //     console.log(this.props.location.state)
        return (
            <div>
                <Row justify="center">
                    <Col style={{height: '100px'}}>
                        <Title  style={{marginTop: '100px'}}> 停车场系统用户中心</Title>
                    </Col>
                </Row>
                <Row justify="start" style={{marginTop: '100px', height: '500px'}}>
                    <Col offset={2} span={4}  style={{backgroundColor:'blue'}}>
                        <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                        </Button>
                        <Menu defaultSelectedKeys={['1']}
                              defaultOpenKeys={['sub1']}
                              mode="inline"
                              theme="dark"
                              inlineCollapsed={this.state.collapsed}>

                            <Menu.Item onClick={this.showChange} key="1" icon={<DesktopOutlined/>}>个人中心</Menu.Item>
                            <Menu.Item onClick={this.showChange} key="2" icon={<DesktopOutlined/>}>车位情况</Menu.Item>
                            <Menu.Item onClick={this.showChange} key="3" icon={<DesktopOutlined/>}>我的车位</Menu.Item>

                        </Menu>
                    </Col>
                    <Col span={12}  style={{backgroundColor:'white'}} >
                        {this.state.routerComponent}
                    </Col>
                </Row>


            </div>
        );
    }
}
