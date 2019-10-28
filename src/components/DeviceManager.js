import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import styles from './DeviceManager.css';
// import DataTable from 'react-editable-table';

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
      return bytes.toFixed(2) + ' ' + sizes[0];
    else
      return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
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
        style={{color: 'white',backgroundColor: '#597c80'}}
        placeholder="type here"
        name="input"
        onChange={this.handleInputChange.bind(null, cellInfo)}
        value={cellValue}
      />
    );
  };
  render() {
    const columns = [{
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
    },{
      Header: 'TX',
      accessor: 'networkRxBytes',
    },{
       Header: 'RX',
       accessor: 'networkTxBytes',
    }]

   const filtered_columns = [{
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
     style: {backgroundColor: '#dedcd9'}
   },{
     Header: 'TX',
     accessor: 'networkRxBytes',
     style: {backgroundColor: '#dedcd9'}
   },{
     Header: 'RX',
     accessor: 'networkTxBytes',
     style: {backgroundColor: '#dedcd9'}
    }]

    return (
      <div className="top">
      <h1 className="title"> Device Manager </h1>
      <div className="page">
        <div className="rows">
          <div className="row">
            <h3> Top CPU Devices</h3>
            <ReactTable
              showPaginationBottom= {false}
              data={this.state.data}
              columns={filtered_columns.filter(x => x.Header !== 'Memory' && x.Header !== 'TX' && x.Header !== 'RX')}
              defaultSorted={[
                {
                  id: "cpuPct",
                  desc: true
                }
              ]}
              minRows={0}
              defaultPageSize={5}
              sortable={false}
            />
          </div>
          <div className="row">
            <h3> Top Memory Devices</h3>
            <ReactTable
              showPaginationBottom= {false}
              data={this.state.data}
              columns={filtered_columns.filter(x => x.Header !== 'CPU' && x.Header !== 'TX' && x.Header !== 'RX')}
              defaultSorted={[
                {
                  id: "memBytes",
                  desc: true
                }
              ]}
              minRows={0}
              defaultPageSize={5}
              sortable={false}
            />
          </div>
          <div className="row">
            <h3> Top TX Devices </h3>
            <ReactTable
              showPaginationBottom= {false}
              data={this.state.data}
              columns={filtered_columns.filter(x => x.Header !== 'CPU' && x.Header !== 'Memory' && x.Header !== 'RX')}
              defaultSorted={[
                {
                  id: "networkRxBytes",
                  desc: true
                }
              ]}
              minRows={0}
              defaultPageSize={5}
              sortable={false}
            />
          </div>
          <div className="row">
            <h3> Top RX Devices </h3>
            <ReactTable
              showPaginationBottom= {false}
              data={this.state.data}
              columns={filtered_columns.filter(x => x.Header !== 'CPU' && x.Header !== 'Memory' && x.Header !== 'TX')}
              defaultSorted={[
                {
                  id: "networkTxBytes",
                  desc: true
                }
              ]}
              minRows={0}
              defaultPageSize={5}
              sortable={false}
            />
          </div>
        </div>
        <div className="full-table">
          <ReactTable
            showPaginationBottom= {false}
            style={{width: '50%', marginLeft: '25%', color: 'white', backgroundColor: '#597c80', opacity: '0.4'}}
            data={this.state.data}
            columns={columns}
            minRows={0}
          />
        </div>
        </div>
      </div>
  );
  }
}

export default DeviceManger;
