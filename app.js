var App = () => (
  <div>
    <h3>Grocery List</h3>
    <Items items={['beer', 'more beer']}/>
  </div>
);

var Items = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>

    
  </ul>
);






ReactDOM.render(<App />, document.getElementById("app"));