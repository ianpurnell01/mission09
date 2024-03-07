import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import schoolNames from './CollegeBasketballTeams.json';

interface SchoolProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// set site header
function SiteIntro() {
  return <h1 className="my-5">March Madness</h1>;
}

// take a single school's info and put it into a bootstrap card
class School extends React.Component<SchoolProps> {
  render() {
    const oneSchool = this.props;

    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{oneSchool.school}</h2>
            <h3 className="card-subtitle mb-2 text-muted">
              Mascot: {oneSchool.name}
            </h3>
            <p className="card-text">
              Location: {oneSchool.city}, {oneSchool.state}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

//put all of the schools info into rows, pulling from the json file
function SchoolList() {
  return (
    <div className="row">
      {schoolNames.teams.map((schoolNum: SchoolProps) => (
        <School {...schoolNum} key={schoolNum.school} />
      ))}
    </div>
  );
}

// put it all to use
function App() {
  return (
    <div className="App">
      <SiteIntro />
      <SchoolList />
    </div>
  );
}

export default App;
