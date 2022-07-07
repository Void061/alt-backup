export default function Divider(props) {
    if (props.type == "footer") {
        return (
            <div className="divider footer relative pb-10"></div>
        )
    }
    else {
        return (
            <div className="divider relative pb-10"></div>
        )
    }
}