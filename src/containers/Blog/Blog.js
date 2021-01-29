import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import asyncComponent from './../../hoc/asyncComponent'

import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {

    render() {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts' exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>} />
                <Route path='/' render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path='/new-post' component={AsyncNewPost} />
                    <Route path='/posts' component={Posts} />
                    <Redirect from='/' to='/posts' />   
                </Switch>
            </div>
        );
    }
}

export default Blog;