import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {

        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aktxA4hFTQd3xK3ilj5CNFSE2NpHabGoGa7gpcf6yZ6WQJ7bKQ&s"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | C# | C | Java | React | NodeJS | Python | C++ | JavaScript</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )

    }
}

export default Landing;