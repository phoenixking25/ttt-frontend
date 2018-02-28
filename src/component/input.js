import React from 'react';
import {connect} from 'react-redux';
import { action } from '../action';
import Table from './table';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            initial: true
        }
    }
    submit = (e) => {
        this.setState({
            loading: true,
            initial: false
        })
        e.preventDefault();
        const formData = {};
        formData['number'] = this.refs['number'].value;
        this.props.submit(formData);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data) {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="row center-align margin">
                <h3 className="thin white-text">Select number</h3>
                <form onSubmit={this.submit} className="col s12 m8 l6 offset-m2 offset-l3">
                    <p className="range-field">
                        <input type="range" ref="number" id="number" name="number" min="0" max="100" />
                    </p>
                    <button className="btn waves-effect waves-light" type="submit">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
                {!this.state.loading && !this.state.initial &&
                <div className="row">
                    <Table table = {this.props.data} />
                </div>
                }
                {this.state.loading && !this.state.initial && 
                    <div className="row margin">
                    <div className="col s2 offset-s5 loader">
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        error: state.error,
        data: state.data,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submit: (formData) => {
            dispatch(action.submitData(formData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)