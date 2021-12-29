import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

class AddUserComponent extends Component {  

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            gender: ''
        };
    }

    onSubmit = event => {
        event.preventDefault();
        const { name, email, gender} = this.state;

        if(!name || !email) {
            alert('Please add Customer Name and address')
            return
        }
        else{
            this.componentDidMount
        }
      

    }


    render() {
        return (
            <div>
                <h1 className="text-center text-primary">
                    Create Customer
                </h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={this.name} name = "name" onChange= {event => this.setState({ name: event.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cutomer Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" value={this.email} name = "email" onChange= { event => this.setState({ email: event.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3 datetimepicker" controlId="formBasicPassword">
                        <Form.Label>Customer Gender</Form.Label>
                        <Form.Control type="text" placeholder="Gender" value={this.gender} name = "gender" onChange= { event => this.setState({ gender: event.target.value})} />
                    </Form.Group>
                    <Button as="input" type="submit" variant="danger" value="Save Student" />
                </Form>
            </div>
        )
    }
}

export default AddUserComponent