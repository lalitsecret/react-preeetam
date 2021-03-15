import React from 'react'
import data from './data'
import { DataGrid } from '@material-ui/data-grid';
function App()
{
	let [a,seta]=React.useState(data)
	let columns=Object.keys(a[0])
	columns=columns.map(x=>({field:x,headerName:x}))
	return <div>
		<DataGrid rows={a} columns={columns} pageSize={5} checkboxSelection />
	</div>
}
export default App