export default function TitleAndSubtitle(props) {
    return (
        <div>
            <h2 className="text-center mb-5">
                <span dangerouslySetInnerHTML={{ __html: props.titolo_normal}}></span>
                <span className="light-blue" dangerouslySetInnerHTML={{ __html:props.titolo_light}}></span>
            </h2>
            <div className="container max-w-[650px] mb-10 mx-auto">
                <p className="text-center" dangerouslySetInnerHTML={{ __html: props.sottotitolo}}>
                </p>
            </div>
        </div>
    )
}