import {connect} from 'react-redux'
import {doubleAsync, increment} from '../modules/person'
import Counter from '../components/Person'


const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
