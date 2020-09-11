import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project_details: {},
    };
  }

  componentDidMount() {
    // API CALL FOR DATA avec l'id du poste const { id } = this.props.match.params
    const { id } = this.props.match.params;
    this.setState({
      project_details: {
        id, title: 'Ma journée', content: 'Bonjour tout le monde', author: 'Akisen', userid: '45',
      },
    });
  }

  render() {
    const project = this.state;
    const { auth } = this.props;
    if (!auth.auth.IsAuth) return <Redirect to="/signin" />
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {project.project_details.title}
              -
              {project.project_details.id}
            </span>
            <p>{project.project_details.content}</p>
          </div>
          <div className="card-action grey lighten-4 green-text">
            <Link to={`/profile/${project.project_details.userid}`} key={project.project_details.userid}>
              <div>
                Posted by
                {project.project_details.author}
              </div>
            </Link>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state,
});

export default connect(mapStateToProps)(ProjectDetails);
