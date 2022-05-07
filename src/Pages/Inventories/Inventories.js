import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [books] = useBooks([]);
    return (
        <div className='inventories-area'>
            <Container>
                <div className="section-heading">
                    <h3 className='theme-text-secondary text-center mb-5'>Manage Inventories:</h3>
                </div>
                <div className="inventories">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Book Name</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(book => <Inventory
                                    key={book._id}
                                    book={book}
                                ></Inventory>)
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="section-footer text-center">
                    <Link className='btn theme-btn mt-3' to="/add-new-item">Add New Item</Link>
                </div>
            </Container>
        </div>
    );
};

export default Inventories;