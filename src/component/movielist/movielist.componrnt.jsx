import React from 'react';
import { Link } from "react-dom";
import CardView from '../cardview/cardview.component';
import './movielist.component.css';

class Movielist extends React.Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    async componentDidMount() {
        await fetch(`${this.props.location.state.url}${this.props.location.state.page}`)
            .then(Response => Response.json())
            .then(data => this.setState({ list: data.results }))
    }
    render() {
        return (
            <div className="movielist">
                {(this.state.list) ?
                    this.state.list.map(data => (
                        <div className="flex-data">
                            <CardView data={data} />
                        </div>
                    )) : null}
                
            </div>
        );
    }
}

export default Movielist;