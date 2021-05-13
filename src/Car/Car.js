import React, { Component } from 'react'
import './Car.css'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Car extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount(){
        if (this.props.index === 0){
            this.inputRef.current.focus()
        }
    }
    
    render() {
        
        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length>4) {
            inputClasses.push('bold')
        }

    

        return (
            <React.Fragment>
                <p>Car name: {this.props.name}</p>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input 
                    ref = {this.inputRef}
                    type="text" 
                    onChange={this.props.onChangeName} 
                    value={this.props.name} 
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

// eslint-disable-next-line import/no-anonymous-default-export
export default withClass(Car, 'Car') 