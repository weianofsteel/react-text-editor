import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { convertToRaw, EditorState } from 'draft-js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const Editor = dynamic(
    ()=>import('react-draft-wysiwyg').then(mod=>mod.Editor),
    { ssr:false }
)
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

export default class TextEditor extends Component{
    constructor(props) {
      super(props);
      this.state = {
        editorState: EditorState.createEmpty(),
        message:'Try the editor below!',
        rawMessage:''
      };
      
      this.onEditorStateChange = this.onEditorStateChange.bind(this);
      this.handleEditorStateToMessage = this.handleEditorStateToMessage.bind(this);
    }
    
    onEditorStateChange(editorState) {
      this.setState({
          editorState,
          rawMessage: draftToHtml(convertToRaw(editorState.getCurrentContent()))
      });
    };

    handleEditorStateToMessage() {
        this.setState({
            message: this.state.rawMessage
        })
    }

    render() {
      const { editorState } = this.state;
      const wrapperStyle = {
          border: '1px solid #969696',
      }
      const editorStyle = {
          height:'10rem',
          padding:'1rem'
      }
      const toolbarStyle = {
     
      }
        return (
          <React.Fragment>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={12} style={{border:'1px solid #969696', borderRadius:'3px', height:'10rem', padding:'1rem'}}>
                    <div dangerouslySetInnerHTML={{__html: this.state.message}}></div>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            <div style={{marginTop:'5%'}}>
                <Editor
                    initialEditorState={editorState}
                    wrapperClassName="wrapper-class"
                    wrapperStyle={wrapperStyle}
                    editorStyle={editorStyle}
                    toolbarStyle={toolbarStyle}
                    editorClassName="demo-editor"                                                                               
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
            <div style={{marginTop:'2%'}}>
                <Button
                    variant="outlined"
                    onClick={this.handleEditorStateToMessage}
                >
                    submit
                </Button>
            </div>
          </React.Fragment>
        )
     }
  }