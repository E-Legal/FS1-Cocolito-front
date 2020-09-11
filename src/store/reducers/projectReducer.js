const initState = {
  projects: [
    { id: '1', title: 'Zbeub', content: 'Lorem' },
    { id: '2', title: 'Zbaub', content: 'Lorem' },
    { id: '3', title: 'Zboub', content: 'Lorem' },
  ],
};

const projectReducer = (state = initState, action) => state;

export default projectReducer;
