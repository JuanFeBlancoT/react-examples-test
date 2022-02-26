class Timer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {hours: 0, minutes: 0, seconds: 0};
    }

    //done each interval
    tick() {
        this.setState(state => ({
        seconds: state.seconds + 1
        }));
        //change minutes and seconds
        if(this.state.seconds>60){
            this.setState(state => ({
            seconds: 0,
            minutes: state.minutes +1
            }));
        }
        //change hours and minutes
        if(this.state.minutes>60){
            this.setState(state => ({
            minutes: 0,
            hours: state.hours +1
            }));
        }
    }

    
    //defines interval
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    //Verifies the time to place a "0" in front of it to match the common time format and returns the new text
    checkTimeFormat(timeX){
        let timeInFormat = timeX;
        if(timeX < 10){
            timeInFormat = "0" + timeX;
        }
        return timeInFormat;
    }

    render() {
        return React.createElement(
            'div',
            null,
            'Seconds: ',
            this.checkTimeFormat(this.state.hours)+":"+this.checkTimeFormat(this.state.minutes)+":"+this.checkTimeFormat(this.state.seconds)
        );
    }
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));