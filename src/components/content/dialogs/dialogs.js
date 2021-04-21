import React from "react";
import st from "./dialogs.module.scss";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                <div className={st.dialog + " " + st.active}>
                    <NavLink to="/dialogs/1">Benjamin</NavLink>
                </div>
                <div className={st.dialog}>
                    <NavLink to="/dialogs/2">Albert</NavLink>
                </div>
                <div className={st.dialog}>
                    <NavLink to="/dialogs/3">Henry</NavLink>
                </div>
                <div className={st.dialog}>
                    <NavLink to="/dialogs/4">Gary</NavLink>
                </div>
                <div className={st.dialog}>
                    <NavLink to="/dialogs/5">Robert</NavLink>
                </div>
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