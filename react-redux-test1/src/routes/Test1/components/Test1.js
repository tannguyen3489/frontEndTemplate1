import React from 'react'
import {BrowserRouter as Router, NavLink, Link, Route} from 'react-router-dom'

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><NavLink to="/test1/index">Home</NavLink></li>
                <li><NavLink to="/test1/about">About</NavLink></li>
                <li><NavLink to="/test1/topics">Topics</NavLink></li>
            </ul>

            <hr/>

            <Route exact path="/test1/index" component={Home}/>
            <Route path="/test1/about" component={About}/>
            <Route path="/test1/topics" component={Topics}/>
        </div>
    </Router>
)

export const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

export const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

export const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <NavLink to={`${match.url}/rendering`}>
                    Rendering with React
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={"active"} to={`${match.url}/components`}>
                    Components
                </NavLink>
            </li>
            <li>
                <NavLink to={`${match.url}/props-v-state`}>
                    Props v. State
                </NavLink>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

// export const Topic = ({match}) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// )

export class Topic extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let match = this.props.match;
        return (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        )
    }
}

export default BasicExample
