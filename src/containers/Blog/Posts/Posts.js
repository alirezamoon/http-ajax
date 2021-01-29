import React, { Component } from 'react'
import axios from 'axios'

import Post from './../../../components/Post/Post'
import './Post.css'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Alireza'
                    }
                })
                this.setState({ posts: updatedPosts })
                // console.log(response)
            })
            .catch(error => {
                // this.setState({ error: true })
                console.log(error)
            })
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    render() {
        let posts = <p>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
            })
        }


        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts