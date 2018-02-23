import React from 'react'
import PropTypes from 'prop-types'

class Test1 extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
    }


    updateData() {
        this.props.loadData();
    }


    render() {
        debugger;
        let itemList = this.props.dataList.map((obj, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{obj.userId}</td>
                    <td>{obj.id}</td>
                    <td>{obj.title}</td>
                </tr>
            )
        });
        return (
            <div style={{margin: '0 auto'}}>
                <button onClick={this.updateData}>Reload</button>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Id</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {itemList}
                    </tbody>
                </table>
            </div>
        )
    }
}

Test1.propTypes = {
    loadData: PropTypes.func.isRequired,
    dataList: PropTypes.array.isRequired
};

export default Test1
