const Paragraph = ({ block, index, log = false }) => {

    // We have list items
    if (block.children && !block.children[0].type) {
        return (
            <p><strong>{block.children[0].text}</strong> {block.children[1].text}</p>
        )
    }

    else if (block.bold) {
        return (
            <p className="strong">{block.text}</p>
        )
    }

    // Normal paragraph
    else
        return (
            <p>{block.text}</p>
        )
}

export default Paragraph;