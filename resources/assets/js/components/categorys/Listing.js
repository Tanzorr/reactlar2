import React, { Component } from 'react';
import axios from 'axios';


export default class Listing extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

        componentDidMount() {
            axios.get('http://reactlar2/category')
                .then(response => {
                    this.setState({categories: response.data});
                });
        }



    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Catecgory name</th>
                        <th>Status</th>
                        <th>Created at</th>
                        <th>Updatedated at</th>
                    </tr>
                    </thead>
                    <tbody>
                            {
                                this.state.categories.map(category=> {
                                    return(
                                        <tr>
                                            <td scope="row">1</td>
                                            <td>{category.name}</td>
                                            <td>{category.active}</td>
                                            <td>{category.created_at}</td>
                                        </tr>
                                    )

                                })
                            }
                            </tbody>
                </table>
            </div>

        );
    }
}




