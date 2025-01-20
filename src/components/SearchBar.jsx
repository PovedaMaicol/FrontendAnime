import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({handleSearch, searchTerm, setSearchTerm, setOpenSearch, openSearch}) => {
 

  return (
    <Form className="d-flex" onSubmit={handleSearch} style={{padding: '20px 20px 0 20px'}}>
      <FormControl
        type="search"
        placeholder="Buscar..."
        className="me-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="primary" type="submit" onClick={() => setOpenSearch(!openSearch)}>
      <i className='bx bx-search'></i>
      </Button>
    </Form>
  );
};

export default SearchBar;
