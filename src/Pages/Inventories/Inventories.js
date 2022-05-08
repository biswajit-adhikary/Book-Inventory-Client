import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useBooks from '../../hooks/useBooks';
import './Inventories.css';

const Inventories = () => {
    const [books, setBooks] = useBooks([]);

    // Delete Function
    const handelBookDelete = id => {
        const agree = window.confirm('Are you want to delete this item?');
        if (agree) {
            const url = `https://pacific-fjord-89697.herokuapp.com/book/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingBook = books.filter(book => book._id !== id);
                    setBooks(remainingBook);
                    toast("Item Deleted!");
                })
        }
    }
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
                                books.map(book => <tr className='single-inventory'
                                    key={book._id}
                                >
                                    <td>{book._id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.quantity}</td>
                                    <td><Button onClick={() => handelBookDelete(book._id)} className='btn theme-btn-two'>Delete</Button></td>
                                </tr>)
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