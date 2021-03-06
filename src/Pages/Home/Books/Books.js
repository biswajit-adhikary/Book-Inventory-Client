import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBooks from '../../../hooks/useBooks';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books] = useBooks([]);
    return (
        <div className='books-area'>
            <Container>
                <div className="section-heading">
                    <h3 className='theme-text-secondary text-center mb-5'>Inventory items</h3>
                </div>
                <Row>
                    {
                        books.slice(0, 6).map(book => <Book
                            key={book._id}
                            book={book}
                        ></Book>)
                    }
                </Row>
                <div className="section-footer text-center">
                    <Link className='btn theme-btn-two mt-3' to="/manage-inventories">Manage Inventories</Link>
                </div>
            </Container>
        </div>
    );
};

export default Books;