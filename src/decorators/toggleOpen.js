import React from 'react'

export default function toggleOpen(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            isOpen: false,
        }
        render() {
            return <Component {...this.props} {...this.state}
                    toggleOpen = {this.toggleOpen}
                    closeWhenLogOut = {this.closeWhenLogOut}
                    />
        }

        toggleOpen = (ev) => {
            ev && ev.preventDefault && ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        closeWhenLogOut = () => {
            this.setState({
                isOpen: false
            })
        }

    }
}
