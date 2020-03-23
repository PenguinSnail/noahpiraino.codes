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
					<div className="home-links-container">
						<div style={{
							gridColumnStart: 1,
							gridColumnEnd: 2,
							gridRowStart: 1,
							gridRowEnd: 2
						}}>
							<Link to="/projects">
								<FontAwesomeIcon icon={faProjectDiagram} />
							</Link>
						</div>
						<div style={{
							gridColumnStart: 2,
							gridColumnEnd: 3,
							gridRowStart: 1,
							gridRowEnd: 2
						}}>
							Check out a list of <Link to="/projects">my projects</Link>
						</div>

						<div style={{
							gridColumnStart: 1,
							gridColumnEnd: 2,
							gridRowStart: 2,
							gridRowEnd: 3
						}}>
							<a href="https://github.com/penguinsnail/">
								<FontAwesomeIcon icon={faCode} />
							</a>
						</div>
						<div style={{
							gridColumnStart: 2,
							gridColumnEnd: 3,
							gridRowStart: 2,
							gridRowEnd: 3
						}}>
							Take a look at the code on <a href="https://github.com/penguinsnail/">my GitHub</a>
						</div>

						<div style={{
							gridColumnStart: 1,
							gridColumnEnd: 2,
							gridRowStart: 3,
							gridRowEnd: 4
						}}>
							<Link to="/posts">
								<FontAwesomeIcon icon={faPen} />
							</Link>
						</div>
						<div style={{
							gridColumnStart: 2,
							gridColumnEnd: 3,
							gridRowStart: 3,
							gridRowEnd: 4
						}}>
							Read some of <Link to="/posts">my posts</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
