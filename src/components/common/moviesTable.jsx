import React from 'react';
import Like from "./like";
import TableHeader from './tableHeader';
import TableBody from './tableBody';

class MoviesTable extends React.Component {


  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: 'like' },
    { key: 'delete'}

  ];
  



  render() { 

    const {movies, onDelete, onLike, sortColumn, onSort} = this.props
    return ( 
    <table className="table">
    <TableHeader 
      columns={this.columns} 
      sortColumn={sortColumn} 
      onSort={onSort} 
      />
    <TableBody data = {movies} />
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like liked={movie.liked} onClick={() => onLike(movie)}/>
            </td>
          <td>
            <button
              onClick={() => onDelete(movie)}
              className="btn btn-danger btn-small"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table> );


  }
}
 
export default MoviesTable;