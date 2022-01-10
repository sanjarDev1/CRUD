import React,{useState} from 'react'

 const Index2 = () => {
    
    const [data,setData] = useState([
        {id:1, name: 'Umar'},
        {id:2, name: 'Abdulloh'},
        {id:3, name: 'Karim'},
        {id:4, name: 'Azim'},
    ]);

    const [idEdit, getIdEdit] = useState();
    const [title, setTitle] = useState('');
    const [save,getSave] = useState('')


    const getEdit = (value)=>
    {
        getIdEdit(value.id)
        setTitle(value.name)
    }


    const onDelete = (e) =>{
        const newData = data.filter(value=>value.id !== e)
        setData(newData);


    }

    const onSaveEdit = ()=>{
        const newData = data.map(value=>value.id === idEdit ? {...value, name: title}: value )
        setData(newData);
        getIdEdit(null)

    }
   
    const getonSave = ()=>{
        const newData = [
            ...data,
            {
                id: data.length+1,
                name: save
            }
        ];
        setData(newData)
        getSave('')

    }

    
    return (
        <div>
            <h1>{save}</h1>
            <input type="text" value={save} onChange={(e)=>getSave(e.target.value)} />
            <button onClick={getonSave}>Save</button>
           <table border='1px' style={{width:'50%'}}>
               <thead>
                <tr>
                    <th>Id</th>    
                    <th>Name</th>    
                    <th>Action</th>    
                </tr>  
                </thead>
                <tbody>
                {
                    data.map(value=>(
                    <tr key={value.id}>
                    <td>{value.id}</td>    
                    <td>{
                        idEdit === value.id ? <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /> : value.name
                        }</td>  
                    <td><button onClick={()=>onDelete(value.id)}>delete</button>
                    {
                        idEdit === value.id ? <button  onClick={onSaveEdit}>save</button>:
                        
                        <button onClick={()=>getEdit(value)}>edit</button>
                    }
                    </td>  
                    </tr>
                    ))
                } 
                </tbody>
                    
            </table> 
        </div>
    )
}

export default Index2;
