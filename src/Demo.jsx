import React from 'react'
import data from './data'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
function App()
{
	let [a,seta]=React.useState(data)
	let pages=[]
	let pp=10
	pages=Array.from(Math.ceil(a.length/pp)).fill('').map((x,i) =>i+1)
	let columns=Object.keys(a[0])
	// columns=columns.map(x=>({field:x,headerName:x}))
	return <div>
		<Table celled>
		    <Table.Header>
		      <Table.Row>
		        {columns.map(x=><Table.HeaderCell>{x}</Table.HeaderCell>)}
		      </Table.Row>
		    </Table.Header>

		    <Table.Body>
		      {a.map(x=>
		      	<Table.Row>
		      	  {columns.map(y=>
		      	  	<Table.Cell>{x[y]}</Table.Cell>
		      	  )}
		      	</Table.Row>
		      	
		      )}

		    </Table.Body>

		    <Table.Footer>
		      <Table.Row>
		        <Table.HeaderCell colSpan='3'>
		          <Menu floated='right' pagination>
		            <Menu.Item as='a' icon>
		              <Icon name='chevron left' />
		            </Menu.Item>
		            {pages.map(x=>
		            	<Menu.Item as='a'>{x}</Menu.Item>
		            )}
		            <Menu.Item as='a' icon>
		              <Icon name='chevron right' />
		            </Menu.Item>
		          </Menu>
		        </Table.HeaderCell>
		      </Table.Row>
		    </Table.Footer>
		  </Table>	
	</div>
}
export default App