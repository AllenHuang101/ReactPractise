import React from 'react';
import { PureComponent } from 'react';

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      books: [
        { name: '你不知道JS', price: 99, count: 1 },
        { name: 'JS高級程序設計', price: 88, count: 1 },
        { name: 'React高級程序設計', price: 78, count: 2 },
        { name: 'Vue高級程序設計', price: 99, count: 3 },
      ],
      friend: {
        name: 'kobe',
      },
    };
  }

  addNewBook() {
    const newBook = { name: 'Angular 高級設計', price: 88, count: 1 };

    // 1. 直接修改原有state, 重新設置一遍
    // 在 PureComponent 是不能引發重新渲染(re-render)
    // this.state.books.push(newBook);
    // this.setState({ books: books });

    // 2. 賦值一份books, 在新的books中修改, 設置新的books
    const books = [...this.state.books];
    books.push(newBook);

    this.setState({ books: books });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // shallowEqual(nextProps, this.props);
    // shallowEqual(nextState, this.state);
  }
  render() {
    const { books } = this.state;

    return (
      <div>
        <h2>數據列表</h2>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={item.name}>
                <span>
                  name: {item.name}-price: {item.price}-count: {item.count}
                </span>
                <button>+1</button>
              </li>
            );
          })}
          <button onClick={(e) => this.addNewBook()}>添加新書籍</button>
        </ul>
      </div>
    );
  }
}

export default App;
