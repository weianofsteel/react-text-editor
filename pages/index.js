import React from 'react';
import TextEditor from '../component/Editor';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6} style={{textAlign:'center'}}>
                    <div style={{fontFamily:'Roboto', fontSize:'2.2rem'}}>React Text Editor</div>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <div style={{border:"1px, solid, black", height:"300px", marginTop:'1rem'}}>
                        <TextEditor/>
                    </div>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Home;