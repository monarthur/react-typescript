/// <reference types="react" />
/// <reference types="react-dom" />

import * as React from "react";
import * as ReactDOM from "react-dom";
 let a = "22";
/*const Test = () => {
    return (
        <div className="hej"><h2>Jaha {this.props.vad}</h2></div>
    )
};*/

interface ApanProps  {
    vad: String,

}
interface ApanState  {
    sas: String
}

class Apan extends React.Component<{vad: String}, ApanState> {
    props: ApanProps;

    public render() {
        return (
            <div className="hej"><h2>Jahaja {this.props.vad}</h2></div>
        );
    }
}

ReactDOM.render(<Apan vad="vadåråaaa" />, document.getElementById('app'));