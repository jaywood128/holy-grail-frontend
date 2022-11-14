import { useState, useEffect } from 'react';
import read from './services/read.js'
import update from './services/update';
import Header from './components/header/Header';
import Left from './components/left/Left';
import Right from './components/right/Right';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
import axios from 'axios';

const App = () => {
  const [data, setData]   = useState({header:0,left:0,article:0,right:0,footer:0});  

  useEffect(() => {
    // read db data & update UI

    const read = () => {
      var url = '/data';
      return  read(url)
           .then(response => {
            setData(response)
           }) 
    }
    read()

   
}, []);

function handle(section){
    // update db & local state
    const response = update(section.name, section.value)
        .then(res => {
            setData(res)
        });
}
  return (
          <div className="grid">  
          <div>App.js</div>      
            <Header  handle={handle} data={data}/>
            <Left    handle={handle} data={data}/>
            <Article handle={handle} data={data}/>
            <Right   handle={handle} data={data}/>
            <Footer  handle={handle} data={data}/>
        </div>
  );

}

export default App;
