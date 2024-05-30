import React from 'react'

const TableComponent = () => {
  const data = [
    {id:1, name: 'Abdi ibrahim', age:24, occupation: 'Software Developer'},
    {id:2, name: 'Julius Gakiri', age:23, occupation: 'Software Engineer'},
    {id:3, name: 'Jasper Njoroge', age:24, occupation: 'Engineer'},
    {id:4, name: 'Aisha shueib', age:25, occupation: 'Designer'},
    {id:5, name: 'Lennox Kimani', age:19, occupation: 'Engineer'},
    {id:6, name: 'Bobby Wine', age:27, occupation: 'Developer'},
    {id:7, name: 'Adan Abdi', age:26, occupation: 'IT Specialist'},
    {id:8, name: 'Kakai Victor', age:27, occupation: 'Software Developer'}
    
  ];
    return (
   <div className='table-data'>
    <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
        </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.occupation}</td>

        </tr>
      ))}  
    </tbody>
   </table>
   </div>
  );
};

export default TableComponent