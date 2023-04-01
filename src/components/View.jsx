import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

const View = () => {
  var[product,setproduct]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3005/product")
    .then(response=>{
        setproduct(product=response.data)
    console.log(product)
})
    .catch(error=>console.log(error))
},[])

  return (
    <TableContainer>
      <Table>
       <TableHead>
       <TableBody>
        <TableRow>
          <TableCell>name</TableCell>
          <TableCell>brand</TableCell>
          <TableCell>quantity</TableCell>
          <TableCell>price</TableCell>
        </TableRow>
       </TableBody>
       </TableHead>
       <TableBody>
       shop.map((value,index)=>{
         <TableRow>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.brand}</TableCell>
                        <TableCell>{value.quantity}</TableCell>
                        <TableCell>{value.price}</TableCell>
                        <TableCell><Button onClick={()=>deletevalue(value.name)}>Delete</Button></TableCell>
                        <TableCell><Button onClick={()=>updtevalue(value)}>Update</Button></TableCell>
                        </TableRow>
                      })
       </TableBody>
      </Table>
    </TableContainer>
  )
}

export default View
