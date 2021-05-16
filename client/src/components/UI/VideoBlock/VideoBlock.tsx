import React from 'react'
import './VideoBlock.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'

interface IVideoBlock {
	parentClass?: string
	modClass?: string[]
	numb: number
	title: string
	link: string
}

const VideoBlock: React.FC<IVideoBlock> = ({ parentClass, modClass, numb, title, link }) => {

	const videoClasses = useCreateClassName('video-block', parentClass, modClass)

	return (
		<div className={videoClasses}>
			<div className="video-block__container">
				<div className="video-block__row">
					<div className="video-block__title">
						<div className="video-block__number">{numb}</div>
						<div className="video-block__text">{title}</div>
					</div>
				</div>
				<div className="video-block__row">
					<div className="video-block__body">
						<div className="video-block__border">
							<div className="video-block__screen">
								<iframe
									className="video-block__iframe"
									width="680"
									height="383"
									src={link}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoBlock