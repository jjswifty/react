import React from 'react';

export default class ProfileInfoStatus extends React.Component {

    state = {
        editMode: false
    }

    toggleEditStatus = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render () {
        return (
            <>
                {
                    this.state.editMode ? 
                    <div>
                        <input onChange = {console.log('test')} value={this.props.profileStatus} autoFocus={true} onBlur={this.toggleEditStatus}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.toggleEditStatus} style={{cursor: 'pointer'}}>
                            {this.props.profileStatus}
                        </span>
                    </div>
                }
            </>
        )
    }
}
    

 