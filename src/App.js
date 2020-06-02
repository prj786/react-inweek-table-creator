import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainObject: {
                name: '',
                lastName: '',
                jobTitle: '',
                dob: '',
                joined: ''
            },
            rowList: []
        }
        this.fillingForm = this.fillingForm.bind(this);
    }
    rowList = [];
    obj = {};
    fillingForm(event) {
        switch(event.target.id) {
            case 'name':
                this.obj.name = event.target.value;
                break;
            case 'lastName':
                this.obj.lastName = event.target.value;
                break;
            case 'jobTitle':
                this.obj.jobTitle = event.target.value;
                break;
            case 'dob':
                this.obj.dob = event.target.value;
                break;
            case 'joined':
                this.obj.joined = event.target.value;
                break;
            default:
                break;
        }
        this.setState({
            mainObject: this.obj
        });
    }

    submitForm(e) {
        if (this.state.mainObject.name ||
            this.state.mainObject.lastName ||
            this.state.mainObject.jobTitle ||
            this.state.mainObject.dob||
            this.state.mainObject.joined) {
            this.rowList.push(this.state.mainObject);
        } else {
            alert('Fill the gaps!!');
        }
        this.setState({
            mainObject: {
                name: '',
                lastName: '',
                jobTitle: '',
                dob: '',
                joined: ''
            },
            rowList: this.rowList
        })
    }

  render() {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>This is simple table creation</h1>
            <div className={'app'}>
                <div className={'form'}>
                    <form onSubmit={(e) => {
                        this.submitForm();
                        e.preventDefault();
                    }}>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={this.state.mainObject.name || ''} id={'name'} onChange={this.fillingForm}/>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={this.state.mainObject.lastName || ''} id={'lastName'} onChange={this.fillingForm}/>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input type="text" value={this.state.mainObject.jobTitle || ''} id={'jobTitle'} onChange={this.fillingForm}/>
                        <label htmlFor="dob">D.O.B</label>
                        <input type="text" value={this.state.mainObject.dob || ''} id={'dob'} onChange={this.fillingForm}/>
                        <label htmlFor="joined">Joined</label>
                        <input type="text" value={this.state.mainObject.joined || ''} id={'joined'} onChange={this.fillingForm}/>
                        <button type={'submit'}>add one</button>
                    </form>
                </div>
                <div className={'table'}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Job Title</th>
                                <th>D.O.B</th>
                                <th>Joined</th>
                            </tr>
                        </thead>
                    {
                        this.state.rowList.map((row, index) => {
                            if (row) {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                                <td>{row.name}</td>
                                                <td>{row.lastName}</td>
                                                <td>{row.jobTitle}</td>
                                                <td>{row.dob}</td>
                                                <td>{row.joined}</td>
                                        </tr>
                                    </tbody>
                                )
                            } else {
                                return (
                                    <div>
                                        fill something!!
                                    </div>
                                )
                            }
                        })
                    }
                    </table>
                </div>
            </div>
        </div>
    )
  }
}

export default App;
