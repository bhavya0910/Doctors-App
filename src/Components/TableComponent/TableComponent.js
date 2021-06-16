import React, { Component } from 'react'
import {Table} from 'antd';
export default class TableComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Table dataSource={this.props.dataSource} columns={this.props.columns} />
        )
    }
}
