import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faProjectDiagram, faCode } from '@fortawesome/free-solid-svg-icons';

import Img from 'gatsby-image';

import '../styles/pages/index.scss';

// query to pull in the profile picture
export const query = graphql`
	query PortraitQuery {
		file(relativePath: {eq: "portrait.jpg"}) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Home" />
			<div className="body">
				<h2 className="title">Hi, I'm Noah.</h2>
				<div className="content">
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
					<Img className="portrait" fluid={data.file.childImageSharp.fluid} />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
