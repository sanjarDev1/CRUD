import React,{useState} from 'react'

 const index2 = () => {
    
    const [data,setData] = useState([
        {id:1, name: 'Umar'},
        {id:2, name: 'Abdulloh'},
        {id:3, name: 'Karim'},
        {id:4, name: 'Azim'},
    ]);
    

    
    
    
    return (
        <div>
           <table>
                <tr>
                    <th>Id</th>    
                    <th>Name</th>    
                    <th>Action</th>    
                </tr>  
                <tr>
                {
                    data.map(value=>{
                        
                    })
                } 
                    </tr>
            </table> 
        </div>
    )
}

export default index2;
