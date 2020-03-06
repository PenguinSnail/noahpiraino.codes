import React from 'react';
import { Link } from 'gatsby';

import getPosts from '../hooks/getPosts';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostLink from '../components/postLink';

const PostsPage = () => {
	const posts = getPosts();

	return (
		<Layout>
			<SEO title="Posts" />
			{posts.length < 1 && (
				<div style={{ textAlign: 'center' }}>
					It doesn't look like there are any posts yet!
				</div>
			)}
			{posts.map(({ id, excerpt, frontmatter, fields }, i) => (
				<div key={id}>
					{i > 0 && <hr />}
					<PostLink
						slug={fields.slug}
						title={frontmatter.title}
						date={frontmatter.date}
						excerpt={excerpt}
					/>
				</div>
			))}
		</Layout>
	);
};

export default PostsPage;
