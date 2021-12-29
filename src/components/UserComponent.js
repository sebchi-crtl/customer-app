import React, { Component } from 'react';
import UserService from '../services/UserService'
import AddUserComponent from './AddUserComponent'
import { Table, Card, Container } from 'react-bootstrap'

class UserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customer:[]
        };
    }
   

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ customer: response.data })
        })
    }

    render() {
        return (
            <Container style={{overflow:'auto', maxWidth:'53rem', marginTop:'2rem'}}>
                <AddUserComponent />
                <hr className=' mt-4'></hr>
                <h1 className="text-center mt-4 text-primary">
                    User List
                </h1>
                <Card className='shadow m-0 p-0' style={{ width: '50rem'}}>
                    <Table striped bordered responsive hover>
                        <thead>
                            <tr>
                                <th>User id</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customer.map(
                                    customers => 
                                    <tr key = {customers.id}>
                                        <td>{ customers.id}</td>
                                        <td>{ customers.name}</td>
                                        <td>{ customers.email}</td>
                                        <td>{ customers.gender}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Card>
            </Container>
        )
    }
}

export default UserComponent
