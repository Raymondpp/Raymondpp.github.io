import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {

        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Raymond Zhou</h2>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aktxA4hFTQd3xK3ilj5CNFSE2NpHabGoGa7gpcf6yZ6WQJ7bKQ&s"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Full Stack Web Developer</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Ubuntu' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        02102374331
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Ubuntu' }}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        zhouyuanpengnz@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Ubuntu' }}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        My skype Id
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>


                    </Cell>
                </Grid>
            </div>
        )

    }
}

export default Contact;