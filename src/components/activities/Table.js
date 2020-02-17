import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
  width: 75%;

  & > a {
    width: 150px;
  }
`

const Table = ({ data }) => {
  return (
    <Container className="mt-4">
      <Link to="/activities/new" className="btn btn-info mb-2">New</Link>
      <table className="table table-striped mt-4">
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, index) => {
            return (
              <tr key={index}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.description}</td>
                <td className="actions d-flex align-items-center">
                  <Link to={`activities/edit/${r.id}`} className="w-100 btn btn-sm btn-outline-primary mr-2" >Edit</Link>
                  <button className="w-100 btn btn-sm btn-outline-danger mr-2" >Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}

export default Table;