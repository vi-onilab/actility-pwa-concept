import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Image } from 'elements/Image';
import { MenuNodeLink } from 'elements/MenuNodeLink';
import { ChevronArrowRightIcon } from 'assets/icons';
import { Icon } from 'elements/Icon';

import css from '../Menu.module.scss';

const MenuNodesThirdList = (
	{
		data,
		isActive,
	},
) => (
	<div className={classNames(css.subMenu__row_wrap, isActive && css.subMenu__row_active)}>
		<SwitchTransition>
			<CSSTransition
				key={data?.title}
				addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
				classNames={css.menuThirdListAnimation}
			>
				<>
					{isActive && (
						<div className={classNames(css.subMenu__row, css.hidden)}>
							<MenuNodeLink
								node={data}
								className={classNames(css.subMenu__item, css.horizontalTitle)}
							>
								{data?.content?.categoryWidgetSvgIcon && (
									<Image
										src={data.content.categoryWidgetSvgIcon}
										alt={data?.title}
										className={css.subMenu__item_icon}
									/>
								)}
								<div className={css.subMenu__itemTitle}>{data?.title}</div>
								<Icon src={ChevronArrowRightIcon} className={css.subMenuTitleIcon} />
							</MenuNodeLink>
							<ul className={css.submenuList}>
								{data?.nodes?.map((node, index) => (
									<li
										key={node?.nodeId || index}
										className={css.submenuList__item}
									>
										<MenuNodeLink node={node}>{node?.title}</MenuNodeLink>
									</li>
								))}
							</ul>
							{data?.content?.categoryWidgetThumbnail && (
								<Image
									src={data.content.categoryWidgetThumbnail}
									alt=""
									className={css.subMenu__bg}
								/>
							)}
						</div>
					)}
				</>
			</CSSTransition>
		</SwitchTransition>
	</div>
);

MenuNodesThirdList.defaultProps = {
	data: null,
	isActive: false,
};

MenuNodesThirdList.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	isActive: PropTypes.bool,
};

export { MenuNodesThirdList };
