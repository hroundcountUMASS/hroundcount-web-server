import express from 'express';

const app = express();

const PORT = 3000;
app.set('view engine', 'ejs');


app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/contact', (req, res) => {
  res.send('Contact page');
});

app.get('/test', (req, res) => {
  res.send("You've found the test route!");
});

app.get('/', (req, res) => {
  res.send('Hello, web!');
});
//The projects array and route below were part of unit 02, not unite 01, but it required the rest of the code in order to complete so we did it here. This is definitely something to study more.
const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/projects', (req, res) => {
  const tag = req.query.tag;
  // filter `projects` here, based on your decision above; filteredProjects should be an array of projects that match the tag, or all projects if no tag is provided. If a tag is provided that isn't in the list, it should return a message saying so.
  const filteredProjects = tag ? projects.filter(project => project.tag === tag) : projects;
  if (tag && filteredProjects.length === 0) {
    res.send("Sorry, we don't have any projects with that tag :(");
  } else if (tag === undefined) { //SInce the tag is undefined when it is empty
    res.send(projects);
  } else {
    res.send(filteredProjects);
  }
});
//krupp@umass.edu
//mainle@umass.edu
const events = [
  { title: 'Career fair' },
  { title: 'Hackathon kickoff' },
];

app.get('/events', (req, res) => {
  res.render('events', { events });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});