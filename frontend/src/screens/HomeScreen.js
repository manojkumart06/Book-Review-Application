import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import '../styles/HomeScreen.css'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Filter products based on search query
  const filteredProducts = products.filter(product => {
    const { name, author, category } = product;
    const searchLower = searchQuery.toLowerCase();
    return (
      name.toLowerCase().includes(searchLower) ||
      author.toLowerCase().includes(searchLower) ||
      category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <> 
      <h1 className="home-screen-heading">Book Results</h1>
      <input
        type="text"
        placeholder="Search book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input" 
      />
      {loading ? (
         <Loader />
       ) : error ? (
         <Message variant='danger'>{error}</Message>
       ) : (
         <Row>
           {filteredProducts.map((product) => (
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               <Product product={product} />
             </Col>
           ))}
         </Row>
       )}
    </>
  );
};

export default HomeScreen;
