import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index';
import SharedButton from './component/button/index';
import ListItem from './component/listItem/index';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './../src/app.scss'
import { Component } from 'react';

const tempArr = [{
  fName: 'Joe',
  LName: 'Bloggs',
  email: 'joe@gmail.com',
  age: 24,
  onlineStatus: true
}]

const initialState = {
  hideBtn: false
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
   // this.updatesState = this.updatesState.bind(this);
  }

  fetch (){
    this.props.fetchPosts();
    this.updatesState();
  }

  updatesState() {
    const {hideBtn} = this.state;
    this.setState({
      hideBtn : !hideBtn
    })
  }

  returnsAValue(number) {
    return number + 1;
  }

  render() {

    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click the button' tempArr={tempArr}/>
          {!hideBtn && 
            <SharedButton {...configButton} /> 
          }
          {posts.length > 0 &&
            <div>
              {posts.map((post,index) => {
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem key={index} {...configListItem} />
                )

              })}
            </div>
          
          }
        </section>  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect (mapStateToProps, {fetchPosts})(App);