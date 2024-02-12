import {ReactNode} from "react";
import {Dialog} from "./Dialog.tsx";

interface Props {
    title?: string;
    children: ReactNode;
}

export const ConfirmDialog = (props: Props) => (
    <Dialog title={props.title}>
        {props.children}
        <hr/>
        <button>Yes</button> <button>No</button>
    </Dialog>
);
