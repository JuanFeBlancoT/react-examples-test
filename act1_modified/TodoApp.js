class TodoApp extends React.Component {
    constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    getCurrentLetter(todoNext){
        return String.fromCharCode(todoNext);
    }

    render() {
    return React.createElement(
        "div",
        null,
        React.createElement(
        "h3",
        null,
        "TODO"
        ),
        React.createElement(TodoList, { items: this.state.items }),
        React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
            React.createElement(
            "label",
            { htmlFor: "new-todo" },
            "What needs to be done?"
        ),
        React.createElement("input", {
            id: "new-todo",
            onChange: this.handleChange,
            value: this.state.text
        }),
        React.createElement(
            "button",
            null,
            "Add #",
            this.getCurrentLetter(this.state.items.length + 65)
        )
        )
    );
    }

    handleChange(e) {
    this.setState({ text: e.target.value });
    }
    
    handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
        return;
    }
    const newItem = {
        text: this.state.text,
        id: this.state.items.length + 65
    };
    this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
    }));
    this.getInfo();
    }


    getInfo(){
        const divChildren = document.getElementById('todos-example').firstElementChild.childNodes;
        let taskUnorderedList = divChildren[1];
        taskUnorderedList.style.listStyleType = "upper-latin";
    }
}


class TodoList extends React.Component {
    render() {
    return React.createElement(
        "ul",
        null,
        this.props.items.map(item => React.createElement(
        "li",
        { key: item.id },
        item.text
        ))
    );
    }
    
}  

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('todos-example'));