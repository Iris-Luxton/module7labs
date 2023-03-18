import React from 'react';
// Higher-Order Components
const withTimeAgo = (WrappedComponent) => {
  class WithTimeAgo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        timeAgo: '',
      };
    }

    componentDidMount() {
      this.updateTimeAgo();
      this.intervalId = setInterval(this.updateTimeAgo, 60000);
    }

    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    updateTimeAgo = () => {
      const { createdAt } = this.props;

      // Calculate time ago here
      const diff = Date.now() - new Date(createdAt).getTime();
      const minutes = Math.floor(diff / 1000 / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      let timeAgo = '';
      if (days > 0) {
        timeAgo = `${days} day${days > 1 ? 's' : ''} ago`;
      } else if (hours > 0) {
        timeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else if (minutes > 0) {
        timeAgo = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      } else {
        timeAgo = 'just now';
      }

      this.setState({
        timeAgo,
      });
    };

    render() {
      return <WrappedComponent {...this.props} timeAgo={this.state.timeAgo} />;
    }
  }

  WithTimeAgo.displayName = `WithTimeAgo(${WrappedComponent.name})`;

  return WithTimeAgo;
};

export default withTimeAgo;