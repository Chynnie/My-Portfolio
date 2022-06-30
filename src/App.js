import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skills';

function App() {
	return (
		<div className='box-border h-screen w-screen max-w-full'>
			<Navbar />
			<Home />
			<About />
			{/* <Skills />
			<Projects />
			<Resume />
			<Contact /> */}
		</div>
	);
}

export default App;
