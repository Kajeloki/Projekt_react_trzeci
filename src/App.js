
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import Header from './components/Header';
import React, {useState} from 'react';

function App() {
  
  const table='';
  const [enteredData, setEnteredData]=useState('');
  const onAddDataHandler = newData =>{
    
    // setEnteredData(prevEnteredData =>
    // {
    //   return [newData,...enteredData];
    // });
    setEnteredData(newData);
    console.log(newData);
    //console.log(enteredData[0]);
  };


  return (
    <div>
    <Header />
      <Form onAddData={onAddDataHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table toShowData={enteredData}/>
    </div>
  );
}

export default App;
