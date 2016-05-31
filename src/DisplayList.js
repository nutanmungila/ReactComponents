import React, {
  Component
} from 'react';

export default class DisplayList extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    var displayList = this.props.names;
    return ( <div className="displayItem">
               <ul>
                  {displayList.map((item)=>{
                    return (<li key={item}>{item}</li>);
                  })}
               </ul>
            </div>);
  }

}
