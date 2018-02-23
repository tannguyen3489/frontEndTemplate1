import React from 'react'
import './HomeView.scss'
import {Link} from 'react-router'

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            topFive: ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]
        };

        // this.toggle = this.toggle.bind(this);
    }


    componentDidMount() {
    }

    render() {

        let hardcodedUserNameList = this.state.topFive.map((name, index) => {
            return (
                <button key={index} type="button" className="btn btn-primary">
                    <Link to={"/person?userName=" + name} activeClassName='page-layout__nav-item--active'>{name}</Link>
                </button>
            )
        })

        return (
            <div>
                <div className="row header text-center">
                    <div className="col-sm-12"><h4>Home</h4></div>
                </div>

                <div className="row content">
                    <div className="col-sm-12">
                        <h1>Top 5 GitHub Users</h1>
                        <small>Tap the username to see more information</small>
                        <div className="user-list-btn">
                            {hardcodedUserNameList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeView
