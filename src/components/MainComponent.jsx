import React, { Component } from 'react';
import Input from './Input';
import RowComponent from './Row';

class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.handleRowsChange = this._handleRowsChange.bind(this);
		this.handleColumnsChange = this._handleColumnsChange.bind(this);
		this.handleRowSpaceChange = this._handleRowSpaceChange.bind(this);
		this.handleColumnSpaceChange = this._handleColumnSpaceChange.bind(this);
		this.state = {
			rows: '',
			columns: '',
			rowSpace: '',
			columnSpace: ''
		}
	}
	_handleRowsChange(e) {
		this.setState({
			rows: e.target.value
		});
	}
	_handleColumnsChange(e) {
		if(this.state.rows) {
			const columnsForEachRow = e.target.value.split(',').slice(0, this.state.rows);
			var isValidColumn = columnsForEachRow.map((col, index) => {
					return (/^([1-9]|10|11|12)$/.test(col));
				})
				.every((val) => {
					return val === true;
				});
			if(isValidColumn) {
				this.setState({
					columns: columnsForEachRow
				});
			}
		}
	}
	_handleRowSpaceChange(e) {
		if(/^[1-9]+px$/.test(e.target.value)) {
			this.setState({
				rowSpace: e.target.value
			});
		}
	}
	_handleColumnSpaceChange(e) {
		if(/^[1-9]+px$/.test(e.target.value)) {
			this.setState({
				columnSpace: e.target.value
			});
		}
	}
	render() {
		const rows = [];
		if(this.state.columns) {
			for(let i=0; i<Number(this.state.rows); i++) {
				const column = this.state.columns[i];
				rows.push(<RowComponent key={i} colCount={column} colWidth={12/Number(column)} rowSpace={this.state.rowSpace} columnSpace={this.state.columnSpace}  />);
	      	}
		}
		return (
			<main>
	          <Input type="number" placeholder="Rows" min="1" max="5" changeHandler={this.handleRowsChange} />
	          <br/>
	          <Input type="text" placeholder="Columns" changeHandler={this.handleColumnsChange} />
	          <br/>
	          <Input type="text" placeholder="Row space(1-9px)" changeHandler={this.handleRowSpaceChange} />
	          <br/>
	          <Input type="text" placeholder="Columns space(1-9px)" changeHandler={this.handleColumnSpaceChange} />
	          <br/>
	          { rows }
	        </main>
		);
	}
}

export default MainComponent;
