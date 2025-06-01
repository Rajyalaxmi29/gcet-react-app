import React from 'react'

export default function App1() {
  return (
    <div>App1</div>
  )
}




/*import React from "react";
import { useState } from "react";

export default function App1() {
const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 35 },
  ]);
  const[cart,setCart] = useState({});
  const handleSubmit=(id)=>{
    !cart[id] && setCart({...cart,id:[1]});
  };
  return(
    <div>
      <h1>products</h1>
    <ol>
      {products.map((value)=>(
        <li key={(value.id)}>
          {value.name}-${value.price}-
          <button onClick={()=>handleSubmit(value.id)}>Add</button>
        </li>
      ))}
    </ol>
    </div>
  )
/*const[count,setCount]=useState(0);
const incre = ()=>{
  setCount(count+1);
}
const decre = ()=>{
  setCount(count-1);
}

return (
  <div>
    <button onClick={decre}>-</button>
    <h1>{count}</h1>
<button onClick={incre}>+</button>
  </div>
)

 /* const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const handleSubmit = () => {

 setUsers([...users, user]);
  }
  const handleDelt = (name) => {
    setUsers(users.filter((value) => value.name !== name));
  };
  const [userAge, setAge] = useState({});
  const[filteredUsers, setFilteredUsers] = useState([]);
  const handleSearch = (age) => {
    const filteredUsers = users.filter((value) => value.age === age);
    setUsers(filteredUsers);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br/>
      <input
        type="number"
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <br/>
      <button onClick={handleSubmit}>submit</button>
      <hr/>
      <p><ol>
       { users.map((value) => (
        <li key={value.name}>
          {value.name}-{value.age}-
          <button onClick={()=>handleDelt(value.name)}>delete</button>
        </li>
          ))}
        </ol>
        </p>
        <hr/>
        <input type="number"onChange={(e)=>setAge({...userAge,age:e.target.value})} />
       <button onClick={()=>handleSearch(value.age)}>submit</button>
       <ol>
        {filteredUsers.map((value) => (
          <li key={value.name}>
            {value.name}-{value.age}-
            <button onClick={()=>handleDelt(value.name)}>delete</button>
          </li>
        ))}
       </ol>
    </div>
  );

  /*const products = [
    { id: 1, name: "apple", price: 23 },
    { id: 2, name: "mango", price: 30 },
    { id: 3, name: "orange", price: 45 },
     { id: 4, name: "banana", price: 45 },
  ];
  return (
    <div>
        <h2>Fruits</h2>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {products.map((product)=>(
                <div key={product.id} style={{border:"1px solid black",display:"flex",margin:"10px",padding:"10px",backgroundColor:"lightblue"}}>
                    <h2>{product.name}-${product.price}</h2>
                    </div>
            ))}
        </div>
    </div>
    
    

  );

 /* const [name, setName] = useState();
  const [age, setAge] = useState();
  const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
const[result1,setResult1] = useState();  
const[result2,setResult2] = useState(); 
const[result3,setResult3] = useState(); 
const[result4,setResult4] = useState(); 
    const Add = () => {
setResult1(Number(num1) + Number(num2));
setResult2(Number(num1) - Number(num2));
setResult3(Number(num1) * Number(num2));
setResult4(Number(num1) / Number(num2));
    }
  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <hr />

      <p>
        <input
          type="number"
          placeholder="enter age"
          onChange={(e) => setAge(e.currentTarget.value)}
        />
      </p>
      <hr />
      <p>
        {name}-{age}
      </p>
      <input type="number"onChange={(e)=>setNum1(e.target.value)} />
            <input type="number"onChange={(e)=>setNum2(e.target.value)} />
        <button onClick={Add}>submit</button>
        <br/>
       <p>Addition:{result1}</p> 
      <p>subt:{result2}</p>  
        <p>mul:{result3}</p> 
       <p>  div:{result4}</p>
    </div>
  );

  /* const handleSubmit = () => {
        alert("submit button clicked");
    }
     const handleSubmit1= (name) => {
        alert(name+" hello");
    }
  return (
    <div>
        <h1>functins</h1>
        <button onClick={handleSubmit}>submit</button>
        <button onClick={()=>handleSubmit1("raji")}>submit</button>
    </div>
  )*/
