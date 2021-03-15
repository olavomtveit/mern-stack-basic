import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './components/registration/Register';
import Layout from './components/layout/Layout';

import { Provider } from 'react-redux';
import Store from './redux/Store';

function App() {
	return (
		<Provider store={Store}>
			<Router>
				<Switch>
					<Layout>
						<Route path='/' exact component={Register} />
					</Layout>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
