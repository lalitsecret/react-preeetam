import React from 'react'
import data from './data'
import {Table} from 'antd'
function App()
{
	let [a,seta]=React.useState(data)
	let columns=Object.keys(a[0])
	columns=columns.map(x=>({title:x,dataIndex:x,key:x}))
	return <div>
		<Table dataSource={a} columns={columns} />
	</div>
}
export default App