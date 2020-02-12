import React from 'react'
import {connect} from 'react-redux'
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './userHeader';


class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    //we put logic into a separate function, so as to make the render method as simple as possible
    renderList() {

        return this.props.posts.map(post => {
            return(
                <div className="item" key ={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <br/>
                        <UserHeader userId={post.userId}/> {/*WE can reference userId because it is part of the API response*/}
                    </div>
                </div>
            )
        })
    }


    render() {
        
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPostsAndUsers: fetchPostsAndUsers})(PostList);