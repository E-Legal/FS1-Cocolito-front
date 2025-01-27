const initState = {
  projects: [
  ],
  project: {
  },
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PROJECT_CREATED':
      console.log('project created success');
      return {
        ...state,
      };
    case 'PROJECT_FAILED':
      console.log('project created fail');
      return {
        ...state,
      };
    case 'ALL_PROJECT_SUCCES':
      console.log('all project success ');
      return {
        ...state,
        projects: action.projects,
      };
    case 'ALL_PROJECT_FAIL':
      console.log('all project get fail');
      return {
        ...state,
      };
    case 'ONE_PROJECT_SUCCES':
      console.log('one project success');
      return {
        ...state,
        project: action.project,
      };
    case 'ONE_PROJECT_FAIL':
      console.log('one project fail');
      return {
        ...state,
      };
    case 'ALL_PROJECTBYUSER_SUCCES':
      console.log('all project by user id success');
      return {
        ...state,
        projects: action.project,
      };
    case 'ALL_PROJECTBYUSER_FAIL':
      console.log('all project by user id fail');
      return {
        ...state,
      };
    case 'ALL_PROJECTBYME_SUCCES':
      console.log('all project by me success');
      return {
        ...state,
        projects: action.project,
      };
    case 'ALL_PROJECTBYME_FAIL':
      console.log('all project by me fail');
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default projectReducer;
