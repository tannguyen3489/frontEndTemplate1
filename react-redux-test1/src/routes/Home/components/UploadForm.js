import React from 'react'
import {debounce} from 'lodash'

class UploadForm extends React.Component {

    constructor(props) {
        super(props);

        this.onClickHandler = debounce(this.onClickHandler.bind(this), 250, {
            'leading': true,
            'trailing': false
        });

        this.state = {
            dataModel: {
                name: 'default',
                email: 'default@gmail.com',
                password: '233',
                agree: true
            },
            options: {
                abcd: 1
            }
        }

        this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);

    }

    onClickHandler() {
        console.info('tan');
    }

    onChangeInputHandler(event) {
        let dataModel = {...this.state.dataModel};
        console.info('test', event.target.name, event.target.value);
        dataModel[event.target.name] = event.target.value;

        this.setState({dataModel: dataModel});
    }


    componentDidMount() {
        let form = $(this.form);
        form.validate({
            submitHandler: function (form) {
                // do other things for a valid form
                console.info('tan form submit');
                return false;
                form.submit();
            }

        });
    }

    toggleCheckbox(event) {
        let dataModel = {...this.state.dataModel};
        dataModel[event.target.name] = !dataModel[event.target.name];
        this.setState({dataModel: dataModel});
    }


    render() {
        return (
            <form ref={(form) => {
                this.form = form;
            }} action="/abcd">
                <button type="button" className="button-test" onClick={this.onClickHandler}>asdfasdf</button>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="name" type="text" required className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           placeholder="Enter email" onChange={this.onChangeInputHandler}
                           value={this.state.dataModel.name}/>
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email address</label>
                    <input name="email" type="email" required className="form-control" id="exampleInputEmail2"
                           aria-describedby="emailHelp"
                           placeholder="Enter email" defaultValue={this.state.dataModel.email}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" defaultValue={this.state.dataModel.password} type="password"
                           className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">
                    <input onChange={this.toggleCheckbox} checked={this.state.dataModel.agree} name="agree"
                           type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

}


export default UploadForm
