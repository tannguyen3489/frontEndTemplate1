import React from 'react'
import {browserHistory} from 'react-router'





class Welcome extends React.Component {

    setValueTitle() {
        console.info('tane')
        this.props.welcomeObj.title = 'afdsfasd6666'
    }

    render() {
        return <h1 onClick={this.setValueTitle.bind(this)}>Hello, {this.props.welcomeObj.title}</h1>;
    }
}

class Person extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            welcome: {
                title: 'afsdfadsf'
            }
        };

        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        let userName = this.props.location.query.userName;

        let url = 'https://api.github.com/users/' + userName;
        var me = this;
        fetch(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            console.log('parsed json', json);
            me.setState({
                user: json
            });

        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    goBack() {
        this.context.router.goBack();

    }


    render() {
        return (
            <div>
                <div className="row header">
                    <div className="left-header-button">
                        <h5 onClick={browserHistory.goBack}>&lt; Back</h5>
                    </div>

                    <div className="col-sm-10">
                        <h5>Person</h5>
                    </div>

                </div>

                <div className="row content">
                    <div className="col-sm-12">
                        <div className="media">
                            <img className="mr-3" src={this.state.user.avatar_url} alt="Generic placeholder image"/>
                            <div className="media-body">
                                <h5 className="mt-0">{this.state.user.name}</h5>
                                {this.state.user.location}
                            </div>
                        </div>
                    </div>
                </div>


                <Welcome welcomeObj={this.state.welcome} />
            </div>
        )
    }
}

Person.propTypes = {};

export default Person
