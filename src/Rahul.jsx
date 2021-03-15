import React from 'react'
import data from './data'
function Rahul()
{

	let [a,seta]=React.useState(data)
	let [start,setstart]=React.useState(0)
	let [col,setcol]=React.useState("")
	let [order,setorder]=React.useState(true)

	let [pp,setpp]=React.useState(10)

	const sort1=(x,y) =>{
		if(x[col]>y[col])
		{
			return -1;
		}
		else
		{
			return 1
		}
		return 0
	}
	const sort2=(x,y) =>{
		if(x[col] < y[col])
		{
			return -1;
		}
		else
		{
			return 1
		}
		return 0
	}
	

	const setSort=str=>{
		setcol(str)
		setorder(!order)
		seta(a.sort((arr1,arr2) =>order?(sort1(arr1,arr2)):(sort2(arr1,arr2))))
	}

	const pages=() =>{
		let size=a.length/pp
		size=Math.ceil(size)
		let arr=new Array(size).fill(0)
		return arr.map((x,i) => <button onClick={e=>setstart(i*pp)}>{i+1}</button>)
	}
	const pagesdropdown=() =>{
		let size=a.length/pp
		size=Math.ceil(size)
		let arr=new Array(size).fill(0)
		return arr.map((x,i) => <option value={i*pp}>{i+1}</option>)
	}
	

	return <div>
		{pages()}

		<select onChange={e=>setpp(e.target.value)}>
			<option value="10">select per page</option>
			<option>20</option>
			<option>30</option>
			<option>50</option>
			<option>100</option>
			<option>200</option>
			<option>500</option>
		</select>
		<select onChange={e=>setstart(e.target.value)}>
			<option value="0">select start</option>
			{pagesdropdown()}
		</select>
		
		<table>
			<thead>
				<tr>
				{Object.keys(a[0]).map(x=>
					<th onClick={e=>setSort(x)}>{x}</th>
				)}
				</tr>
			</thead>
			<tbody>
				{a.slice(start,start+pp).map(x=>
						<tr>
					{Object.keys(x).map(y=>
							<td>{x[y]}</td>
					)}
						</tr>
				)}
			</tbody>
		</table>

	</div>
}
export default Rahul