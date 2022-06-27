import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Row, Table} from "reactstrap";
import axios from "axios";

class Region extends Component {
    state={
        regions:[]
    }

    componentDidMount() {
        axios.get("http://localhost/api/region").then(res=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Table>
                            <thead>
                            <tr>
                                <th>TR</th>
                                <th>Name Uz</th>
                                <th>Name Ru</th>
                                <th>Name En</th>
                                <th colSpan="2">Action</th>
                            </tr>
                            <tbody>
                            {this.state.regions.map((item,i)=>
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{item.nameUz}</td>
                                    <td>{item.nameRu}</td>
                                    <td>{item.nameEn}</td>
                                    <td><Button color="warning">Edit</Button></td>
                                    <td><Button color="danger">Delete</Button></td>
                                </tr>
                            )}
                            </tbody>
                            </thead>
                        </Table>
                    </Row>
                </Container>
            </div>
        );
    }
}

Region.propTypes = {};

export default Region;