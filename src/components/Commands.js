import Overlay from './Overlay';

const Copy = () => {
    return(
    <Overlay
        text={<span className='tip'>Copy</span>}
        hoverText={<span>Highlight the text by clicking and dragging, then use Ctrl-C or ⌘-C or right-click and select <strong>Copy</strong></span>}
        />
    )
}

const Paste = () => {
    return(
    <Overlay
        text={<span className='tip'>Paste</span>}
        hoverText={<span>Use Ctrl-V or ⌘-V, or right-click and select <strong>Paste</strong></span>}
        />
    )
}

export {Copy, Paste}