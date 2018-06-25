import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Box from './Box';

const RowComponent = (props) => {
	const { colCount, colWidth, rowSpace, columnSpace } = props;
	const renderColumns = [];
	const colSpace = (!columnSpace) ? "0px" : Number(String(columnSpace).substr(0,columnSpace.length-2))/2+"px"

	if(!isNaN(colCount)) {
		for(let i=0; i<colCount; i++) {
			const columnWidth = (i === 6 || 7) ? parseInt(colWidth, 10) : Math.round(colWidth);
			renderColumns.push(<Col style={{padding: "0px", paddingRight: colSpace, paddingLeft: colSpace}} key={i} lg={columnWidth} md={columnWidth} >
									<Box />
								</Col>);
		}
	}
	return(
		<Grid>
			<Row className="show-grid" style={{margin: rowSpace}}>
				{renderColumns}
			</Row>
		</Grid>
	)
}

export default RowComponent;
