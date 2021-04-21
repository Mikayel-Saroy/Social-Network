import React from "react";
import st from "./dialogs.module.scss";

const Dialogs = () => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                <div className={st.dialog + " " + st.active}>Benjamin</div>
                <div className={st.dialog}>Albert</div>
                <div className={st.dialog}>Henry</div>
                <div className={st.dialog}>Gary</div>
                <div className={st.dialog}>Robert</div>
            </div>
            <div className={st.messages}>
                <div className={st.message}>Hi</div>
                <div className={st.message}>How are you doing?</div>
                <div className={st.message}>I'm fine, thanks.</div>
            </div>
        </div>
    );
}

export default Dialogs;