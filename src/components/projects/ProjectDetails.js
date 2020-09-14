import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { oneProject } from "../../store/action/projectActions";

class ProjectDetails extends React.Component {

  componentDidMount() {
    // API CALL FOR DATA avec l'id du poste const { id } = this.props.match.params
    /*const { id } = this.props.match.params;
    this.setState({
      project_details: {
        id, title: 'Ma journée', content: 'Bonjour tout le monde', author: 'Akisen', userid: '45',
      },
    });*/
    this.props.oneProject(this.props.match.params);
  }

  render() {
    const { auth, project } = this.props;
    if (!auth.auth.IsAuth) return <Redirect to="/signin" />
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {project.project.project.title}
              -
              {project.project.project.id}
            </span>
            <p>{project.project.project.message}</p>
          </div>
          <div className="card-action grey lighten-4 green-text">
            <Link to={`/profile/${project.project.project.user_id}`} key={project.project.project.user_id}>
              <pre>
                Posted by {project.project.project.username}
              </pre>
            </Link>
            <div>{project.project.project.createdDate}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state,
  project: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    oneProject: (id) => dispatch(oneProject(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
