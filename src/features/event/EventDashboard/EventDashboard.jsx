import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';

 class EventDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width= {10}> 
                <H2>Left Column</H2>
                </Grid.Column>
                <Grid.Column width= {6}> 
                <H2>RightColumn</H2>
                </Grid.Column>
            </Grid>
            <div>
                
            </div>
        )
    }
}
export default EventDashboard;
