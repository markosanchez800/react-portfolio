import React, {Component} from 'react';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Header from './components/Header/Header';
import projects from './projects.json';


class App extends Component {
  state = {
    projects: projects,
  }

  render() {
    return (
      <div>
      <Header />
      {this.state.projects.map(project =>
      <ProjectCard
      photo={project.photo}
      name={project.name}
      description={project.description}
      repolink={project.repolink}
      deplink={project.deplink}
      />
      )}
      </div>
    )
  }
}

export default App;
