import {Link, useNavigate} from 'react-router-dom';

const Home = () => {
	const usenavigate = useNavigate();
	
	return (
		<div>
			<h1>ВЫБОР КАНАЛОВ</h1>
			<div className="wrapper">
				<div>
					<Link to="/tv1000"><button>TV1000</button></Link>
					<iframe src="https://gigtv.crimeastar.net/channel/149" scrolling="yes"></iframe>
				</div>
				<div>
					<Link to="/tv1000act"><button>TV1000 Action</button></Link>
					<iframe src="https://gigtv.crimeastar.net/channel/170" scrolling="yes"></iframe>
				</div>
				<div>
					<Link to="/tv1000rus"><button>TV1000 Русское кино</button></Link>
				</div>
				<div>
					<Link to="/tv1000com"><button>TV1000 Comedy</button></Link>
					<p>programma</p>
				</div>
				<div>
					<Link to="/tv1000meg"><button>TV1000 Megahit</button></Link>
					<p>programma</p>
				</div>					
			</div>
		</div>
	);
}

export default Home;