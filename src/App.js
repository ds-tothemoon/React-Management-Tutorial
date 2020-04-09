import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id : 1,
    image : 'https://placeimg.com/64/64/any',
    name : "문대성",
    birthday : '931202',
    job : "개발자",
    gender : "남자"
  },
  {
    id : 2,
    image : 'https://placeimg.com/64/64/any',
    name : "홍길동",
    birthday : '950613',
    job : "은행원",
    gender : "남자"
  },
  {
    id : 3,
    image : 'https://placeimg.com/64/64/any',
    name : "하상진",
    birthday : '880424',
    job : "개그맨",
    gender : "남자"
  }

]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }             
      </div>
    );
  }
}

export default App;
