import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import styles from './DeviceManager.css';
import RenderTable from './RenderTable.js';

class DeviceManger extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [{
          ip: '150.1.1.1',
          owner: 'Jack Browner',
          cpuPct: 75+'%',
          memBytes: this.bytesToString(2 * 1024 * 1024 * 1024),
          networkRxBytes: this.bytesToString(10 * 1024 * 1024),
          networkTxBytes: this.bytesToString(4 * 1024 * 1024)
        },
        {
          ip: '164.1.1.1',
          owner: 'Simon Homestead',
          cpuPct: 20+'%',
          memBytes: this.bytesToString(1 * 1024 * 1024 * 1024),
          networkRxBytes: this.bytesToString(3 * 1024 * 1024),
          networkTxBytes: this.bytesToString(20 * 1024 * 1024)
        },
        {
          ip: '171.1.1.1',
          owner: 'Emily Santiago',
          cpuPct: 65+'%',
          memBytes: this.bytesToString(3 * 1024 * 1024 * 1024),
          networkRxBytes: this.bytesToString(2 * 1024 * 1024),
          networkTxBytes: this.bytesToString(6 * 1024 * 1024)
        },
        {
          ip: '231.1.1.1',
          owner: 'Rosalie Guthrie',
          cpuPct: 15+'%',
          memBytes: this.bytesToString(1.5 * 1024 * 1024 * 1024),
          networkRxBytes: this.bytesToString(2.7 * 1024 * 1024),
          networkTxBytes: this.bytesToString(6.3 * 1024 * 1024)
        },
        {
          ip: '181.1.1.1',
          owner: 'Mary Morales',
          cpuPct: 45+'%',
          memBytes: this.bytesToString(45 * 1024 * 1024 * 1025),
          networkRxBytes: this.bytesToString(64 * 1024 * 1024),
          networkTxBytes: this.bytesToString(74 * 1024 * 1024)
        },
        {
          ip: '191.1.1.1',
          owner: 'Judith Mcintosh',
          cpuPct: 50+'%',
          memBytes: this.bytesToString(3 * 1024 * 1024 * 1024),
          networkRxBytes: this.bytesToString(40 * 1024 * 1024),
          networkTxBytes: this.bytesToString(65 * 1024 * 1024)
        },
        {
          ip: '179.1.1.1',
          owner: 'Elise Grace Pacheco',
          cpuPct: 70+'%',
          memBytes: this.bytesToString(70 * 1024 * 1024 * 1024),
          networkRxBytes: this.bytesToString(30 * 1024 * 1024),
          networkTxBytes: this.bytesToString(20 * 1024 * 1024)
        }
      ],
      filtered_columns: [
        {
          Header: 'IP',
          accessor: 'ip',
        }, {
          Header: 'Owner',
          accessor: 'owner',
        }, {
          Header: 'CPU',
          accessor: 'cpuPct',
          style: {backgroundColor: '#dedcd9'}
        }, {
          Header: 'Memory',
          accessor: 'memBytes',
          style: {backgroundColor: '#dedcd9'},
          sortMethod: (a, b) => {
            if (a.length === b.length) {
              return parseInt(a) > parseInt(b) ? 1 : -1;
            }
            return a.length > b.length ? 1 : -1;
          }
        },{
          Header: 'TX',
          accessor: 'networkRxBytes',
          style: {backgroundColor: '#dedcd9'},
          sortMethod: (a, b) => {
            if (a.length === b.length) {
              return parseInt(a) > parseInt(b) ? 1 : -1;
            }
            return a.length > b.length ? 1 : -1;
          }
        },{
          Header: 'RX',
          accessor: 'networkTxBytes',
          style: {backgroundColor: '#dedcd9'},
          sortMethod: (a, b) => {
            if (a.length === b.length) {
              return parseInt(a) > parseInt(b) ? 1 : -1;
            }
            return a.length > b.length ? 1 : -1;
          }
         }
      ],
      columns: [
        {
          Header: 'IP',
          accessor: 'ip',
        }, {
          Header: 'Owner',
          accessor: 'owner',
          Cell: this.renderEditable
        }, {
          Header: 'CPU',
          accessor: 'cpuPct',
        }, {
          Header: 'Memory',
          accessor: 'memBytes',
          sortMethod: (a, b) => {
            if (a.length === b.length) {
              return parseInt(a) > parseInt(b) ? 1 : -1;
            }
            return a.length > b.length ? 1 : -1;
          },
        },{
          Header: 'TX',
          accessor: 'networkRxBytes',
          sortMethod: (a, b) => {
            if (a.length === b.length) {
              return parseInt(a) > parseInt(b) ? 1 : -1;
            }
            return a.length > b.length ? 1 : -1;
          },
        },{
           Header: 'RX',
           accessor: 'networkTxBytes',
           sortMethod: (a, b) => {
             if (a.length === b.length) {
               return parseInt(a) > parseInt(b) ? 1 : -1;
             }
             return a.length > b.length ? 1 : -1;
           }
        }
      ]
    }
  this.renderEditable = this.renderEditable.bind(this);

}

  bytesToString(bytes){
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    if (bytes == 0)
      return '0';
    if (isNaN(parseFloat(bytes)) || !isFinite(bytes))
      return '-';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

    if (i == 0)
      return bytes + " " + sizes[i]
    else
      return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i]
  }

  handleInputChange = (cellInfo, event) => {
    let data = [...this.state.data];
    data[cellInfo.index][cellInfo.column.id] = event.target.value;

    this.setState({ data });
  };


  renderEditable = cellInfo => {
    const cellValue = this.state.data[cellInfo.index][cellInfo.column.id];

    return (
      <input
        style={{color: 'white',backgroundColor: 'grey'}}
        placeholder="type here"
        name="input"
        onChange={this.handleInputChange.bind(null, cellInfo)}
        value={cellValue}
      />
    );
  };


  render() {

    return (
      <div className="top">
      <h1 className="title"> Device Manager </h1>
      <div className="page">
        <div className="rows">
        <RenderTable header='CPU' id='cpuPct' data={this.state.data} filtered_columns={this.state.filtered_columns}/>
        <RenderTable header='Memory' id='memBytes' data={this.state.data} filtered_columns={this.state.filtered_columns}/>
        <RenderTable header='TX' id='networkRxBytes' data={this.state.data} filtered_columns={this.state.filtered_columns}/>
        <RenderTable header='RX' id='networkTxBytes' data={this.state.data} filtered_columns={this.state.filtered_columns}/>
        </div>
        <div className="full-table" style={{borderStyle: 'solid', borderColor: '#92a8d1'}}>
        <h1> Device List </h1>
          <ReactTable
            showPaginationBottom= {false}
            style={{width: '50%', marginLeft: '25%', color: 'white', backgroundColor: '#597c80', opacity: '0.8'}}
            data={this.state.data}
            columns={this.state.columns}
            minRows={0}
          />
        <h1> </h1>
        </div>
        </div>
      </div>
  );
  }
}

export default DeviceManger;
