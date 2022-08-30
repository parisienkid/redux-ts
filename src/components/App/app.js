import { fetchGameData, fetchPostsData } from "../../fetch actions/fetch";
import { useHttp } from "../../hooks/http-hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import Nav from "../nav/nav";
import Extra from "../extra/extra";
import Footer from "../footer/footer";

import MainPage from "../pages/main/main";
import AboutPage from "../pages/about/about";
import TeamsPage from "../pages/teams/teams";
import GamePage from "../pages/game/game";
import BlogPage from "../pages/blog/blog";
import PostPage from "../pages/post-page/post-page";
import PartnersPage from "../pages/partners/partners";
import ContactsPage from "../pages/contacts/contacts";
import Alert from "../alert/alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {

	const {request} = useHttp();
	const dispatch = useDispatch();

	const { lang } = useSelector(state => state.lang);

	console.log('render')


	useEffect(() => {
		dispatch(fetchGameData(request, `http://localhost:3001/${lang}`));
		dispatch(fetchPostsData(request, `http://localhost:3001/${lang}`));
	}, [lang]);



	return (
		<Router>
			<div className="App">
				<Nav/>
				<Extra/>
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
					<Route path="/teams" element={<TeamsPage/>}/>
					<Route path="/teams/:game" element={<GamePage/>}/>
					<Route path="/blog" element={<BlogPage/>}/>
					<Route path="/blog/:post" element={<PostPage/>}/>
					<Route path="/partners" element={<PartnersPage/>}/>
					<Route path="/contacts" element={<ContactsPage/>}/>
				</Routes>
				<Alert/>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
