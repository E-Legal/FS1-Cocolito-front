import axios from 'axios';

const api_url = "https://fs1-cocolito-server.herokuapp.com";

export const createProject = (project) => (dispatch) => axios.post(api_url + '/posts' , {
    title: project.title,
    message: project.content,
},{
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
}).then(() => {
    dispatch({ type: 'PROJECT_CREATED' });
}).catch((err) => {
    dispatch({ type: 'PROJECT_FAILED' }, err);
});

export const allProject = () => (dispatch) => axios.get(api_url + '/posts', {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
}).then((response) => {
    dispatch(AllProject(response.data));
}).catch((err) => {
    dispatch({ type: 'ALL_PROJECT_FAIL' }, err);
});

export const oneProject = (id) => (dispatch) => axios.get(api_url + '/posts/' + id.id, {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
}).then((response) => {
    dispatch(OneProject(response.data));
}).catch((err) => {
    dispatch({ type: 'ONE_PROJECT_FAIL' }, err);
})

export function OneProject(project) {
    return {
        type: 'ONE_PROJECT_SUCCES',
        project: project
    }
}

export function AllProject(projects) {
    return {
        type: 'ALL_PROJECT_SUCCES',
        projects: projects
    }
};