import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://reactjs.org/logo-og.png) center / cover'
                        }}> My portfolio Website</CardTitle>
                        <CardText style={{fontFamily: 'Ubuntu'}}>
                            Portfolio website with React Router v4 and Material design
                    </CardText>
                        <CardActions border>

                            <Button colored href='https://github.com/Raymondpp/Raymondpp.github.io' target="_balank">Github</Button>

                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://static.makeuseof.com/wp-content/uploads/2019/02/c_logo_black.png) center / cover'
                        }}> C# Project - Talent</CardTitle>
                        <CardText style={{fontFamily: 'Ubuntu'}}>
                            This is a cloud-based recruitment platform that matches employers and job-seekers. Employers are able to post
            and manage their profile such as company details, the job details and the specific skills or talents that they are
            looking for. As for the job-seekers, they can post their profile such as personal profile, relevant skills, past work
            experience, Visa status and job status etc.
            </CardText>
                        <CardActions border>

                            <Button colored href='https://github.com/Raymondpp/moduleTwo' target="_balank">Github</Button>

                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'black'
                        }}> An offline game - WarLord </CardTitle>
                        <CardText style={{fontFamily: 'Ubuntu'}}>
                        The overall goal of this project is to design an offline game as a Java application 
                        that takes input from users and responds accordingly,and developing a computer artificial 
                        intelligence (AI)to  play  against  the  user.  The  purpose  of  this  project  is  to  
                        learn  basic  Object-Oriented Programming,  Threadingand  Concurrency,  Graphical  User  
                        Interface  (GUI), Algorithm Development, and Software Project Development. The project is completed in pairs(groups of two).
                    </CardText>
                        <CardActions border>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                {/* Project 1*/}
                <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '176px', background: 'black'
                    }}>Pacman robot</CardTitle>
                    <CardText style={{fontFamily: 'Ubuntu'}}>
                    Undertake the design and construction of a part of a robot.
                    The robot will be multi-wheeled andincorporate an on-board microcontroller which 
                    will be programed to make the robot do complete specific benchmark testsand also to solve 
                    specified goals or tasks. 
                    Design, assemble and test a sensor circuit which will be interfaced to the provided microcontroller. 
                    These circuits will be implemented using printed circuit boards (PCBs) by going through the typical process: analysis, schematic capture,artwork design, circuit 
                    assembly and final testing.The higher level goals of this project is for the robot to traverse 
                    a map, plan suitable paths and travel at a fixed speed.The pacman will gobble up the pellet when it makes contact with the pellet.
                </CardText>
                    <CardActions border>
                    </CardActions>
                </Card>
            </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'black'
                        }}>a simple peer-to-peer social media network</CardTitle>
                        <CardText style={{fontFamily: 'Ubuntu'}}>
                        The overall goal of this project is to design a simple peer-to-peer social media network:
                        1.Allowing a user to log into the system.
                        2.The system can automatically find other users on other computers.
                        3.User can create and maintain a simple profile page.4.Users can send messages, images, audio, and PDFfiles to each other.
                    </CardText>
                        <CardActions border>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 5) {
            return (
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'black'
                        }}> ENGGEN 403 Project - Implementable Long-term Strategy for NZ National Freight Transportation </CardTitle>
                        <CardText style={{fontFamily: 'Ubuntu'}}>
                            The project team consists of 30 people from the 9 different specialisations
                             within the Faculty of Engineering. The task of this week-long project is to
                             develop a long-term strategy and supporting critical infrastructure development
                             plan for a new National Freight Transportsystemto complement the move in people
                             transportation to public transport and EVs. The Strategy must both decide what
                             should be done, if anything, and how the strategy and its supporting infrastructure
                              money will be implemented
                        </CardText>
                        <CardActions border>
                        </CardActions>
                    </Card>

                    {/* Project 1*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'black'
                        }}> ENGGEN 303 Project - Smart Traffic Light </CardTitle>
                        <CardText style={{fontFamily: 'Ubuntu'}}>
                        The team consists of 16 people from the different specialisations within the Faculty of Engineering. 
                        The task of this two-day project is to develop options and propose a long-term solution for Auckland 
                        which will reduce travel time and traffic congestion on the road. In particular, the New Zealand Cabinet 
                        Office (i.e. the client) is interested in exploiting the options which are becoming increasingly mainstream 
                        with technological advances around Smart Traffic Lights, where additional sensors can be employed to 
                        detect vehicles and traffic density.
                        </CardText>
                        <CardActions border>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} tipple>
                    <Tab>React</Tab>
                    <Tab>C#</Tab>
                    <Tab>Java</Tab>
                    <Tab>C/C++</Tab>
                    <Tab>Python</Tab>
                    <Tab>Systems Project</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )

    }
}

export default Projects;