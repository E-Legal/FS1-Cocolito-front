import axios from 'axios';

const apiUrl = 'https://fs1-cocolito-server.herokuapp.com';

export function ProjectByUser(project) {
  return {
    type: 'ALL_PROJECTBYUSER_SUCCES',
    project,
  };
}

export function ProjectByMe(project) {
  return {
    type: 'ALL_PROJECTBYME_SUCCES',
    project,
  };
}

export function OneProject(project) {
  return {
    type: 'ONE_PROJECT_SUCCES',
    project,
  };
}

export function AllProject(projects) {
  return {
    type: 'ALL_PROJECT_SUCCES',
    projects,
  };
}

export const createProject = (title, message) => (dispatch) => axios.post(`${apiUrl}/posts`, {
  title,
  message,
}, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then(() => {
  dispatch({ type: 'PROJECT_CREATED' });
}).catch((err) => {
  dispatch({ type: 'PROJECT_FAILED' }, err);
});

export const allProject = () => (dispatch) => axios.get(`${apiUrl}/posts`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((response) => {
  dispatch(AllProject(response.data));
}).catch((err) => {
  dispatch({ type: 'ALL_PROJECT_FAIL' }, err);
});

export const oneProject = (id) => (dispatch) => axios.get(`${apiUrl}/posts/${id.id}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((response) => {
  dispatch(OneProject(response.data));
}).catch((err) => {
  dispatch({ type: 'ONE_PROJECT_FAIL' }, err);
});

export const projectByUser = (userid) => (dispatch) => axios.get(`${apiUrl}/posts/user/${userid.id}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((response) => {
  dispatch(ProjectByUser(response.data));
}).catch((err) => {
  dispatch({ type: 'ALL_PROJECTBYUSER_FAIL' }, err);
});

export const projectByMe = () => (dispatch) => axios.get(`${apiUrl}/posts/me`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((response) => {
  dispatch(ProjectByMe(response.data));
}).catch((err) => {
  dispatch({ type: 'ALL_PROJECTBYME_FAIL' }, err);
});
