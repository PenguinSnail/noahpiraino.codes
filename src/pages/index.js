import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faProjectDiagram, faCode } from '@fortawesome/free-solid-svg-icons';

import '../styles/index.scss';

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<div style={{ marginBottom: `2.25rem` }}>
				<h2 style={{ marginTop: '2.25rem' }}>Hi, I'm Noah.</h2>
				<div style={{ margin: 'auto', width: '80%' }}>
					<div>
						I'm a High School student from North Carolina with an interest in computer
						science, photography, and other miscellaneous hobbies. This website is here
						to serve as a blog to document my personal projects, and also as a portfolio
						to share my work.
					</div>
					<ul className="home-link-list">
						<li>
							<div className="home-link-list-icon-container">
								<FontAwesomeIcon icon={faProjectDiagram} />
							</div>
							Check out a list of <Link to="/projects">my projects</Link>
						</li>
						<li>
							<div className="home-link-list-icon-container">
								<FontAwesomeIcon icon={faCode} />
							</div>
							Take a look at the code on <a href="https://github.com/penguinsnail/">my GitHub</a>
						</li>
						<li>
							<div className="home-link-list-icon-container">
								<FontAwesomeIcon icon={faPen} />
							</div>
							Read some of <Link to="/posts">my posts</Link>
						</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
