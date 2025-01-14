import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({handleSearch, searchTerm, setSearchTerm}) => {
 

  return (
    <Form className="d-flex" onSubmit={handleSearch} style={{padding: '0 15px 0 15px'}}>
      <FormControl
        type="search"
        placeholder="Buscar..."
        className="me-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="primary" type="submit">
      <i className='bx bx-search'></i>
      </Button>
    </Form>
  );
};

export default SearchBar;
