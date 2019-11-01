import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import styles from './DeviceManager.css';

class RenderTable extends React.Component {

  render(){
    return (
      <div className="row">
        <h3> Top {this.props.header} Devices</h3>
        <ReactTable
          showPaginationBottom= {false}
          data={this.props.data}
          columns={this.props.filtered_columns.filter(x => x.Header === 'Owner' || x.Header === 'IP' || x.Header === `${this.props.header}`)}
          defaultSorted={[
            {
              id: `${this.props.id}`,
              desc: true
            }
          ]}
          minRows={0}
          defaultPageSize={5}
          sortable={false}
        />
      </div>
    )
  }
}

export default RenderTable;
