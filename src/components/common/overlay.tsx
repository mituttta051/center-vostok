interface OverlayProps {
    onClick?: () => void;
}

export default function Overlay(props: OverlayProps) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 overflow-hidden"
            onClick={props.onClick}
        ></div>
    );
}
