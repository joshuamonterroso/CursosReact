const techReact = (params) => (
  <div className="tech">
    <img src={`${params.base}${params.url}`} />
    <span>{params.name}</span>
  </div>
);
const TECHNOLOGIES = [
  {
    url: 'reactjs.org',
    name: 'React JS',
    base :'https://logo.clearbit.com/',
  },
  {
    url: 'nodejs.org',
    name: 'Node JS',
    base :'https://logo.clearbit.com/',
  },
  {
    url: 'graphql.org',
    name: 'GraphqQL JS',
    base :'https://logo.clearbit.com/',
  },
];
const techRendered = TECHNOLOGIES.map((techprops) => techReact(techprops));
ReactDOM.render(techRendered, document.getElementById('root'));
