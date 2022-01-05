import PropTypes from 'prop-types';
import { Container } from 'elements/Container';
import { Link } from 'elements/Link';
import { LinkArrow } from 'elements/LinkArrow';
import { SectionTitle, SectionTop } from 'elements/Section';
import { useRouter } from 'hooks';
import { Image } from 'elements/Image';

import styles from './BlogWidget.scss';
// that component used from admin panel as Homepage: Blog cms widget

const BlogWidget = ({ pinnedPosts, posts }) => {
	const { getBlogUrl } = useRouter();
	const pinnedPost = pinnedPosts?.items[0];
	const smallPosts = posts?.items;

	return (
		<section className={styles.blogSection}>
			<Container className={styles.container}>
				<div className={styles.blogSection__left}>
					<div className="section-top">
						<h2 className="section-title">How Can You Save Money?</h2>
					</div>
					<Link to={getBlogUrl(pinnedPost)} className={`${styles.blogPost} ${styles.largeSize}`}>
						<div className={styles.blogPost__img}>
							<Image src={pinnedPost.featured_img_url} alt="" />
						</div>
						<div className={styles.blogPost__content}>
							<div className={styles.blogPost__title}>
								{pinnedPost.meta_title}
							</div>
							<div className={styles.blogPost__textPreview}>
								{pinnedPost.meta_description}
							</div>
							{pinnedPost?.publish_time && (
								<div className={styles.blogPost__date}>{pinnedPost.publish_time}</div>
							)}
						</div>
					</Link>
				</div>
				<div className={styles.blogSectionList}>
					<SectionTop className={styles.sectionTop}>
						<SectionTitle>
							IoT news
						</SectionTitle>
						<LinkArrow to="/">
							See all
						</LinkArrow>
					</SectionTop>
					<div className={styles.blogPostWrapper}>
						{smallPosts?.map?.((post) => (
							<Link to={getBlogUrl(post)} className={styles.blogPost} key={+post.post_id}>
								<div className={styles.blogPost__img}>
									<Image src={post.featured_img_url} alt="" />
								</div>
								<div className={styles.blogPost__content}>
									<div className={styles.blogPost__title}>
										{post.title}
									</div>
									{post.publish_time && (
										<div className={styles.blogPost__date}>{post.publish_time}</div>
									)}
								</div>
							</Link>
						))}
					</div>

				</div>
			</Container>
		</section>
	);
};

BlogWidget.propTypes = {
	pinnedPosts: PropTypes.oneOfType([PropTypes.object]).isRequired,
	posts: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BlogWidget;
