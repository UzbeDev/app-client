import React, {Component} from 'react';
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";

class Country extends Component {
    state = {
        showModal: false,
        showModal1: false,
        countries: [],
        countryName: '',
        currentCountry: '',
    }


    render() {
        const openModal = (country) => {
            this.setState({showModal: !this.state.showModal, currentCountry: country})
        }

        const openDeleteModal = (country) => {
            this.setState({showModal1: !this.state.showModal1, currentCountry: country})
        }
        const getCountryName = (e) => {
            this.setState({countryName: e.target.value})
        }
        const saveCountry = () => {
            let name = this.state.countryName;
            let davlatlar = this.state.countries;
            let hozirgiDavlat = this.state.currentCountry;
            let newDavlat = '';

            if (name) {

                if (hozirgiDavlat) {
                    newDavlat = {id: hozirgiDavlat.id, name: name}
                    let index = davlatlar.indexOf(hozirgiDavlat);
                    davlatlar.splice(index, 1, newDavlat)
                } else {
                    let maxId = davlatlar.length === 0 ? 1 : davlatlar[davlatlar.length - 1].id + 1;
                    newDavlat = {id: maxId, name}
                    davlatlar.push(newDavlat)
                }

            }

            this.setState({countries: davlatlar, showModal: false, countryName: ''})
        }


        const deleteCountry = () => {
            let davlatlar = this.state.countries;
            let hozirgiDavlat = this.state.currentCountry;
            if (hozirgiDavlat) {

                let index = davlatlar.indexOf(hozirgiDavlat.id);
                davlatlar.splice(index, 1)
            }
            ````````````````````````````````````````````````````````````````````````````````
            this.setState({countries: davlatlar, showModal1: false, countryName: ''})
        }
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <br/>
                        <Button color="primary" onClick={() => openModal("")}>Add Country</Button>
                        <Table>
                            <thead>
                            <tr>
                                <th>TR</th>
                                <th>Name</th>
                                <th colSpan="2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.countries.map((item, i) =>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td><Button color="warning" onClick={() => openModal(item)}>Edit</Button></td>
                                    <td><Button color="danger" onClick={() => openDeleteModal(item)}>Delete</Button>
                                    </td>

                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <Modal isOpen={this.state.showModal}>
                    <ModalHeader>{this.state.currentCountry ? "Edit Country" : "Add Country"}
                    </ModalHeader>
                    <ModalBody>
                        <Label id="name">Country Name</Label>
                        <Input name="name" type="text" id="name" onChange={getCountryName}
                               placeholder="Enter country name"
                               defaultValue={this.state.currentCountry.name}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={saveCountry}>
                            Save
                        </Button>
                        {' '}
                        <Button onClick={openModal}>












































































                            Cancel
                        </Button>
                    </ModalFooter
                    ><Modal isOpen={this.state.showModal1}>
                    <ModalHeader>Delete Country
                    </ModalHeader>
                    <ModalBody>
                        Do you really want to delete?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={deleteCountry}>Yes</Button>,
                        <Button onClick={openDeleteModal} color="warning">
                            No
                        </Button>

                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

Country.propTypes = {};

export default Country;