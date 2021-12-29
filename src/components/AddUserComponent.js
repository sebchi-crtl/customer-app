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
            axios.post('http://localhost:8080/api/v1/customer', 
            {   
                name,
                email,
                gender
            })
            .then(res=>{
                console.log(res);
                console.log(res.data); //This line of code will redirect you once the submission is succeed
            })
            .catch(error => {
                console.error('There is an error!', error);
                console.log(' error!', error);
                console.log('There is an error!', error.message);
                console.log('There is an error!', error.data);
                console.log('There is an error!', error.request);
                console.log('There is an error!', error.response.headers);
                console.log('There is an error!', error.response.status);
                console.log('There is an error!', error.response.statusText);
                console.log('There is an error!', error.response.config);
                console.log('There is an error!', error.request.method);
                console.log('There is an error!', error.response.data);
                console.log('There is an error!', error.toJSON());
            });
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