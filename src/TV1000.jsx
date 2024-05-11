import {Link, useNavigate} from 'react-router-dom';

const TV1000 = () => {
	const usenavigate = useNavigate();

	return (
		<div>
			<div>
                <iframe id="video" src='https://spotles365.com/tv1000.html' allow="autoplay; fullscreen" autoplay='autoplay'></iframe>
            </div>
		</div>
	);
}

export default TV1000;