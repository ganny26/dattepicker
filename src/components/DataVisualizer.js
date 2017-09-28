import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class DataVisualizer extends Component {

  
    
  render() {
    let tableData;
    if(this.props.coordinateData){
       console.log("Coordinate Data",this.props.coordinateData);
    }
    return (
        <div>
            <Table>
            <TableHeader>
            <TableRow>
                <TableHeaderColumn>Property Scan Data</TableHeaderColumn>
                <TableHeaderColumn>Coordinates</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody>
               {
                this.props.coordinateData.map(obj=>{
                    return(
                    <TableRow>
                        <TableRowColumn>{obj.ocrname}</TableRowColumn>
                        <TableRowColumn>{obj.coordinates}</TableRowColumn>
                    </TableRow>
                    )
                })
               }
          
            </TableBody>
        </Table>

        </div>
    );
  }
}

export default DataVisualizer;
